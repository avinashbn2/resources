import styles from "./resourceItem.module.scss";
import PropTypes from "prop-types";
import Link from "../Link";
import { VIEW_TYPE } from "../../utils/constants";
import { FaThumbsUp } from "react-icons/fa";
import classNames from "classnames";
const ResourceItem = ({
  innerRef,
  name,
  url,
  tag,
  excerpt,
  author,
  sitename,
  image,
  viewType = VIEW_TYPE.GRID,
  id,
  likeByUser,
  likes,
  onLike,
}) => {
  const onClick = () => {
    onLike({ rid: id });
  };
  return (
    <div ref={innerRef} className={styles.resourceItem}>
      <h4 className={styles.resourceItemName}>
        <Link title={name} to={url} />{" "}
      </h4>
      <div className={styles.resourceItemTag}>{tag}</div>
      <div className={styles.resourceItemExcerpt}>
        <div>{excerpt}</div>
      </div>
      {viewType === VIEW_TYPE.GRID && image && (
        <img loading="lazy" width="100%" src={image} />
      )}
      <div className={styles.resourceItemFooter}>
        <div className={styles.resourceItemBy}>
          <span>
            {author ? `${author},` : ""} {sitename}
          </span>
        </div>
        <div className={styles.likesContainer}>
          <FaThumbsUp
            onClick={onClick}
            className={classNames(
              styles.likesContainerIcon,
              likeByUser ? styles.likesContainerLike : ""
            )}
          />
          {likes}
        </div>
      </div>
    </div>
  );
};

ResourceItem.propTypes = {
  children: PropTypes.array,
};
export default ResourceItem;
