import { useState } from 'react';
import styled from 'styled-components';
import {toast} from "react-toastify"


const Container = styled.div`
	display: flex;
	gap: 20px;
`;
const Input = styled.input`
	border: 2px solid gray;
	border-radius: 8px;
	padding: 10px 20px;
	outline: none;
`;

const Button = styled.button`
	padding: 10px 20px;
	background-color: #16a34a;
	border: 2px solid gray;
	border-radius: 8px;
	color: white;
`;

function TodoInputComponent({ todoItems, setTodoItems }) {
	
    const [currentTodo, setCurrentTodo] = useState('');

	function handleTodoInput(event) {
		
		setCurrentTodo(event.target.value);
	}

   function handleTodo() {
    if (currentTodo) {
        setTodoItems([...todoItems, { title: currentTodo, id: new Date().getTime() }]);
        setCurrentTodo("");
        toast.success("Your task is added successfully");
    } else {
        toast.warn("Please enter some Task");
    }
}

	return (
		<Container>
			<Input
				type='text'
				name=''
				id=''
				placeholder='Insert Your Task'
				onChange={handleTodoInput}
				value={currentTodo}
			/>
			<Button onClick={handleTodo}>Add Task</Button>
		</Container>
	);
}

export default TodoInputComponent;
