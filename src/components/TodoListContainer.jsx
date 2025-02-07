import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";
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
const DeleteBtn = styled.button`
  background-color: white;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  color: black;
`;

const TodoListContainer = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo({ id }));
  };
  //store에 있는 todos 모듈에서 상태를 선택한다
  return (
    <StTodos>
      {todos.map((todo) => (
        <StTodo key={todo.id}>
          {todo.title}
          <DeleteBtn onClick={() => onDeleteHandler(todo.id)}>DELETE</DeleteBtn>
        </StTodo>
      ))}
    </StTodos>
  );
};

export default TodoListContainer;
