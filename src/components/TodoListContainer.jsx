import { useSelector } from "react-redux";
import styled from "styled-components";

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 20%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);
    //store에 있는 todos 모듈에서 상태를 선택한다
  return (
    <StTodos>
      {todos.map((todo) => (
        <StTodo key={todo.id}>{todo.title}</StTodo>
        //todos에 있는 상태에서 꺼내서 쓴다.
      ))}
    </StTodos>
  );
};

export default TodoListContainer;
