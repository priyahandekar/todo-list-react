import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo }) => {
	return (
		<div>
			{todos?.map((item) => (
				<TodoItem key={item.id} item={item} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default TodoList;
