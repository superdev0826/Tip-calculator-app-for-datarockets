import React from 'react';
import styled from 'styled-components';
import { Input } from '.';

const Label = styled.label`
  cursor: pointer;
  display: block;
  height: 100%;
  padding: 8px;
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  & span {
    background-color: ${({ theme }) => theme.color.neutral.darkest};
    border: 1px solid ${({ theme }) => theme.color.neutral.darkest};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.neutral.lighter};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    height: max-content;
    left: 0;
    padding: 8px;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;
  }
  &:hover input ~ span {
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.neutral.darkest};
  }
  & input:checked ~ span {
    background-color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.neutral.darkest};
  }
`;
const RadioInput = ({
// eslint-disable-next-line react/prop-types
  id, label, name, onChange, value,
}) => (
  <Label htmlFor={id}>
    <input type="radio" name={name} id={id} onChange={({ target }) => onChange(target)} value={value} />
    <span>{label}</span>
  </Label>
);

const Container = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media(min-width: 1024px)  {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

// eslint-disable-next-line react/prop-types
const RadioGroup = ({ inputsData, onChange }) => (
  <Container>
    {
      // eslint-disable-next-line react/prop-types
      inputsData.map(({
        id, label, name, value: v,
      }) => (
        <RadioInput
          id={id}
          key={id}
          label={label}
          name={name}
          onChange={onChange}
          value={v}
        />
      ))
    }
    <Input
      id="custom"
      max="100"
      min="0"
      name="tip"
      onChange={({ target }) => onChange({ name: target.name, value: Number(target.value) })}
      placeholder="Custom"
      step="0.01"
      type="number"
    />
  </Container>
);

export default RadioGroup;
