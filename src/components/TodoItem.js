import React from "react";

const TodoItem = ({ name, id }) => {
	return (
		<div>
			<div>buy house</div>
			<div>
				<button>EDIT</button>
				<button>DELETE</button>
				<button>DONE</button>
			</div>
		</div>
	);
};

export default TodoItem;
