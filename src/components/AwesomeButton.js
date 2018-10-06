import React, { Component } from 'react';
import {PropTypes} from 'prop-types';

class AwesomeButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false
        }
    }

    render() {
        if (this.props.show) {
            return (
                <div
                    onMouseEnter={() => this.setState({hovered: true})}
                    onMouseLeave={() => this.setState({hovered: false})}
                    style={{marginTop: '16px', marginLeft: '8px', display: 'inline-block'}}>
                    <button
                        disabled={this.props.disabled}
                        onClick={() => this.props.onClick()}
                        style={{
                            padding: '16px',
                            border: '0',
                            backgroundColor: this.state.hovered ? '#B6B6B6' : '#cacaca',
                            color: '#121212',
                            transition: '1s',
                            borderRadius: '8px'
                        }}>
                        {this.props.label}
                    </button>
                </div>
            );
        } else {
            return (
                <div style={{display: 'inline-block'}}>

                </div>
            )
        }
    }
}

AwesomeButton.PropTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.booleanValue,
    show: PropTypes.booleanValue
};

AwesomeButton.defaultProps = {
    show: true
}

export default AwesomeButton;