
import './App.css';
import Login from './login/login';
import { BrowserRouter , Route, Switch  } from 'react-router-dom';
import ItemList from './components/ItemList';
import Home from './home/Home'
import Cart from './components/Cart'
import Navbar from "./home/Navbar";

function App() {
  return (
      <div className='App'>
          <BrowserRouter>
              <div className="App">
                  <Navbar/>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/Catagory" component={ItemList} />
                      <Route path = "/login" component={Login}/>
                      <Route path = "/cart" component={Cart}/>
                  </Switch>
              </div>

          </BrowserRouter>
      </div>
  );
}

export default App;
