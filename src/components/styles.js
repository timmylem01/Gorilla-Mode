import styled from "styled-components";

export const DropdownWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSelect = styled.select`
  max-width: 50%;
  height: 100;
  padding: 0.5rem;
  margin-bottom: 1ren;
`;

export const StyledOption = styled.option`
  color: ${(props) => (props.selected ? "lightgrey" : "black")};
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;

export const StyledButton = styled.input`
  max-width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  border: solid 2px blue;
  padding: 0.5rem;
  border-radius: 1rem;
`;