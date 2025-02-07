import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { useState } from "react";
import styled from "styled-components";
const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  color: black;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
//
const AddForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  //dispatch로 전달
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(
      addTodo({
        id: new Date().getTime(),
        title,
      })
    );
  };
  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Type the title</label>
        <StInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StButton>Add</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;
