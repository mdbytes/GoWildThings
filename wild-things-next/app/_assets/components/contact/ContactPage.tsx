import { ContactForm } from './ContactForm';

export const Contact = () => {
    return (
        <div className="post-page pt-5">
            <div className="contact">
                <section id="contact" className="get-started container-fluid">
                    <h1 className="display-3 text-center pt-5 mb-3">Contact</h1>
                    <div className="heading-line mb-1"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="cta-info w-100">
                                    <h3 className="display-4">
                                        Website Solutions
                                    </h3>
                                    <p>
                                        If this website has sparked an interest
                                        in your own website needs, please
                                        contact us for free consultation.
                                    </p>{' '}
                                    <ul className="fa-ul">
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-envelope"></i>
                                            </span>
                                            Send me a message with the form on
                                            this page.
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </span>
                                            Describe your situation, including
                                            medical challenges you would like to
                                            overcome.
                                        </li>
                                        <li>
                                            <span className="fa-li">
                                                <i className="fa-solid fa-trophy"></i>
                                            </span>
                                            Tell me what you want to accomplish.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
