import { mdiCheck } from "@mdi/js";
import { Icon } from "@mdi/react";
import { PInput } from "../../../interfaces/input";
import { Wrapper } from "./style";

const CheckBox: React.FC<PInput> = ({ onChange, name, label, value }) => {
  return (
    <Wrapper>
      <div className="container">
        <button
          className={`check-box ${value ? "checked" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            onChange(name, !value);
          }}
        >
          {value && <Icon path={mdiCheck} size="100%" color="#fff" />}
        </button>
      </div>
      <label>{label}</label>
    </Wrapper>
  );
};

export default CheckBox;
