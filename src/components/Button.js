import React, { Component } from 'react';
import {PropTypes} from 'prop-types';

class AwesomeButton extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div style={{marginTop: '16px', marginLeft: '8px'}}>
          <button>
              {this.props.label}
          </button>
      </div>
    );
  }
}

Button.PropTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default AwesomeButton;
