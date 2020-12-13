import React from "react";
import { getImageUrl, imageSize } from "../../services/imageService";
import { convertDate } from "../../services/helper";
import { Link } from "react-router-dom";
import "./post.css";

const Post = (props) => {
  return (
    <Link
      className="post-container"
      to={{
        pathname: "/post/" + props.post._id,
        state: { postId: props.post._id, post: props.post },
      }}
    >
      <div className="image" style={{ backgroundImage: `url(${getImageUrl(props.post.images[0], imageSize.MEDIUM)})` }} >

      </div>
      <div className="content">
        <div className="title">
          {props.post.title}
        </div>
        <div className="extra-info">
          <div className='date'>
            {convertDate(props.post.date)}
          </div>
          <div className='bedrooms'>
            {props.post.bedrooms} BR,
          </div>
          <div className='area'>
            {props.post.area} ft²,
          </div>
          <div className='city'>
            {props.post.neighborhood.join(" ")}
          </div>
        </div>
      </div>
      <div className="price">
        $ {props.post.price}
      </div>
    </Link>
  );
};

export default Post;
