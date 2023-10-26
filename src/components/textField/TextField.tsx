import { VariantProps } from "@stitches/react";
import React, { FC } from "react";
import {
  StyledTextField,
  EndIconContainer,
  StartIconContainer,
  TextFieldWithIconsContainer,
} from "./styled";

type StyledTextFieldProps = VariantProps<typeof StyledTextField>;

interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    StyledTextFieldProps {
  children?: React.ReactNode;
  large?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const TextField: FC<TextFieldProps> = ({
  children,
  startIcon,
  endIcon,
  ...rest
}) => {
  if (!startIcon && !endIcon) {
    return <StyledTextField {...rest}>{children}</StyledTextField>;
  }

  return (
    <TextFieldWithIconsContainer>
      {!!startIcon && <StartIconContainer>{startIcon}</StartIconContainer>}
      {!!endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
      <StyledTextField
        isStartIcon={!!startIcon}
        isEndIcon={!!endIcon}
        {...rest}
      >
        {children}
      </StyledTextField>
    </TextFieldWithIconsContainer>
  );
};

export default TextField;
