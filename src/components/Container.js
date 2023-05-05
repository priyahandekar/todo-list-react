import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

const Container = () => {
	const [todos, setTodos] = useState([]);
	const addTodos = (name) => {
		setTodos([...todos, { id: "1", name }]);
	};
	console.log(todos, "todos");
	return (
		<div>
			<Header addTodos={addTodos} />
			<TodoList todos={todos} />
		</div>
	);
};

export default Container;
