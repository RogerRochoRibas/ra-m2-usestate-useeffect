import React from 'react'
import styled from 'styled-components'

const NumberInputStyled = styled.input`
  height: 18px;
  width: 60px;
  padding: 0.5rem;
  margin: 5px;
  border-radius: 0.5rem;
  border: 1px solid #b0b0b0;
  font-size: 16px;

  &:hover {
    border: 1px solid;
  }
  &.error {
    border: 1px solid #fecaca !important;
  }
  &:focus {
    outline: 0 none;
  }
`

export function NumberInput({ defaultValue = '100', onChange, id }) {
  return (
    <NumberInputStyled
      type="number"
      name={id}
      defaultValue={defaultValue}
      onChange={(e) => onChange(+e.target.value)}
      id={id}
    />
  )
}
