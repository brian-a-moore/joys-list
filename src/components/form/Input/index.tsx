import { PInput } from "../../../interfaces/input";
import { Wrapper } from "./style";

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
