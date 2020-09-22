import React from "react";
import Banner from "./../Banner";
import Helped from "./../Helped";
import Investment from "./../Investment";
import Press from "./../Press";
class Index extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Helped />
        <Investment />
        <Press />
      </div>
    );
  }
}

export default Index;
