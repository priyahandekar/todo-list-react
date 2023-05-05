import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

const Container = () => {
	const [todos, setTodos] = useState([]);
	const addTodos = (name) => {
		setTodos([...todos, { id: "1", name }]);
	};

	const deleteTodo = (id) => {
		const todoIdx = todos.findIndex((item) => item.id === id);
		todos.splice(todoIdx, 1);
		setTodos([...todos]);
	};
	return (
		<div className="flex flex-col">
			<Header addTodos={addTodos} />
			<TodoList todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
};

export default Container;
