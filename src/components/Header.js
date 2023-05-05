import React, { useEffect, useState } from "react";

const Header = ({ addTodos }) => {
	const [todoItem, setTodoItem] = useState("");

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
		<div>
			<input
				type="text"
				onChange={(e) => optimizedInputHandling(e)}
				placeholder="add todos here"
			></input>
			<button onClick={() => addTodos(todoItem)}>ADD</button>
		</div>
	);
};

export default Header;
