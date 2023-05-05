import React from "react";

const TodoItem = ({ item }) => {
	const { name } = item;
	console.log(item, "name");
	return (
		<div>
			<div>{name}</div>
			<div>
				<button>EDIT</button>
				<button>DELETE</button>
				<button>DONE</button>
			</div>
		</div>
	);
};

export default TodoItem;
