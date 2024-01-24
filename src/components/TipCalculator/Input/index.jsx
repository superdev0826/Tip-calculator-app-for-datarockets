import React from 'react';
import styled from 'styled-components';

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.neutral.lighter};
  border: 1px solid ${({ theme }) => theme.color.neutral.lighter};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-family: ${({ theme }) => theme.typography.family.body};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  outline: none;
  padding: 8px 16px;
  text-align: right;
  width: 100%;

  /* Remove arrow number */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.neutral.darker};
  }

  &:hover, &:focus {
    border-color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
  }

  &.error {
    border-color: ${({ theme }) => theme.color.error}
  }

  @media(min-width: 1024px) {
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.neutral.darker};
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin-bottom: 6px;

  & span {
    color: ${({ theme }) => theme.color.error}
  }
`;

const Group = styled.div`
  position: relative;
`;

const Icon = styled.img`
  position: absolute;
  bottom: 18px;
  left: 20px;
`;

const InputGroup = ({
  // eslint-disable-next-line react/prop-types
  error, id, icon, onChange, placeholder, step, title, type, value,
}) => (
  <div>
    <Label htmlFor={id}>
      {title}
      {error
        && <span>Can&apos;t be zero</span>}
    </Label>
    <Group>
      <Icon alt={id} src={icon} />
      <Input
        className={error ? 'error' : ''}
        id={id}
        min={0}
        name={id}
        onChange={({ target }) => onChange(target)}
        placeholder={placeholder}
        step={step}
        style={{ paddingLeft: '50px' }}
        type={type}
        value={value}
      />
    </Group>
  </div>
);

export default InputGroup;
