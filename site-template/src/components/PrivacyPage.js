import React, { Component } from "react";
import GLightbox from "glightbox";
import { NavLink } from "react-router-dom";
const axios = require("axios");
class PrivacyPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    if (this.props.posts) {
      this.setState({
        posts: this.props.posts,
      });
    } else {
      axios
        .get("https://gowildthings.com/wp-json/wp/v2/posts?_embed")
        .then((response) => {
          console.log(response.data);
          this.setState({ posts: response.data });
        });
    }
  }

  componentDidUpdate() {
    console.log("state:", this.state.posts);
  }

  render() {
    return (
      <section id="privacy-page" className="privacy">
        <div id="privacy-info" className="container">
          <h3>Your Privacy</h3>
          <p className="privacy-intro">
            MD Web Technologies, MD Bytes, and Developer Martin Dwyer
            (henceforth referred to collectively as mdbytes.com) respects your
            privacy and is committed to protecting your personal information
            that you provide to us. This statement explains our policies and
            practices regarding the use and disclosure of your personal
            information by mdbytes.com. Please note that, mdbytes.com reviews
            and updates this Privacy Policy from time to time as needed without
            notice. Therefore, you should review the terms of this policy
            periodically to make sure that you are aware of how mdbytes.com
            collects and uses personal information. By using our web site, you
            consent to the collection and use of your personal information by
            mdbytes.com as explained below.
          </p>

          <ol>
            <li>
              <b>Personal Information.</b>
              You have complete control over your personal information. In
              general, you can visit our web site without providing us with any
              personal information. However, there are instances where we must
              have your personal information in order for us to grant you an
              access to our protected and secured sites. This information may
              include registration data (your name, address, email address,
              phone number, title, etc.), information request data and response
              data ("User Information"). When you receive your confirmation
              email or when you receive any email from the list server, you will
              be given instructions on how to remove yourself from the list.
            </li>
            <li>
              <b>Use of User Information.</b>
              We intend to use such information for purposes of supporting your
              and your employers relationship with mdbytes.com by designing a
              web site content that is suitable to your needs and alerting you
              to new product and service offerings as they become available.
              This User Information may be retained by mdbytes.com to verify
              compliance with the agreement between mdbytes.com and your
              employer, to keep track of the domains from which people visit us,
              to create a user profile to better serve you and your employer, or
              to simply contact you either electronically or otherwise. If you
              decide that we should not use your personal User Information to
              contact you, please let us know and we will not use that
              information for such purpose. However, please do not submit any
              User Information if you are less than 18 years of age.
            </li>
            <li>
              <b>Disclosure of User Information.</b>
              mdbytes.com does not sell, trade or transfer User Information to
              third parties. However, we may share User Information with our
              business partners for marketing, advertising or product/service
              offering purposes. For example, we provide User Information to our
              service providers for direct emailing of our newsletters, online
              surveys or notifications on mdbytes.com Offerings to our viewers.
              We also disclose User Information if: (1) we have your consent;
              (2) we need to share it in order to provide you with the products
              and/or services you requested; or (3) we respond to a court order
              or you violate our Terms of Use. You may separately agree to
              provide your personal information to third parties that provide
              content for mdbytes.com Offerings, in order to access and/or use
              their products and/or services. If you agree to provide such
              information to these third parties, then your personal information
              will be subject to their privacy policies.
            </li>
            <li>
              {" "}
              <b>Accuracy and Security.</b>
              The accuracy and security of the User Information is important to
              mdbytes.com. Currently, you may review and request updates to your
              User Information retained by contacting mdbytes.com. If you
              contact us to correct your User Information, we will attempt to
              correct such inaccuracies in a timely manner. mdbytes.com is
              concerned with the security of your User Information and is
              committed to taking reasonable steps to protect it from
              unauthorized access and use of that personal information. To that
              end, we put in place the appropriate physical, electronic and
              managerial policies and procedures to secure your personal User
              Information. We also continue to implement procedures to maintain
              accurate, complete and current User Information.
            </li>
            <li>
              <b>Usernames and Passwords.</b>
              Access to certain content on our web site may be allowed under a
              written agreement between you or your employer and mdbytes.com and
              will require a username and/or password. In some cases, failure to
              provide personal information may prevent you from accessing
              certain mdbytes.com web site(s) containing certain confidential
              information, products, services, or promotional offers.
            </li>
            <li>
              <b>Cookies.</b>
              mdbytes.com uses "cookies". A cookie is a small data file that a
              web site can transfer to a visitor's hard drive to keep records of
              the visits to such site. A cookie contains information such as
              your username and password that helps us recognize the pages you
              have visited and improve future visits, but the only personal
              information a cookie can contain is the information that you
              provide yourself. A cookie cannot read data off of your hard drive
              or read cookie files created by other sites. Information stored in
              cookies may be encrypted, however, we do not store your credit
              card number in cookies. If you prefer not to accept a cookie, you
              can set your web browser to warn you before accepting cookies or
              you can refuse all cookies by turning them off in your web
              browser. However, access to some of our secured web site(s) may
              require the use of cookies, which you must enable only cookies
              that get sent back to the originating server. Otherwise, you can
              still access most of the features on our web site even without
              accepting a cookie.
            </li>
            <li>
              <b>External Links.</b>
              mdbytes.com provides links to other third party web sites. Even if
              the third party is affiliated with mdbytes.com through a business
              partnership or otherwise, mdbytes.com is not responsible for the
              privacy policies or practices or the content of such external
              links. These links are provided to you for convenience purposes
              only and you access them at your own risk.
            </li>
            <li>
              <b>General.</b>
              If you have questions regarding our Privacy Statement, please
              contact mdbytes.com via our Contact page .
            </li>
          </ol>
        </div>{" "}
      </section>
    );
  }
}

export default PrivacyPage;
