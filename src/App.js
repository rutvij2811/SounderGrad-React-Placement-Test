import "./App.css";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";

function App({ slides }) {
	return (
		<>
			<Navbar />
			<div className="App">
				<Slides slides={slides} />
			</div>
		</>
	);
}

export default App;
