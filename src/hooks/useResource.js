import { useState, useEffect } from "react";
import axios from "axios";

function useResource(page, perPage) {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel;
    setLoading(true);
    if (page > 1) {
      console.log("params", page, perPage);
      axios({
        method: "GET",
        url: `http://localhost:3001/resource?sortBy=likes:desc&page=${page}&limit=${perPage}`,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
        withCredentials: true,
      })
        .then((res) => {
          const resData = res.data.resources.reduce(
            (obj, cur) => ({ ...obj, [cur.id]: cur }),
            {}
          );
          setResources({ ...resources, ...resData });
          setHasMore(res.data.total > page);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            setLoading(false);
            return;
          }
          setError(err.message);
        });
    }

    setLoading(false);
  }, [page]);
  return { loading, error, hasMore, resources };
}
export default useResource;
