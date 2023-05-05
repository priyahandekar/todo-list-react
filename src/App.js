import "./App.css";
import Container from "./components/Container";

function App() {
	return (
		<div className="m-auto p-5 w-1/2 bg-stone-400 my-14 rounded-md shadow-xl">
			<header className="text-center">
				<h2 className="text-3xl">Todo List</h2>
				<Container />
			</header>
		</div>
	);
}

export default App;
