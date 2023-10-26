import { styled } from "../../stitches.config";

export const StyledTextField = styled("input", {
  background: "$white",
  border: "1px solid #E6E6E6",
  borderRadius: 5,
  fontSize: 14,
  color: "#737373",
  fontWeight: 500,
  fontFamily: "$Montserrat",
  padding: "10px 20px",
  height: 50,
  variants: {
    isSuccess: {
      true: {
        border: "1px solid #2DC071",
      },
    },
    isError: {
      true: {
        border: "1px solid #E74040",
      },
    },
    isStartIcon: {
      true: {
        paddingLeft: 60,
      },
    },
    isEndIcon: {
      true: {
        paddingRight: 60,
      },
    },
    large: {
      true: {
        height: 85,
      },
    },
  },
});

export const EndIconContainer = styled("div", {
  position: "absolute",
  right: 25,
  top: "50%",
  transform: "translate(0, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StartIconContainer = styled("div", {
  position: "absolute",
  left: 25,
  top: "50%",
  transform: "translate(0, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const TextFieldWithIconsContainer = styled("div", {
  position: "relative",
});
