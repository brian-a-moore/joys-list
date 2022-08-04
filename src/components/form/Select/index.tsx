import styled from "styled-components";

import { PInput } from "../../../interfaces/input";

const SelectInput: React.FC<PInput> = ({ onChange, name, options, value }) => {
  return (
    <Wrapper>
      <select
        name={name}
        onChange={(e) => onChange(name, e.target.value)}
        value={value}
      >
        {options &&
          options.map(({ id, value, title }) => (
            <option key={id} value={value}>
              {title}
            </option>
          ))}
      </select>
    </Wrapper>
  );
};

export default SelectInput;

const Wrapper = styled.div`
  float: left;

  select {
    float: left;
    height: 2rem;
    padding: 0 1rem;
    border: 1px solid var(--gray-300);
  }
`;
