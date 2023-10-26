import { VariantProps } from "@stitches/react";
import React, { FC } from "react";
import { EndIconContainer, StartIconContainer, StyledButton } from "./styled";

type StyledButtonProps = VariantProps<typeof StyledButton>;

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledButtonProps {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, startIcon, endIcon, ...rest }) => {
  return (
    <StyledButton withIcon={!!startIcon && !!endIcon} {...rest}>
      {!!startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      {children}
      {!!endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
    </StyledButton>
  );
};

export default Button;
