
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Header from './Component/Home/Header/Header';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Login from './Component/Login/Login';
import OurWork from './Component/OurWork/OurWork';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
              <BrowserRouter>
                <Header/>
              <Switch>
                <Route exact path="/">
                    <Home></Home>
                  </Route>
                <Route path="/home">
                    <Home></Home>
                  </Route>
                <Route path="/work">
                    <OurWork></OurWork>
                  </Route>
                <Route path="/register">
                    <Register></Register>
                  </Route>
                <Route path="/login">
                    <Login></Login>
                  </Route>
              </Switch>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
