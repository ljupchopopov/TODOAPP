import styled from 'styled-components';
import { IoTrashBin } from 'react-icons/io5';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 20px; 
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;

const ListItems = styled.div`
  background-color: rgb(203 213 225);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 6px;
  width: 50%;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(148 163 184);
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 40px;

  h2 {
    color: rgb(71 85 105);
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }

  p {
    color: rgb(100 116 139);
    font-size: 16px;
    text-align: center;
    max-width: 400px;
    line-height: 1.5;
  }
`;

function TodoListComponent({ todoItems, setTodoItems }) {
  function removeTodo(id) {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
  }

  return (
    <Container>
      {todoItems.length > 0 ? (
        todoItems.map((todo) => (
          <ListItems key={todo.id}>
            <h2>{todo.title}</h2>
            <IoTrashBin 
              size={24}
              color='rgb(239 68 68)'
              onClick={() => removeTodo(todo.id)}
              style={{ cursor: 'pointer' }}
            />
          </ListItems>
        ))
      ) : (
        <EmptyState>
          <h2>You're all caught up! 🎉</h2>
          <p>No tasks on your list today. Enjoy your free time or add new tasks to get started.</p>
        </EmptyState>
      )}
    </Container>
  );
}

export default TodoListComponent;