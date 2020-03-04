import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';
//for the sake of test
export class App2 extends React.Component {

  constructor(props: Readonly<{}>) {
    super(props);

    this.state = { greeting: "Hello world :)" };
  }
  handleLeftSideBar () {
    
  }
  render() {
    return (
      <div>
              <Icon name="times" />
              <Icon name="pencil" />
              <Icon name="bars" />
      </div>
    );
  }
}
