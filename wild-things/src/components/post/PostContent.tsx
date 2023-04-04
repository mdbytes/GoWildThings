import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import { PortfolioItems } from './PortfolioItems';
import {
  getMainContent,
  getPost,
  getPostId,
  slideShowSetup,
} from '../../utils';
import { SeoOptimized } from '../layout';
import { PortfolioDetails } from '../../types';

export const PostContent = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: '',
    content: { rendered: '' },
    title: { rendered: '' },
  });
  const [portfolioDetails, setPortfolioDetails] = useState<PortfolioDetails>({
    images: [],
    elements: [],
  });

  const [postId, setPostId] = useState('');

  const [mainContent, setMainContent] = useState('');

  useEffect(() => {
    const setUpPost = async (id: string) => {
      let post = await getPost(id);
      let portfolioData = slideShowSetup(post);
      let postContent = getMainContent(post);
      let postContentId = getPostId(post);
      setPost(post);
      setPortfolioDetails(portfolioData);
      setMainContent(postContent);
      setPostId(postContentId);
      console.log(portfolioData);
    };
    setUpPost(id as string);
  }, [id]);

  if (!post) {
    return (
      <div
        style={{
          height: '60vh',
          marginTop: 175,
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        id="locating-post"
      >
        Locating Post
      </div>
    );
  } else {
    return (
      <section id="post" className="post" style={{ minHeight: '100vh' }}>
        <SeoOptimized title="Gallery" />
        <div className="container">
          <div className="row text-center mt-5">
            <h1 className="display-3 fw-bold text-capitalize">
              {post.title.rendered}
            </h1>
            <div className="heading-line"></div>
          </div>
        </div>

        <div className="container post-text" id={postId}>
          {parse(mainContent)}
        </div>

        <div className="container portfoio">
          <p className="mobilePresent">
            Tap on any image to display in full screen gallery.
          </p>
          <p className="largePresent">
            Hover over any image to display in full screen gallery.
          </p>
          <PortfolioItems portfolio={portfolioDetails} />
        </div>
      </section>
    );
  }
};
