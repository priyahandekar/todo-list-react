import React, { useContext } from "react";
import TodoContext from "../context/todoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const { todos, setTodos } = useContext(TodoContext);
	const deleteTodo = (id) => {
		const todoIdx = todos.findIndex((item) => item.id === id);
		todos.splice(todoIdx, 1);
		setTodos([...todos]);
	};

	const editTodo = (name, id) => {
		todos.forEach((item) => {
			if (item.id === id) {
				item.name = name;
				item.complete = !item.complete;
			}
		});
		setTodos([...todos]);
	};

	return (
		<div>
			{todos?.map((item) => (
				<TodoItem
					key={item.id}
					item={item}
					deleteTodo={deleteTodo}
					editTodo={editTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
