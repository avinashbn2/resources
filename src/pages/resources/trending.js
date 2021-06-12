import ResourceContainer from "../../components/ResourceContainer";
import { useRef, useCallback, useState, useEffect } from "react";
import Wrapper from "../../components/Wrapper";
import * as actions from "../../redux/services/headers";
import {
  useGetResourceByTrendingQuery,
  api as resourceApi,
} from "../../redux/services/resource";
import { initializeStore, removeUndefined } from "../../redux/store";

const Resources = () => {
  const [page, setPage] = useState(1);
  //const [perPage, setPerPage] = useState(30);
  const observer = useRef();
  const [pageinatedResource, setPageinatedResource] = useState([]);

  const {
    data: { resources = [], total } = {},
    isFetching,
    isLoading,
    isError,
  } = useGetResourceByTrendingQuery(page, 20, "likes", "desc");

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
        if (total > 20 * page) {
          setPage((ppage) => ppage + 1);
        }
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);
  if (isLoading || isFetching) {
    return <div style={{ fontSize: 25 }}>Loading...</div>;
  }
  return (
    <Wrapper>
      <ResourceContainer
        innerRef={lastElement}
        resources={pageinatedResource}
        setResources={setPageinatedResource}
      />
    </Wrapper>
  );
};

export const getServerSideProps = async (ctx) => {
  const store = initializeStore();
  await store.dispatch(actions.store(ctx.req.headers));
  await store.dispatch(resourceApi.endpoints.getResourceByTrending.initiate());
  const { data } = resourceApi.endpoints.getResourceByTrending.select()(
    store.getState()
  );

  const initialResource = {};

  return {
    props: {
      initialReduxState: removeUndefined(store.getState()),
      initialResource,
    },
  };
};
export default Resources;
