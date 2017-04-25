import React, { Component } from 'react';
import './App.css';

// import {add1} from "./Api"
import { fetchInitialData, asyncFetchInitialData }  from './actions'

class App extends Component {

  onButtonClick(e) {
    let user = {
      empresas: [{
        Servicios: [{
          $id: 1,
          clienteID: 167
          },{
          $id: 2,
          clienteID: 168
        }]
      }]
    }

    // fetchInitialData({servicios: user.empresas.Servicios})
    asyncFetchInitialData({servicios: user.empresas.Servicios})

    // console.log("Start Function");
    // add1(10).then(result => {
    //   console.log(result);  // prints 60 after 2 seconds.
    // });
    // console.log("End Function");
  }

  render() {
    return (
        <div>
          <button onClick={this.onButtonClick}>Aceptar</button>
        </div>
    );
  }
}

export default App;
