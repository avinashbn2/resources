import ResourceContainer from "../components/ResourceContainer";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import styles from "../styles/pages/resources.module.scss";
import { useRef, useCallback, useState, useEffect } from "react";
import useResource from "../hooks/useResource";
import axios from "axios";
const Resources = ({ resources = {} }) => {
  console.log("res, ", resources);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const observer = useRef();
  const [pageinatedResource, setPageinatedResource] = useState([]);
  const { loading, error, hasMore, resources: Resources = {} } = useResource(
    page,
    perPage
  );
  useEffect(() => {
    if (Resources && Object.keys(Resources).length > 0) {
      setPageinatedResource(Resources);
    } else {
      setPageinatedResource(resources);
    }
  }, [Resources, resources]);

  const lastElement = useCallback((node) => {
    if (loading) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("visible");
        setPage((ppage) => ppage + 1);
      }
    });
    if (node) {
      observer.current.observe(node);
    }
  }, []);
  return (
    <Container className={styles.resources}>
      <Sidebar />
      <ResourceContainer
        innerRef={lastElement}
        resources={pageinatedResource}
        setResources={setPageinatedResource}
      />
      {loading && <div>Loading...</div>}
    </Container>
  );
};

Resources.getInitialProps = async (ctx) => {
  const redirectOnError = () =>
    typeof window !== "undefined"
      ? Router.push("/")
      : ctx.res.writeHead(302, { Location: "/" }).end();
  try {
    const {
      data: { Resources: resources = {} },
    } = await axios.get(
      "http://localhost:3001/resource?sortBy=likes:desc&page=1&limit=20",
      {
        headers: ctx.req.headers,
      }
    );

    const resObject = resources.reduce(
      (obj, res) => ({ ...obj, [res.id]: res }),
      {}
    );
    console.log("resobject", resObject);
    return { resources: resObject };
  } catch (err) {
    console.log("error", err);
    if (err.response.status === 401) {
      redirectOnError();
    }
  }
  return { resources: [] };
};
export default Resources;
