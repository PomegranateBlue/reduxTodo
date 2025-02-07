const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
//Action 정의의
const initialState = {
  todos: [
    {
      id: 1,
      title: "redux practice",
    },
  ],
};

//Reducer 정의의
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export default todos;
