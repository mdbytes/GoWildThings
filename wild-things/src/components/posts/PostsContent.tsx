import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
import { PostsContentProps } from '../../types';

export const PostsContent = (props: PostsContentProps) => {
  let { posts } = props;
  return (
    <div id="adventures" className="service-objects">
      {posts.map((post) => (
        <div className="row service-item-row" key={post.title.rendered}>
          <div className="col-lg-6 col-sm-12 col-xs-12 posts-column">
            <div className="posts__content">
              <h3 className="display-3--title">{post.title.rendered}</h3>
              <span className="lh-lg">{parse(post.excerpt)}</span>
              <div className="learn-btn">
                <NavLink
                  to={`/post/${post.id}`}
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  See More
                  <span>
                    <i className="bi bi-images"></i>
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12  posts-column">
            <div className="posts__pic">
              <NavLink to={`/post/${post.id}`}>
                <img
                  src={post.fimg_url}
                  alt="UI Design"
                  className="img-fluid"
                />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
