import { ContactForm } from '../../components/contact';
import { PageHeader } from '../../components/layout';

export const Contact = () => {
  return (
    <div className="contact">
      <PageHeader page="Contact Us" icon="bi bi-envelope-fill" />

      <section id="contact" className="get-started container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="cta-info w-100">
                <h3 className="display-4">Next steps?</h3>
                <p style={{ color: 'black' }}>
                  Let's get started on an awesome website for you!
                </p>
                <ul className="fa-ul">
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    Send us a message today.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-flag-checkered"></i>
                    </span>
                    Give us an idea of your strategic objectives.
                  </li>
                  <li>
                    <span className="fa-li">
                      <i className="fa-solid fa-money-bill-1-wave"></i>
                    </span>
                    Tell us about your business needs.
                  </li>
                </ul>
                <p style={{ color: 'black' }}>
                  We will contact you within 24 hours with a range of
                  alternatives.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
