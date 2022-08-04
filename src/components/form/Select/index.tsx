import { PInput } from "../../../interfaces/input";
import { Wrapper } from "./style";

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
