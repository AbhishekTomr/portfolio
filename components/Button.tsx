import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Button = ({ className, children, onClick }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
