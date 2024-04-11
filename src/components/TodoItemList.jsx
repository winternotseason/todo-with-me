import { styled } from "styled-components";
import { IoCheckmarkOutline } from "react-icons/io5";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const StyledTodosBox = styled.div`
  width: 100%;
  margin-top: 1rem;
  background-color: #ecedf6;
  border-radius: 5px;
`;

const Todos = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  border-radius: 5px;
  padding: 1rem 0;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  margin: 1rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ content }) => content && "70%"};
  flex-direction: ${({ content }) => (content ? "column" : "row")};
  & p {
    margin: 0;
    text-align: start;
    font-size: 0.8rem;
    font-weight: 300;
  }
  & h4 {
    margin: 0;
    text-align: start;
  }
  .notdone {
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    background-color: #dde0e2;
    color: #dde0e2;
    cursor: pointer;
  }
  .done {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    background-color: #646fef;
    color: white;
    cursor: pointer;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    background-color: #dde0e2;
    cursor: pointer;
    color: #585858;
  }
  .right {
      margin-right: 0.6rem;
  }
`;
const TodoItemList = () => {
  const [done, setDone] = useState(false);
  return (
    <StyledTodosBox>
      <Todos>
        <TodoItem>
          <Content content={false}>
            {done ? (
              <div className="done" onClick={() => setDone((prev) => !prev)}>
                <IoCheckmarkOutline />
              </div>
            ) : (
              <div
                className="notdone"
                onClick={() => setDone((prev) => !prev)}
              />
            )}
          </Content>
          <Content content={true}>
            <h4>Create a react project!!!</h4>
            <p>5:23 AM, 01/06/2022</p>
          </Content>
          <Content content={false}>
            <div className="icon right">
              <FaTrash />
            </div>
            <div className="icon">
              <FaPen />
            </div>
          </Content>
        </TodoItem>
        <TodoItem>투두 2</TodoItem>
        <TodoItem>투두 3</TodoItem>
      </Todos>
    </StyledTodosBox>
  );
};

export default TodoItemList;
