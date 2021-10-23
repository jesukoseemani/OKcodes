import GlobalStyles from './components/GlobalStyles';
import Home from './pages/Home';
import Projects from './components/Projects';
import Logo from './components/Logo';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import FamGramProject from './pages/FamGramProject';

function App() {
	return (
		<div className='App'>
			<GlobalStyles />
			<Logo />
			<AnimatePresence exitBeforeEnter>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>

					<Route path='/projects' exact>
						<Projects />
					</Route>

					<Route path='/famgram-project' exact>
						<FamGramProject />
					</Route>
				</Switch>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
