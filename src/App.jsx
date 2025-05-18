import styled from 'styled-components';
import TodoInputComponent from './components/TodoInputComponent';
import TodoListComponent from './components/TodoListComponent';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const Container = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-size: 60px;
	color: #16a34a;
	font-weight: 800;
	margin: 30px 0;
`;



function App() {
	
  const [todoItems, setTodoItems] = useState([]);
  
useEffect(() => {
  console.log(todoItems)
}, [todoItems])

  return (
		<Container>
			<Title>TODO APP</Title>
			<TodoInputComponent
				todoItems={todoItems}
				setTodoItems={setTodoItems}
			/>
			<TodoListComponent todoItems={todoItems} setTodoItems={setTodoItems} />
			<ToastContainer/>
		</Container>
	);
}

export default App;
