import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Input } from './common/Input/Input'

function App() {
  const rules = [
      {
          required: true,
          message: 'This field is required'
      },
      {
          max: 70
      },
      {
          min: 20
      },
      {
          regExp: '^(0|[1-9]\\d*)([.,]\\d+)?',
          message: 'Field should be a number'
      },
      {
          validator: value => Number(value) === 30,
          message: 'Value should be 30'
      }
      ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
            <section>
                <Input rules={rules} trigger={'onChange'}/>
            </section>
      </header>
    </div>
  );
}

export default App;
