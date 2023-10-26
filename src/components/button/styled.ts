import { styled } from "../../stitches.config";

export const StartIconContainer = styled("span", {
  display: "inline-flex",
  marginRight: 10,
});

export const EndIconContainer = styled("span", {
  display: "inline-flex",
  marginLeft: 10,
});

export const StyledButton = styled("button", {
  background: "$primary",
  color: "$white",
  border: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$Montserrat",
  borderRadius: 5,
  fontWeight: 600,
  fontSize: 14,
  cursor: "pointer",

  [`${StartIconContainer}`]: {
    marginRight: 10,
  },

  [`${EndIconContainer}`]: {
    marginLeft: 10,
  },
  variants: {
    size: {
      sm: {
        padding: "10px 20px",
      },
      md: {
        padding: "15px 40px",
      },
      lg: {
        fontWeight: 700,
        fontSize: 24,
        padding: "15px 40px",
        borderRadius: 40,
      },
    },
    variant: {
      filled: {},
      outlined: {
        border: "1px solid $primary",
        background: "transparent",
        color: "$primary",
      },
    },
    rounded: {
      true: {
        borderRadius: 37,
      },
    },
    withIcon: {
      true: {
        padding: "15px 25px",
      },
    },
  },
  compoundVariants: [
    {
      size: "lg",
      rounded: true,
      css: {
        borderRadius: 40,
      },
    },
    {
      withIcon: true,
      size: "lg",
      css: {
        padding: "15px 30px",
      },
    },
    {
      withIcon: true,
      rounded: true,
      size: "md",
      css: {
        padding: "15px 30px",
      },
    },
  ],
  defaultVariants: {
    variant: "outlined",
    size: "md",
    rounded: false,
  },
});
