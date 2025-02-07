const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
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
    default:
      return state;
  }
};
export default todos;
