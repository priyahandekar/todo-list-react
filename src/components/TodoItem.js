import React from "react";

const TodoItem = ({ item, deleteTodo }) => {
	const { name, id } = item;
	console.log(item, "name here");
	return (
		<div className="flex justify-between items-center border rounded-lg shadow-lg p-2">
			<div>{name}</div>
			<div>
				<button className="m-1 p-2 rounded-lg bg-orange-500 text-white text-lg">
					EDIT
				</button>
				<button
					className="m-1 p-2 rounded-lg bg-red-500 text-white text-lg"
					onClick={() => deleteTodo(id)}
				>
					DELETE
				</button>
				<button className="m-1 p-2 rounded-lg bg-green-500 text-white text-lg">
					DONE
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
