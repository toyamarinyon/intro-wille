import { field, fieldSet, label as labelClass } from "./field.css";
import { Props } from "./field";

export const TextField = ({ name, label }: Props): JSX.Element => {
  return (
    <div className={fieldSet}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      <input type="text" name={name} id={name} className={field}/>
    </div>
  );
};
