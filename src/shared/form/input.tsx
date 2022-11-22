import { FC } from "react";
import { Input, InputProps, Label } from "reactstrap";

export interface FormInputProps extends InputProps {
  label?: string;
  name: string;
  wrapperClass?: string;
}

export const FormInput: FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  id,
  onChange,
  name,
  label,
  wrapperClass,
  ...props
}) => {
  return (
    <div className={wrapperClass}>
      {label ? <Label for={id}>{label}</Label> : null}
      <Input
        type={type}
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
