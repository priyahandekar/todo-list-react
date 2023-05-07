import React, { useState } from "react";

const TodoItem = ({ item, deleteTodo, editTodo }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState(item.name);
	const { name, id } = item;

	const handleSave = (id) => {
		setIsEdit(false);
		if (editValue) {
			editTodo(editValue, id);
		} else {
			setEditValue(item.name);
		}
	};
	console.log(item, "name here");
	if (isEdit) {
		return (
			<div>
				<li>
					<input
						type="text"
						id="editValue"
						value={editValue}
						name="editValue"
						onChange={(e) => setEditValue(e.target.value.toLowerCase())}
					/>

					<button onClick={() => handleSave(id)}>Save</button>
				</li>
			</div>
		);
	} else
		return (
			<div className="flex justify-between items-center border rounded-lg shadow-lg p-2">
				<div>{name}</div>
				<div>
					<button
						onClick={() => setIsEdit(true)}
						className="m-1 p-2 rounded-lg bg-orange-500 text-white text-lg"
					>
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
