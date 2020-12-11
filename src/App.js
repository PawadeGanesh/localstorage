import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Main from "./components/main";
import New from "./components/new";
import Edit from "./components/edit";

function App() {
  return (
    <div className="App">
       <Router>

      <Switch>
        <Route exact path="/" component={Main} />{' '}
        <Route path="/new" component={New} />{' '}
        <Route path="/edit/:id" component={Edit} />{' '}
      </Switch>{' '}

    </Router>
    </div>
  );
}

export default App;
