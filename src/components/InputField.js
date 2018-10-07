import React, { Component } from 'react';
import {PropTypes} from 'prop-types';

class InputField extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            warning: false,
            hasValue: false
        };
    }

    handleChange(value, key) {
        if (this.props.useAsNumeric) {
            if (isNaN(value) && !this.state.warning) {
                this.setState({warning: true});
            } else if (this.state.warning && !isNaN(value)) {
                this.setState({warning: false});
            } else if (value > 700) {
                this.setState({warning: true});
            }
        } else if (!this.props.useAsNumeric) {
            if (this.props.key === 'email') {
                if (!value.includes('@') && !value.includes('.')) {
                    this.setState({warning: true});
                }
            } else if (this.props.key === 'number' && isNaN(value)) {
                this.setState({warning: true});
            } else if (this.props.key === 'name' && !isNaN(value)) {
                this.setState({warning: true});
            }
        }

        if (value) {
            if (!this.state.hasValue) {
                this.setState({hasValue: true});
            }
        } else {
            this.setState({hasValue: false});
        }
    }

    handleBlur(value) {
        this.setState({active: false});
        this.props.onBlur(value);
    }

  render() {
    return (
      <div style={{width: '100%', marginTop: '16px'}}>
          <div>
              <span style={{fontSize: '16px', color: (this.state.hasValue || this.props.value) ? '#55616e' : '#121212', transition: '1s'}}>
                {this.props.header} :
              </span>
          </div>
          <div style={{marginTop: '8px'}}>
              <input
                  placeholder={this.props.value}
                  onFocus={() => this.setState({active: true})}
                  onBlur={(event) => this.handleBlur(event.target.value)}
                  onChange={(event) => this.handleChange(event.target.value, this.props.keyId)}
                  style={{
                      textAlign: 'center',
                      width: '40%',
                      padding: '8px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      transition: '1s'
                  }}/>
          </div>
          {this.state.warning &&
          <div>
              <span style={{fontSize: '10px'}}>
                  {this.props.warningText}
              </span>
          </div>
          }
      </div>
    );
  }
}

InputField.PropTypes = {
    header: PropTypes.string,
    warningText: PropTypes.string,
    useAsNumeric: PropTypes.booleanValue,
    onBlur: PropTypes.func,
    keyId: PropTypes.string,
    value: PropTypes.string
};

export default InputField;
