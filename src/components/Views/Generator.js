import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import InputField from '../InputField';
import AwesomeButton from '../AwesomeButton';

class Generator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {lauteet: {}},
            uiObject: {},
            mouseOverId: undefined
        };
    }

    componentDidMount() {
        if (this.props.savedData) {
            this.setState({data: this.props.savedData});
        }

        let container = document.getElementById('generatorContainer');
        if (container) {
            let uiObject = Object.assign(this.state.uiObject);
            let containerWidth = container.offsetWidth;
            let containerHeight = container.offsetHeight;
            uiObject.generatorWidth = this.props.object.width * 2;
            uiObject.generatorHeight = this.props.object.depth * 2;
            uiObject.containerHeight = containerHeight;
            uiObject.containerWidth = containerWidth;
            this.setState({uiObject});
        }
    }

    handleGenerator() {
        let keys = Object.keys(this.state.data.lauteet);

        if (keys.length > 0) {
            console.log(keys);
            return keys.map(key => {
                if (key === 'yla') {
                    let style = this.state.data.lauteet[key];
                    if (style && style.basic) {
                        return (
                            <div
                                style={{
                                    position: 'absolute',
                                    zIndex: 2,
                                    textAlign: 'center',
                                    width: this.state.uiObject.generatorWidth,
                                    height: '120px',
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    borderBottom: 2,
                                    borderStyle: 'solid',
                                    borderColor: '#121212',
                                    backgroundColor: '#ececec'
                                }}>
                                <span style={{
                                    cursor: 'help',
                                    fontSize: '12px',
                                    backgroundColor: '#cacaca',
                                    borderRadius: '8px',
                                    color: '#121212'
                                }}>
                                    Syvyys: 60cm,
                                    Leveys: {this.state.uiObject.generatorWidth / 2 + 'cm'}
                                </span>
                            </div>
                        )
                    } else if (style && style.l) {
                        return (
                            <div
                                style={{position: 'absolute', zIndex: 2}}>
                                <div
                                    style={{height: '100px',
                                        backgroundColor: '#ececec'}}>
                                    <div style={{
                                        width: 100,
                                        display: 'inline-block'
                                    }}>
                                    </div>
                                    <div
                                        style={{
                                        textAlign: 'center',
                                        height: '100px',
                                        display: 'inline-block',
                                        width: this.state.uiObject.generatorWidth - 100,
                                        borderTop: 0,
                                        borderLeft: 0,
                                        borderRight: 0,
                                        borderBottom: 2,
                                        borderStyle: 'solid',
                                        borderColor: '#121212',
                                        backgroundColor: '#ececec'
                                    }}>
                                        <span style={{
                                            cursor: 'help',
                                            fontSize: '12px',
                                            backgroundColor: '#cacaca',
                                            borderRadius: '8px',
                                            color: '#121212'
                                        }}>
                                            Syvyys: 50cm,
                                            Leveys: {this.state.uiObject.generatorWidth / 2 + 'cm'},
                                            L-pituus: {((this.state.uiObject.generatorHeight * .66666) / 2).toString().substring(0, 3) + 'cm'},
                                            L-pituus seinästä: {(((this.state.uiObject.generatorHeight * .66666) / 2) + 50).toString().substring(0, 3) + 'cm'}
                                        </span>
                                    </div>
                                </div>
                                <div style={{
                                    width: 100,
                                    height: (this.state.uiObject.generatorHeight * .666666) + 'px',
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 2,
                                    borderBottom: 2,
                                    borderStyle: 'solid',
                                    borderColor: '#121212',
                                    backgroundColor: '#ececec'
                                }}>
                                </div>
                            </div>);
                    } else if (style && style.u) {
                        return (
                            <div
                                style={{
                                    position: 'absolute',
                                    zIndex: 2,
                                }}>
                                <div style={{
                                    width: this.state.uiObject.generatorWidth,
                                    height: '100px',
                                    backgroundColor: '#ececec'
                                }}>
                                    <div style={{display: 'inline-block', width: '100px', height: '100px'}}>
                                    </div>
                                    <div
                                        style={{
                                            width: this.state.uiObject.generatorWidth - 200 + 'px',
                                            display: 'inline-block',
                                            borderTop: 0,
                                            borderLeft: 0,
                                            borderRight: 0,
                                            borderBottom: 2,
                                            borderStyle: 'solid',
                                            borderColor: '#121212',
                                            textAlign: 'center',
                                            backgroundColor: '#ececec',
                                            verticalAlign: 'top',
                                            height: '100px'
                                    }}>
                                        <div>
                                        <span style={{
                                            cursor: 'help',
                                            fontSize: '12px',
                                            backgroundColor: '#cacaca',
                                            borderRadius: '8px',
                                            color: '#121212',
                                        }}>
                                            Syvyys: 50cm,
                                            Leveys: {this.state.uiObject.generatorWidth / 2 + 'cm'},
                                            L-pituus: {((this.state.uiObject.generatorHeight * .66666) / 2).toString().substring(0, 3) + 'cm'},
                                            L-pituus seinästä: {(((this.state.uiObject.generatorHeight * .66666) / 2) + 50).toString().substring(0, 3) + 'cm'},
                                            Jalkatila: {(this.state.uiObject.generatorWidth / 2) - 100 + 'cm'}
                                        </span>
                                        </div>
                                    </div>
                                    <div style={{display: 'inline-block', width: '100px', height: '100px'}}>
                                    </div>
                                </div>
                                <div style={{width: '100%'}}>
                                    <div style={{
                                        display: 'inline-block',
                                        width: '100px',
                                        height: (this.state.uiObject.generatorHeight * .666666) + 'px',
                                        borderTop: 0,
                                        borderLeft: 0,
                                        borderRight: 2,
                                        borderBottom: 2,
                                        borderStyle: 'solid',
                                        borderColor: '#121212',
                                        backgroundColor: '#ececec'
                                    }}>
                                    </div>
                                    <div style={{
                                        display: 'inline-block',
                                        float: 'right',
                                        width: '100px',
                                        height: (this.state.uiObject.generatorHeight * .666666) + 'px',
                                        borderTop: 0,
                                        borderLeft: 2,
                                        borderRight: 0,
                                        borderBottom: 2,
                                        borderStyle: 'solid',
                                        borderColor: '#121212',
                                        backgroundColor: '#ececec'
                                    }}>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                } else if (key === 'ala') {
                    let style = this.state.data.lauteet[key];
                    if (style && style.basic_ala) {
                        return (
                            <div
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    width: this.state.uiObject.generatorWidth,
                                    height: (this.state.uiObject.generatorHeight * .666666) + 100 + 'px',
                                    backgroundColor: '#e0e0e0',
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 0,
                                    borderBottom: 2,
                                    borderStyle: 'solid',
                                    borderColor: '#121212',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    justifyContent: 'center'
                            }}>
                                <span style={{
                                    position: 'absolute',
                                    zIndex: 9,
                                    cursor: 'help',
                                    fontSize: '12px',
                                    backgroundColor: '#cacaca',
                                    borderRadius: '8px',
                                    color: '#121212'
                                }}>
                                    Leveys: {this.state.uiObject.generatorWidth / 2 + 'cm'},
                                    Syvyys: {(((this.state.uiObject.generatorHeight * .66666) / 2) - 60).toString().substring(0, 3) + 'cm'}
                                </span>
                            </div>
                        )
                    }
                }
            })
        } else {
            return (
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <span style={{fontSize: '35px'}}>
                        Valitse ylhäältä haluamasi laudemalli.
                    </span>
                </div>
            )
        }
    }

    getTools() {

        const handleAdd = (tag, key) => {
            if (key) {
                let data = Object.assign(this.state.data);
                if (data.lauteet[tag] && data.lauteet[tag][key] !== undefined) {
                 delete data.lauteet[tag];
                } else {
                    data.lauteet[tag] = {};
                    data.lauteet[tag][key] = true;
                }
                this.setState({data})
            }
            this.props.onChange(this.state.data);
        };

        const tools = [
            {
                label: 'Ylempi suora laude',
                key: 'basic',
                tag: 'yla',
                show: (this.props.object.width)
            },
            {
                label: 'Ylempi L-laude',
                key: 'l',
                tag: 'yla',
                show: (this.props.object.width > 180)
            },
            {
                label: 'Ylempi U-laude',
                key: 'u',
                tag: 'yla',
                show: (this.props.object.width > 220)
            },
            {
                label: 'Alempi suora laude',
                key: 'basic_ala',
                tag: 'ala',
                show: (this.props.object.width)
            }
        ];

        return tools.map(tool => {
            return (
                <AwesomeButton
                    label={tool.label}
                    onClick={() => handleAdd(tool.tag, tool.key)}
                    show={tool.show}
                />
            )
        })
    }

    render() {
        return (
            <div id={'generatorContainer'} style={{width: '100%', paddingTop: '16px', paddingBottom: '16px'}}>
                <div>
                    <div>
                        <span style={{fontSize: '24px', color: '#121212'}}>
                            Lisää lauteet
                        </span>
                    </div>
                    {this.getTools()}
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
                    <div style={{
                        borderRadius: '4px',
                        display: 'inline-block',
                        width: (this.state.uiObject && this.state.uiObject.generatorWidth) && this.state.uiObject.generatorWidth + 'px',
                        height: (this.state.uiObject && this.state.uiObject.generatorHeight) && this.state.uiObject.generatorHeight + 'px',
                        background: 'url(https://www.sketchuptextureclub.com/public/texture_m/0015-square-stone-tile-cm120x120-texture-seamless-bump.jpg)',
                        overflow: 'hidden',
                        backgroundSize: '50px'
                    }}>
                        {this.handleGenerator()}
                    </div>
                    <div style={{
                        display: 'inline-block',
                        transform: 'rotate(90deg)',
                        height: '30px',
                        position: 'relative',
                        top: this.props.object.depth - 10 + 'px'
                    }}>
                        {this.props.object &&
                        <span>
                        {this.props.object.depth + 'cm'}
                    </span>}
                    </div>
                </div>
                <div style={{width: '100%', textAlign: 'center', marginTop: '30px'}}>
                    {this.props.object &&
                    <span>
                        {this.props.object.width + 'cm'}
                    </span>}
                </div>
            </div>
        );
    }
}

Generator.PropTypes = {
    object: PropTypes.object,
    onChange: PropTypes.func,
    savedData: PropTypes.object
};

export default Generator;
