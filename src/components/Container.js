import React, { useState } from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoContext from "../context/todoContext";

const Container = () => {
	const [todos, setTodos] = useState([]);

	return (
		<TodoContext.Provider value={{ todos, setTodos }}>
			<div className="flex flex-col">
				<Header />
				<TodoList todos={todos} />
			</div>
		</TodoContext.Provider>
	);
};

export default Container;
