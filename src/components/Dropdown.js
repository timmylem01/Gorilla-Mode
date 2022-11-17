// Dropdown.js 
import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
  StyledButton,
} from "./styles.js";

export function Dropdown(props) {
  return (
    <DropdownWrapper
      onChange={props.onChange}
      onSubmit={props.onSubmit}
    >
      <StyledLabel htmlFor="services">
        {props.formLabel}
      </StyledLabel>
      <StyledSelect id="services" name="services">
        {props.children}
      </StyledSelect>
      <StyledButton type="submit" value={props.buttonText} />
    </DropdownWrapper>
  );
}

export function Option(props) {
  return (
    <StyledOption selected={props.selected}>
      {props.value}
    </StyledOption>
  );
}