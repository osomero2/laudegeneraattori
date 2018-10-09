import React, {Component} from 'react';
import View from './components/Views/View';
import Generator from "./components/Views/Generator";
import BackgroundImage from './imgs/sauna1.jpg';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewNumber: 0,
            data: {lauteet: {}},
            mouseHover: false,
            screenMode: 'full'
        };
    }

    componentDidMount() {
        let screenWidth = window.innerWidth;

        if (screenWidth) {
            if (screenWidth < 600 && this.state.screenMode === 'full') {
                this.setState({screenMode: 'mobile'})
            } else if (this.state.screenMode === 'mobile' && screenWidth > 600) {
                this.setState({screenMode: 'full'})
            }
        }
    }

    handleView() {
        const views = [
            {
                header: 'Saunan koko',
                inputFields: [
                    {
                        label: 'Saunan leveys (cm)',
                        key: 'width',
                        useAsNumeric: true,
                        warningText: 'Saunan leveyden voi ilmoittaa vain numeerisena arvona.'
                    },
                    {
                        label: 'Saunan syvyys (cm)',
                        key: 'depth',
                        useAsNumeric: true,
                        warningText: 'Saunan syvyyden voi ilmoittaa vain numeerisena arvona'
                    },
                    {
                        label: 'Saunan korkeus (cm)',
                        key: 'height',
                        useAsNumeric: true,
                        warningText: 'Saunan korkeuden voi ilmoittaa vain numeerisena arvona.'
                    }
                ]
            },
            {
                header: 'Pohjapiirrokset',
                component: <Generator
                                      screenMode={this.state.screenMode}
                                      savedData={this.state.data}
                                      onChange={(data) => this.handleChange(data, 'generator')}
                                      object={this.state.data.inputs}/>
            },
            {
                header: 'Yhteystiedot',
                inputFields: [
                    {label: 'Nimi', key: 'name', useAsNumeric: false, warningText: 'Nimessäsi on numeroita'},
                    {
                        label: 'Puhelin',
                        key: 'phone',
                        useAsNumeric: false,
                        warningText: 'Puhelinnumerossasi on aakkosia'
                    },
                    {label: 'Sähköposti', key: 'email', useAsNumeric: false, warningText: 'Sähköpostisi ei ole validi'}
                ]
            },
        ];

        return (
            <View
                savedData={this.state.data}
                onChange={(data, param) => this.handleChange(data, param)}
                object={views[this.state.viewNumber]}
                location={{currentLocation: (this.state.viewNumber + 1), numberOfViews: views.length}}/>);
    }

    handleChange(data, param) {
        if (data && param) {
            if (param === 'next') {
                this.setState({data: Object.assign(data, this.state.data), viewNumber: this.state.viewNumber + 1})
            } else if (param === 'previous') {
                this.setState({viewNumber: this.state.viewNumber - 1})
            } else if (param === 'generator') {
                this.setState({data: Object.assign(data, this.state.data)});
            }
        }
    }

    render() {
        return (
            <div style={{width: '100vw', position: 'absolute', top: '0', left: '0'}}>
                <div style={{
                    width: '100%',
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '360px'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                <span style={{fontSize: '77px', color: '#eeeeee'}}>
                    Valmislauteet.fi
                </span>
                        <div
                            onClick={() => window.location.href = 'https://www.puumarkku.com'}
                            onMouseEnter={() => this.setState({mouseHover: true})}
                            onMouseLeave={() => this.setState({mouseHover: false})}
                            style={{
                            position: 'absolute',
                            right: '60px',
                            textAlign: 'center',
                            display: 'inline-flex',
                            width: this.state.mouseHover ? '140px' : '120px',
                            height: this.state.mouseHover ? '140px' : '120px',
                            minHeight: this.state.mouseHover ? '140px' : '120px',
                            minWidth: this.state.mouseHover ? '140px' : '120px',
                            borderRadius: this.state.mouseHover ? '70px' : '60px',
                            backgroundColor: '#eeeeee',
                            alignItems: 'center',
                            justifyContent: 'center',
                                transition: '1s',
                                cursor: 'pointer',
                                userSelect: 'none'
                        }}>
                    <span style={{fontSize: '24px'}}>
                        Made in Pori!
                    </span>
                        </div>
                    </div>
                </div>
                <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{paddingBottom: '16px', width: '100%'}}>
                        {this.handleView()}
                    </div>
                </div>

                <div style={{width: '100%', textAlign: 'center', paddingTop: '36px'}}>
              <span onClick={() => window.location.href = 'https://www.puumarkku.com'}
                    style={{fontSize: '12px', cursor: 'pointer'}}>
                  Palvelun tarjoaa Puu Markku Oy
              </span>
                </div>

            </div>
        );
    }
}

export default App;
