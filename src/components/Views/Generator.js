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
            mouseOverId: undefined,
            grabKiuas: false,
            mousePosition: 0,
            mousePositionStart: 0
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
            uiObject.kiuasPositionY = 0;
            uiObject.kiuasPositionX = 0;
            this.setState({uiObject});
        }
    }

    handleGenerator() {
        let keys = Object.keys(this.state.data.lauteet);

        const handleKiuasPositionChange = (param, value) => {
            let uiObject = Object.assign(this.state.uiObject);
            if (!isNaN(value)) {
                if (param === 'x' && value < (this.props.object.width * 2) - 100 && value >= 0) {
                    uiObject.kiuasPositionX = parseInt(value) * 2;
                    this.setState({uiObject});
                } else if (param === 'y' && value < (this.props.object.depth * 2) - 100 && value >= 0) {
                    uiObject.kiuasPositionY = parseInt(value) * 2;
                    this.setState({uiObject});
                }
            }
        };

        if (keys.length > 0) {
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
                                    height: (this.state.uiObject.generatorHeight * .555555) + 'px',
                                    borderTop: 0,
                                    borderLeft: 0,
                                    borderRight: 2,
                                    borderBottom: 2,
                                    borderStyle: 'solid',
                                    borderColor: '#121212',
                                    backgroundColor: '#ececec'
                                }}>
                                    {(this.state.data.lauteet.customs && this.state.data.lauteet.customs.kasinoja) &&
                                    <div style={{zIndex: 10, width: '100px', backgroundColor: '#cacaca', height: '20px', display: 'block', position: 'absolute', border: '1px solid #121212', bottom: '-5px'}}>
                                    </div>}
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
                                        {(this.state.data.lauteet.customs && this.state.data.lauteet.customs.kasinoja) &&
                                        <div style={{zIndex: 10, width: '100px', backgroundColor: '#cacaca', height: '20px', display: 'block', position: 'absolute', border: '1px solid #121212', bottom: '-5px'}}>
                                        </div>}
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
                                        {(this.state.data.lauteet.customs && this.state.data.lauteet.customs.kasinoja) &&
                                        <div style={{zIndex: 10, width: '100px', backgroundColor: '#cacaca', height: '20px', display: 'block', position: 'absolute', border: '1px solid #121212', bottom: '-5px'}}>
                                        </div>}
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
                                    color: '#121212',
                                    bottom: '16px'
                                }}>
                                    Leveys: {this.state.uiObject.generatorWidth / 2 + 'cm'},
                                    Syvyys: {(((this.state.uiObject.generatorHeight * .66666) / 2) - 60).toString().substring(0, 3) + 'cm'}
                                </span>
                            </div>
                        )
                    }
                } else if (key === 'kiuas') {
                    return (
                        <div
                            style={{
                            width: '100px',
                            height: '100px',
                            position: 'absolute',
                            bottom: this.state.uiObject.kiuasPositionY,
                            left: this.state.uiObject.kiuasPositionX,
                            cursor: 'move',
                            zIndex: 5,
                            minWidth: '100px',
                            minHeight: '100px',
                            border: '1px solid #121212',
                            borderRadius: '16px',
                            backgroundColor: '#eeeeee'
                        }}>
                            <div style={{height: '100%', width: '100%', wordWrap: 'break-word'}}>
                                <div style={{width: '100%', textAlign: 'center'}}>
                                    <span style={{fontSize: '12px', color: '121212'}}>
                                        Kiuas
                                    </span>
                                </div>
                                <div style={{width: '90%', display: 'flex', justifyContent: 'center', overflow: 'hidden', paddingTop: '8px'}}>
                                <input style={{width: '30px', padding: '8px', border: '0', borderRadius: '4px'}} placeholder={'X (cm):' + this.state.uiObject.kiuasPositionX} onBlur={(event) => handleKiuasPositionChange('x', event.target.value)}/>
                                </div>
                                <div style={{width: '90%', display: 'flex', justifyContent: 'center'}}>
                                <input style={{width: '30px', padding: '8px', border: 0, borderRadius: '4px'}} placeholder={'Y (cm): ' + this.state.uiObject.kiuasPositionY}  onBlur={(event) => handleKiuasPositionChange('y', event.target.value)}/>
                                </div>
                            </div>
                        </div>
                    )
                } else if (key === 'customs_selka') {
                    let style = this.state.data.lauteet[key];
                        if (style && style.selkanoja) {
                            return (
                                <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: 5}}>
                                <div style={{width: '100%', height: '4px', backgroundColor: '#121212'}}>
                                </div>
                                    {(this.state.data.lauteet.yla && this.state.data.lauteet.yla.l
                                        || this.state.data.lauteet.yla && this.state.data.lauteet.yla.u) &&
                                    <div style={{
                                        display: 'inline-block',
                                        width: '4px',
                                        height: (this.state.uiObject.generatorHeight * .666666) + 30 + 'px',
                                        backgroundColor: '#121212'
                                    }}>
                                    </div>}
                                    {(this.state.data.lauteet.yla && this.state.data.lauteet.yla.u) &&
                                    <div style={{
                                        display: 'inline-block',
                                        width: '4px',
                                        height: (this.state.uiObject.generatorHeight * .666666) + 30 + 'px',
                                        backgroundColor: '#121212',
                                        float: 'right'
                                    }}>
                                    </div>}
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

    getTools(param) {

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


        return param.map(tool => {
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
        const checkVisibility = () => {
            if (this.state.data && this.state.data.lauteet && this.state.data.lauteet.yla) {
                let keys = Object.keys(this.state.data.lauteet.yla);
                if (keys.includes('l') || keys.includes('u')) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
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
            }
        ];

        const alalauteet = [
            {
                label: 'Alempi suora laude',
                key: 'basic_ala',
                tag: 'ala',
                show: (this.props.object.width)
            }
        ];

        const lisaosat = [
            {
                label: 'Käsinojat',
                key: 'kasinoja',
                tag: 'customs',
                show: checkVisibility()
            },
            {
                label: 'Selkänojat',
                key: 'selkanoja',
                tag: 'customs_selka'
            }
        ];

        const configTools = [
            {
                label: 'Aseta kiuas',
                key: 'kiuas',
                tag: 'kiuas'
            }
        ];

        const handleRotation = () => {
            let uiObject = Object.assign({}, this.state.uiObject);
            uiObject.generatorWidth = this.state.uiObject.generatorHeight;
            uiObject.generatorHeight = this.state.uiObject.generatorWidth;
            this.setState({uiObject});
        };

        return (
            <div id={'generatorContainer'} style={{width: '100%', paddingTop: '16px', paddingBottom: '16px'}}>
                <div style={{width: '100%'}}>
                    <div style={{width: '25%', display: 'inline-block', verticalAlign: 'top', textAlign: 'center'}}>
                        <div>
                            <span>
                                Työkalut
                            </span>
                        </div>
                        <div>
                            {this.getTools(configTools)}
                            <AwesomeButton label={'Käännä sauna'} onClick={() => handleRotation()}/>
                        </div>
                    </div>
                    <div style={{width: '25%', display: 'inline-block', verticalAlign: 'top', textAlign: 'center'}}>
                        <div>
                            <span>
                                Ylälauteet
                            </span>
                        </div>
                        <div>
                            {this.getTools(tools)}
                        </div>
                    </div>
                    <div style={{width: '25%', display: 'inline-block', verticalAlign: 'top', textAlign: 'center'}}>
                        <div>
                            <span>
                                Alalauteet
                            </span>
                        </div>
                        <div>
                            {this.getTools(alalauteet)}
                        </div>
                    </div>
                    <div style={{width: '25%', display: 'inline-block', verticalAlign: 'top', textAlign: 'center'}}>
                        <div>
                            <span>
                                Lisäosat
                            </span>
                        </div>
                        <div>
                            {this.getTools(lisaosat)}
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '32px'}}>
                    <div style={{position: 'relative', left: '30px'}}>
                            <div style={{
                                borderRadius: '4px',
                                display: 'inline-block',
                                width: (this.state.uiObject && this.state.uiObject.generatorWidth) && this.state.uiObject.generatorWidth + 'px',
                                height: (this.state.uiObject && this.state.uiObject.generatorHeight) && this.state.uiObject.generatorHeight + 'px',
                                background: 'url(https://www.sketchuptextureclub.com/public/texture_m/0015-square-stone-tile-cm120x120-texture-seamless-bump.jpg)',
                                overflow: 'hidden',
                                backgroundSize: '50px',
                                position: 'relative',
                                border: '1px solid #121212'
                            }}>
                                {this.handleGenerator()}
                            </div>
                            <div style={{
                                display: 'inline-block',
                                transform: 'rotate(90deg)',
                                height: '10px',
                                position: 'relative',
                                verticalAlign: 'top',
                                top: (this.state.uiObject.generatorHeight / 2) - 10 + 'px'
                            }}>
                                {this.props.object &&
                                <span>
                                {(this.state.uiObject.generatorHeight / 2) + 'cm'}
                            </span>}
                            </div>
                            <div style={{width: '100%', textAlign: 'center', marginTop: '30px'}}>
                                {this.props.object &&
                                <span>
                                    {(this.state.uiObject.generatorWidth / 2) + 'cm'}
                                </span>}
                            </div>
                    </div>
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
