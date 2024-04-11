import { styled } from "styled-components";
import CustomSelect from "./CustomSelect";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #6270f0;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  border-radius: 5px;
  border: none;
`;

const TodoHeader = () => {
  return (
    <StyledHeader>
      <Button>Add Task</Button>
      <CustomSelect />
    </StyledHeader>
  );
};

export default TodoHeader;
