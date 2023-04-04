import { useEffect } from 'react';
import { AboutContent, AboutIntro } from '../../components/about';
import { SeoOptimized } from '../../components/layout';

export const About = () => {
  useEffect(() => {
    document.querySelector('#homeLink')?.classList.remove('active');
  }, []);

  return (
    <div id="about-page" className="about-page">
      <SeoOptimized title="About Martin & Rose" />
      <div className="container">
        <AboutIntro />
        <AboutContent />
      </div>
    </div>
  );
};
