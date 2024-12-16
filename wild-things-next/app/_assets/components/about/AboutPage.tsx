import { AboutContent } from './AboutContent';
import { AboutIntro } from './AboutIntro';

const AboutPage = () => {
  return (
    <div className="page" id="about-page">
      <AboutIntro />
      <AboutContent />
    </div>
  );
};

export default AboutPage;
