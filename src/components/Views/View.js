import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import InputField from '../InputField';
import AwesomeButton from '../AwesomeButton';

class View extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {inputs: {}}
        };
    }

    handleBlur(value, key, param) {
        if (param === 'input') {
            let data = Object.assign(this.state.data);
            data.inputs[key] = value;
            this.setState({data});
        }
    }

    generateInputs(inputFields) {
        if (inputFields) {
            return inputFields.map(input => {

                return (
                    <InputField
                        keyId={input.key}
                        value={(this.props.savedData && this.props.savedData.inputs) && this.props.savedData.inputs[input.key]}
                        header={input.label}
                        useAsNumeric={input.useAsNumeric}
                        warningText={input.warningText}
                        onBlur={(value, key) => this.handleBlur(value, input.key, 'input')}
                    />
                )
            })
        }
    }

    handleOnChange(param) {
        this.props.onChange(this.state.data, param);
    }

    getLocationCircles(current, whole) {
        let circles = [];

        let circleStyle = {
            width: '12px',
            height: '12px',
            minWidth: '12px',
            minHeight: '12px',
            maxWidth: '12px',
            maxHeight: '12px',
            borderRadius: '6px',
            display: 'inline-block',
            margin: '16px',
            border: '1px',
            borderStyle: 'solid'
        };

        if (current && whole) {
            for (let i = 0; i < whole; i++) {
                if (i < current) {
                    circles.push(
                        <div style={Object.assign({}, circleStyle, {borderColor: '#121212'})}>
                        </div>);
                } else {
                    circles.push(
                        <div style={Object.assign({}, circleStyle, {borderColor: '#949494'})}>
                        </div>);
                }
            }
        }
        return circles;
    }

    checkIfDisabled() {
        if (this.props.location && this.props.savedData) {
            if (this.props.location.currentLocation === 1 && this.props.savedData.inputs) {
                if (this.props.savedData.inputs.width > 100 && this.props.savedData.inputs.height > 100 && this.props.savedData.inputs.depth > 100) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }

  render() {
        return (
          <div style={{width: '100%'}}>
              <div style={{width: '100%', paddingTop: '16px', paddingBottom: '16px', textAlign: 'center'}}>
                  {this.getLocationCircles(this.props.location.currentLocation, this.props.location.numberOfViews)}
              </div>
              <div style={{display: 'inline-block', width: '100%', textAlign: 'center'}}>
                  <span style={{fontSize: '24px'}}>
                      {this.props.object && this.props.object.header}
                  </span>
              </div>
              <div>
                  {(this.props.object && this.props.object.inputFields) &&
                  <div style={{width: '100%', textAlign: 'center'}}>
                      {this.generateInputs(this.props.object.inputFields)}
                  </div>}
                  {(this.props.object && this.props.object.component) &&
                  <div>
                      {this.props.object.component}
                  </div>}
              </div>
              <div style={{width: '100%', textAlign: 'center'}}>
                  {this.props.location.currentLocation > 1 &&
                  <AwesomeButton
                      onClick={() => this.handleOnChange('previous')}
                      label={'Edellinen'}
                  />}
                  <AwesomeButton
                        disabled={this.checkIfDisabled()}
                        onClick={() => this.handleOnChange('next')}
                        label={this.props.location.currentLocation === this.props.location.numberOfViews ? 'Lähetä' : 'Seuraava'}
                  />
              </div>
          </div>
    );
  }
}

View.PropTypes = {
    object: PropTypes.object,
    onChange: PropTypes.func,
    location: PropTypes.object,
    savedData: PropTypes.object
};

export default View;
