import { styled } from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoItemList from "./TodoItemList";

const Box = styled.div`
  margin-top: 10rem;
`;

const Title = styled.h1`
  color: #4e4d65;
  font-weight: 900;
`;

const TodoListContainer = styled.div`
  margin: auto;
  width: 40rem;
  display: flex;
  flex-direction: column;
`;

const TodoList = () => {
  return (
    <Box>
      <Title>TODO WITH ME!</Title>
      <TodoListContainer>
        <TodoHeader />
        <TodoItemList />
      </TodoListContainer>
    </Box>
  );
};

export default TodoList;
