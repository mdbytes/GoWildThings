import { useEffect, useState } from 'react';
import { getPosts } from '../../utils';
import { PostsContent, PostsIntro } from '../../components/posts';
import { SeoOptimized } from '../../components/layout';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const setUpPosts = async () => {
      let blogPosts = await getPosts();
      setPosts(blogPosts);
    };

    setUpPosts();
    console.log(posts);
  }, [posts]);

  if (posts) {
    return (
      <section id="posts" className="posts" style={{ minHeight: '100vh' }}>
        <SeoOptimized title="Nature Adventures" />
        <div className="container">
          <PostsIntro />
          <PostsContent posts={posts} />
        </div>
      </section>
    );
  } else {
    return (
      <section id="posts" className="posts">
        <div className="container">
          {' '}
          <div
            style={{
              height: '30vh',
              marginTop: 175,
              color: 'black',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            id="locating-post"
          >
            Retrieving Posts...
          </div>
        </div>
      </section>
    );
  }
};
