import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SignUp from './views/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/signin" exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
