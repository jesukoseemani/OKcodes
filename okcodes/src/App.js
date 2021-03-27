import GlobalStyles from "./components/GlobalStyles"
import Home from "./pages/Home"
import Projects from "./components/Projects"
import Logo from "./components/Logo"
import { Switch, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <GlobalStyles />
    <Logo />
    <Switch>
    
    <Route path="/" exact>
    <Home />
    </Route>
    
    <Route path="/projects" exact>
    <Projects />
    </Route>
    
    </Switch>
    
    </div>
  );
}

export default App;
