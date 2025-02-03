import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className="relative w-full">
      <input
        className={`w-full rounded border border-gray-300 px-3 pt-5 pb-2 text-sm focus:ring-2 focus:ring-secondary focus:border-transparent focus:outline-none ${className}`}
        {...props}
      />
      <label className="absolute left-3 top-2 text-gray-500 text-xs text-secondary">
        {label}
      </label>
    </div>
  );
};

export default Input;
