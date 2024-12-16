export const AboutContent = () => {
    return (
        <div id="about-us" className="container">
            <div id="fourth_row" className="row">
                <div className="col-lg-6">
                    <div id="about_us" className="card">
                        <div className="card-body">
                            <h3 className="card-title">Martin & Rose</h3>
                            <p className="card-text">
                                Martin Dwyer&apos;s passion is for nature and
                                wildlife, his occupation is website development.
                                Over the years, the digital photography from his
                                nature adventures provides great content for
                                website development. This site is both an
                                example of Martin&apos;s development work and a
                                look inside his nature adventures with his
                                business partner and wife, Rose.
                                <br /> <br />
                                This website shares stories and pictures from
                                their wildlife adventures targeted at capturing
                                digital images of wild things in nature..
                                Together, they have visited some of the most
                                exciting nature spots in North America.
                                <br />
                                <br />
                                For more information about Martin, Rose, or any
                                place they have visited, please contact them at
                                the contact page on this website.
                                <br />
                                <br />
                                If you are interested in more information about
                                website development or web applications, please
                                visit <a href="https://mdbytes.com">
                                    MD Bytes
                                </a>{' '}
                                and contact Martin.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div id="about_us_image" className="card">
                        <div className="card-body">
                            <h3 className="card-title">
                                From State Forest State Park
                            </h3>
                            <p className="card-subtitle">
                                Lake Agnes, Colorado, Elevation 10,666 feet
                            </p>
                            <p className="p-center-image">
                                <img
                                    src="https://wildthings.wp.mdbytes.us/wp-content/uploads/2019/01/000-1.jpg"
                                    alt="about us"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="feature_photo" className="row">
                <h3 className="title">From Grand Teton National Park</h3>
                <p className="subtitle">Jenny Lake Trail Head, Wyoming</p>
                <p className="p-full-image">
                    <img
                        src="https://wildthings.wp.mdbytes.us/wp-content/uploads/2022/01/gtnp-scaled.jpeg"
                        alt="feature"
                    />
                </p>
            </div>

            <div id="sixth_row" className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="title">Alpine Ridge Trail</h3>
                            <p className="subtitle">
                                Rocky Mountain National Park
                            </p>
                            <p className="p-center-image">
                                <img
                                    src="https://wildthings.wp.mdbytes.us/wp-content/uploads/2022/01/rmnp-1.jpeg"
                                    alt="about us"
                                    height="300"
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="title">Geothermals</h3>
                            <p className="subtitle">
                                Yellowstone National Park
                            </p>
                            <p className="p-center-image">
                                <img
                                    src="https://wildthings.wp.mdbytes.us/wp-content/uploads/2022/01/geoynp.jpeg"
                                    alt="about us"
                                    height="300"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
