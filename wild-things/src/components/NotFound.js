import React, { Component } from "react";

export class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  }
  render() {
    return (
      <div
        style={{
          height: "60vh",
          marginTop: 175,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="locating-post"
      >
        <h1>404: Page Not Found</h1>
        <p>Redirecting to Home Page</p>
      </div>
    );
  }
}

export default NotFound;
