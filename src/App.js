import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Main from './components/main/container';
import { generateData } from './lib/data';
import Login from './components/login/login';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Row, Col} from 'react-bootstrap'

const Error404 = () =>{
  return (
    <Row>
      <Col lg={4} md={4} />
      <Col>Error 404</Col>

    </Row>
  )
}
class App extends Component {
  render() {
    console.log(generateData(2))
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/complaints" component={Main} />
              <Route component={Error404} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
