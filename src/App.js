import React, { Component } from 'react';
import View from './components/Views/View';
import Generator from "./components/Views/Generator";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewNumber: 0,
            data: {lauteet: {}}
        };
    }

    handleView() {
        const views = [
            {
                header: 'Saunan koko',
                inputFields: [
                    {label: 'Saunan leveys (cm)', key: 'width', useAsNumeric: true, warningText: 'Saunan leveyden voi ilmoittaa vain numeerisena arvona.'},
                    {label: 'Saunan syvyys (cm)', key: 'depth', useAsNumeric: true, warningText: 'Saunan syvyyden voi ilmoittaa vain numeerisena arvona'},
                    {label: 'Saunan korkeus (cm)', key: 'height', useAsNumeric: true, warningText: 'Saunan korkeuden voi ilmoittaa vain numeerisena arvona.'}
                    ]
            },
            {
                header: 'Pohjapiirrokset',
                component: <Generator savedData={this.state.data} onChange={(data) => this.handleChange(data, 'generator')} object={this.state.data.inputs}/>
            },
            {
                header: 'Yhteystiedot',
                inputFields: [
                    {label: 'Nimi', key: 'name', useAsNumeric: false, warningText: 'Nimessäsi on numeroita'},
                    {label: 'Puhelin', key: 'phone', useAsNumeric: false, warningText: 'Puhelinnumerossasi on aakkosia'},
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
                this.setState({viewNumber: this.state.viewNumber  -1})
            } else if (param === 'generator') {
                this.setState({data: Object.assign(data, this.state.data)});
            }
        }
    }

  render() {
    return (
      <div style={{width: '100vw', position: 'absolute', top: '0', left: '0'}}>
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{padding: '16px', borderRadius: '8px', backgroundColor: '#cacaca', minWidth: '80%', marginTop: '36px'}}>
              <div style={{width: '100%'}}>
                  <span style={{fontSize: '26px'}}>
                      Puu Markun laudesuunittelija pro
                  </span>
              </div>
              {this.handleView()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
