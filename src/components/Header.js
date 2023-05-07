import React, { useContext, useState } from "react";
import TodoContext from "../context/todoContext";

const Header = () => {
	const [todoItem, setTodoItem] = useState("");
	const { todos, setTodos } = useContext(TodoContext);
	const addTodos = (name) => {
		setTodos([...todos, { id: "1", name }]);
	};
	const debounce = (fn, delay) => {
		let timer;
		return function () {
			clearTimeout(timer);
			const args = arguments;
			timer = setTimeout(() => {
				fn.apply(this, args);
			}, delay);
		};
	};

	const handleInput = (e) => {
		console.log("called");
		setTodoItem(e.target.value);
	};

	const optimizedInputHandling = debounce(handleInput, 300);
	return (
		<div className="">
			<input
				className="m-2 p-2 rounded-lg"
				type="text"
				onChange={(e) => optimizedInputHandling(e)}
				placeholder="add todos here"
			></input>
			<button
				className="m-1 p-2 rounded-lg bg-black text-white text-lg"
				onClick={() => addTodos(todoItem)}
			>
				ADD
			</button>
		</div>
	);
};

export default Header;
