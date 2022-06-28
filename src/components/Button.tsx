import React from "react";
import { styled, theme } from "../styles";

const StyledButton = styled("button", {
  cursor: "pointer",
  fontFamily: "$default",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  gap: 8,
  width: 90,
  height: 52,
  background: theme.colors.blueDark,
  border: "none",
  borderRadius: 8,
  fontSize: "$14",
  fontWeight: "$bold",
  lineHeight: "140%",
  color: theme.colors.gray100,
  "&:hover": {
    background: theme.colors.blue,
  },
});

type IButton = React.ComponentProps<typeof StyledButton> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
interface ButtonProps extends IButton {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Button({ children, as, ...props }: ButtonProps): JSX.Element {
  return (
    <StyledButton as={as} {...props}>
      {children}
    </StyledButton>
  );
}
