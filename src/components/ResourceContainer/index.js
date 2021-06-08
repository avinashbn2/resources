import styles from "./resourceContainer.module.scss";
import PropTypes from "prop-types";
import ResourceItem from "../ResourceItem";
import { useState } from "react";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BsFillGrid3X3GapFill as Grid } from "react-icons/bs";
import { FaList as List } from "react-icons/fa";
import { VIEW_TYPE } from "../../utils/constants";
import { like } from "../../api";

const ResourceContainer = ({ innerRef, resources, setResources }) => {
  const [viewType, setViewType] = useState(VIEW_TYPE.GRID);

  const onLike = (params) => {
    like(params);
    const currentObj = resources[params.rid];
    setResources({
      ...resources,
      [params.rid]: {
        ...currentObj,
        likeByUser: !currentObj.likeByUser,
        likes: currentObj.likeByUser
          ? currentObj.likes - 1
          : currentObj.likes + 1,
      },
    });
  };
  return (
    <div className={styles.resourceContainer}>
      <div className={styles.resourceContainerToolbar}>
        {viewType === VIEW_TYPE.LIST && (
          <Grid className="icon" onClick={() => setViewType(VIEW_TYPE.GRID)} />
        )}
        {viewType === VIEW_TYPE.GRID && (
          <List className="icon" onClick={() => setViewType(VIEW_TYPE.LIST)} />
        )}
      </div>
      <PerfectScrollbar
        option={{ suppressScrollX: true }}
        className={styles[`resourceContainer${viewType}`]}
      >
        {Object.values(resources).map(
          (
            {
              url,
              name,
              id,
              tag,
              author,
              sitename,
              excerpt,
              image,
              likeByUser,
              likes,
            },
            index
          ) => {
            return (
              <ResourceItem
                innerRef={index === resources.length - 1 ? innerRef : undefined}
                key={id}
                url={url}
                id={id}
                name={name}
                tag={tag}
                author={author}
                sitename={sitename}
                excerpt={excerpt}
                image={image}
                viewType={viewType}
                likeByUser={likeByUser}
                likes={likes}
                onLike={onLike}
              />
            );
          }
        )}
      </PerfectScrollbar>
    </div>
  );
};

ResourceContainer.propTypes = {
  children: PropTypes.array,
};
export default ResourceContainer;
