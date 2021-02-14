import React from "react";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import HomeScreen from "./screen/HomeScreen.jsx";
import PropertyScreen from "./screen/PropertyScreen.jsx";

const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <Container>
      <Route path='/' component={HomeScreen} exact />
      <Route path='/property/:id' component={PropertyScreen} />
      </Container>
    </div>
    </Router>
  );
}

export default App;
