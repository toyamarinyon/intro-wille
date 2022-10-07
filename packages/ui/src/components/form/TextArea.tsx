import { fieldSet, textArea, label as labelClass } from "./field.css";
import { Props } from "./field";

export const TextArea = ({ name, label }: Props): JSX.Element => {
  return (
    <div className={fieldSet}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <textarea name={name} id={name} className={textArea} />
    </div>
  );
};
