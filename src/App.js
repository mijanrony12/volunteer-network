import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Header from './Component/Home/Header/Header';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
           <Header/>
           <Switch>
            <Route path="/register">
                 <Register></Register>
              </Route>
           </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
