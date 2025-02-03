import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles = "rounded px-8 py-2 font-semibold text-sm";
  const variants = {
    primary: "bg-primary text-secondary",
    secondary: "bg-secondary text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
