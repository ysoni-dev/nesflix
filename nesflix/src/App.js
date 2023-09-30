import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navi from './pages/Navi'
import Home from './pages/Home'
import AddMovie from './pages/AddMovie'
import Show from './pages/Show'
import Edit from './pages/Edit'
import Mdata from './pages/Mdata'
import Mpost from './pages/supage/Mpost'
import One from './pages/supage/One'
import Two from './pages/supage/Two'
import Three from './pages/supage/Three'
import Four from './pages/supage/Four'
import Five from './pages/supage/Five'
import Six from './pages/supage/Six'
import Seven from './pages/supage/Seven'
import Eight from './pages/supage/Eight'



function App() {
  return (
      <BrowserRouter>
      <Navi/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/add" component={AddMovie}/>
        <Route exact path="/all" component={Show}/>
        <Route exact path="/edit/:id" component={Edit}></Route>
        <Route exact path="/mdata" component={Mdata}></Route>
        <Route exact path="/mpost" component={Mpost}></Route>
        <Route exact path="/one" component={One}></Route>
        <Route exact path="/two" component={Two}></Route>
        <Route exact path="/three" component={Three}></Route>
        <Route exact path="/four" component={Four}></Route>
        <Route exact path="/five" component={Five}></Route>
        <Route exact path="/six" component={Six}></Route>
        <Route exact path="/seven" component={Seven}></Route>
        <Route exact path="/eight" component={Eight}></Route>
   

        </Switch>
    
      </BrowserRouter>
  );
}

export default App;
