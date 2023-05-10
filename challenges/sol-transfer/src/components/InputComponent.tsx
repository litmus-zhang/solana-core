import React from "react";

interface Props {
  label: string;
  type: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function InputComponent(props: Props) {
  const { label, type, name, onChange, placeholder } = props;

  return (
    <div className="flex flex-col gap-2 w-fit outline-none ">
      <label htmlFor={name}>{label}</label>
      <input
        className="px-2 py-1 border text-black outline-none border-gray-400 rounded-md"
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}

export default InputComponent;
