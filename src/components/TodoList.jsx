import { styled } from "styled-components";
import TodoHeader from "./TodoHeader";

const TodoListContainer = styled.div`
  margin-top: 10rem;
  & h1 {
    color: #4e4d65;
    font-weight: 900;
    margin-bottom: 5rem;
  }
`;

const TodoList = () => {
  return (
    <TodoListContainer>
      <h1>TODO WITH ME!</h1>
      <TodoHeader />
      <div>투두리스트 목록</div>
    </TodoListContainer>
  );
};

export default TodoList;
