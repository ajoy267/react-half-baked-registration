import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/signup" exact></Route>
          <Route path="/signin" exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
