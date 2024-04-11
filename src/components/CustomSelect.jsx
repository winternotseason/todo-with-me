import { styled } from "styled-components";
import { useState } from "react";

const SelectBox = styled.div`
  width: 8rem;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 5px;
  background-color: #cbcedf;
  cursor: pointer;
  &::before {
    content: "⌵";
    position: absolute;
    top: 43%;
    left: 90%;
    transform: translate(-50%, -50%);
    color: #3b3b3b;
    font-size: 20px;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
`;

const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 2rem;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 85px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #cfcfcf;
`;

const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #a9a9a9;
  }
`;

const CustomSelect = () => {
  const [currentValue, setCurrentValue] = useState("All");

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  const [showOptions, setShowOptions] = useState(false);
  return (
    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <Label>{currentValue}</Label>
      <SelectOptions show={showOptions}>
        <Option onClick={handleOnChangeSelectValue}>All</Option>
        <Option onClick={handleOnChangeSelectValue}>Done</Option>
        <Option onClick={handleOnChangeSelectValue}>Not Done</Option>
      </SelectOptions>
    </SelectBox>
  );
};

export default CustomSelect;
