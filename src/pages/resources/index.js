import ResourceContainer from "../../components/ResourceContainer";
import { useRef, useCallback, useState, useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import * as actions from "../../redux/services/headers";
import {
  useGetResourceQuery,
  api as resourceApi,
} from "../../redux/services/resource";
import { useDebounce } from "../../hooks/useDebounce";
import { usePrevious } from "../../hooks/usePrevious";
import { initializeStore, removeUndefined } from "../../redux/store";

const Resources = () => {
  const [page, setPage] = useState(1);
  const observer = useRef();
  const [pageinatedResource, setPageinatedResource] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [sortBy, setSortBy] = useState("likes");
  const [sortOrder, setSortOrder] = useState("desc");
  const [perPage, setPerPage] = useState(20);

  const search = useDebounce(searchKey);
  const prevSearch = usePrevious(search);
  const {
    data: { resources = [], total } = {},
    isFetching,
    isLoading,
    isError,
  } = useGetResourceQuery({ page, perPage, sortBy, sortOrder, search });

  console.log(
    "page, perPage, sortBy, sortOrder, search",
    page,
    perPage,
    sortBy,
    sortOrder,
    search
  );
  // clear data if search key has changed
  useEffect(() => {
    if (search !== prevSearch) {
      setPageinatedResource([]);
      setPage(1);
    }
  }, [search, prevSearch]);
  useEffect(() => {
    setPageinatedResource([]);
    setPage(1);
  }, [sortOrder, sortBy]);

  // append new data (for infinite scroll)
  useEffect(() => {
    if (resources && resources.length > 0) {
      setPageinatedResource([...pageinatedResource, ...resources]);
    }
  }, [resources]);

  const lastElement = useCallback((node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        //if (total > 20 * page) {
        setPage((ppage) => ppage + 1);
        //}
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);
  if (isLoading || isFetching) {
    <div>Loading...</div>;
  }
  return (
    <Wrapper>
      <ResourceContainer
        searchKey={searchKey}
        innerRef={lastElement}
        resources={pageinatedResource}
        setResources={setPageinatedResource}
        setSearchKey={setSearchKey}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </Wrapper>
  );
};

export const getServerSideProps = async (ctx) => {
  const store = initializeStore();
  await store.dispatch(actions.store(ctx.req.headers));

  await store.dispatch(resourceApi.endpoints.getResource.initiate());
  const {
    data,
    error: { status } = {},
    ...others
  } = resourceApi.endpoints.getResource.select()(store.getState());
  console.log("DATA", data, others);

  if (status === 401) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  const initialResource = {};
  console.log("INITIALRESOURCE", initialResource);

  return {
    props: {
      initialReduxState: removeUndefined(store.getState()),
      initialResource,
    },
  };
};
export default Resources;
