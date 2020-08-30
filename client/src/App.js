import React from 'react';
import 'bootstrap';
import './global.scss';
import Homepage from './pages/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CarPage from './pages/CarPage/CarPage';

function App() {
  return (<>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/car/:carId" render={(props) => <CarPage {...props} />}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
