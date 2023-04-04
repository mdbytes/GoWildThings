import { NavLink } from 'react-router-dom';
import { SeoOptimized } from '../../components/layout';

export const Home = () => {
  return (
    <section id="home" className="intro-section">
      <SeoOptimized title="Wild Things Photography" />
      <div className="container">
        <div className="col-lg-12 intros">
          <div id="intro">
            <h1 className="company-font">
              WildThings Photography
              <br />
            </h1>
            <span className="display-2--description lh-base">
              <div id="tagline">
                Capturing pictures of wild things in their natural habitat
              </div>
              <br />
              <br />A site demo by{' '}
              <a href="https://mdbytes.com">
                <span className="name-style">
                  <span className="logo-style">md </span>Bytes
                </span>
              </a>
            </span>

            <NavLink
              className="rounded-pill btn-rounded"
              to={{
                pathname: '/posts',
              }}
            >
              Galleries{' '}
              <span>
                <i className="bi bi-images"></i>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
