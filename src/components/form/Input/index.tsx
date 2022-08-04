import styled from "styled-components";

import { PInput } from "../../../interfaces/input";

const Input: React.FC<PInput> = ({
  onChange,
  name,
  placeholder,
  type,
  value,
}) => {
  return (
    <Wrapper>
      <input
        type={type}
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 2rem;
    padding: 0 1rem;
    border: 1px solid var(--gray-300);
  }
`;
