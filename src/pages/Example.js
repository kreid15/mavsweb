import React from "react";
// reactstrap components
import { Button } from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <>
        <Button color="primary" type="button">
          Button
        </Button>
        <Button className="btn-icon btn-3" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-bag-17" />
          </span>
          <span className="btn-inner--text">With icon</span>
        </Button>
        <Button className="btn-icon btn-2" color="primary" type="button">
          <span className="btn-inner--icon">
            <i className="ni ni-atom" />
          </span>
        </Button>
      </>
    );
  }
}

export default Buttons;