import './App.css';
import Home from './pages/Home';
import { AppContextProvider } from './context/appContext';

function App() {
	return (
		<AppContextProvider>
			<Home />
		</AppContextProvider>
	);
}

export default App;
