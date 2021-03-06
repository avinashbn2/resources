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
import Input from "../Input";
import Select from "../Select";

const ResourceContainer = ({
  searchKey,
  setSearchKey,
  innerRef,
  resources,
  setResources,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
}) => {
  const [viewType, setViewType] = useState(VIEW_TYPE.GRID);

  const onLike = (params) => {
    like(params);
    const idFound = resources.findIndex((val) => val.id === params.rid);
    const obj = resources[idFound];
    const { likeByUser = false, likes = 0 } = obj;
    resources.splice(idFound, 1, {
      ...obj,

      likeByUser: !likeByUser,
      likes: likeByUser ? likes - 1 : likes + 1,
    });
    setResources([...resources]);
  };
  return (
    <div className={styles.resourceContainer}>
      <div className={styles.resourceContainerToolbar}>
        <Input
          label="Search.."
          placeholder="Search..."
          value={searchKey}
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
          bg="Light"
        />
        <Select
          options={[
            { label: "Title", value: "title" },
            { label: "Added", value: "created_at" },
            { label: "Likes", value: "likes" },
          ]}
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        ></Select>
        <Select
          options={[
            { label: "asc", value: "asc" },
            { label: "desc", value: "desc" },
          ]}
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
          }}
        ></Select>
        {viewType === VIEW_TYPE.LIST && (
          <Grid className="icon" onClick={() => setViewType(VIEW_TYPE.GRID)} />
        )}
        {viewType === VIEW_TYPE.GRID && (
          <List className="icon" onClick={() => setViewType(VIEW_TYPE.LIST)} />
        )}
      </div>
      <div className={styles[`resourceContainer${viewType}`]}>
        {resources.map(
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
                index={index}
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
      </div>
    </div>
  );
};

ResourceContainer.propTypes = {
  children: PropTypes.array,
};
export default ResourceContainer;
