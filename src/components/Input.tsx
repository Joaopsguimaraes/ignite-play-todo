import React from "react";
import { styled, theme } from "../styles";

const StyledInput = styled("input", {
  fontFamily: "$default",
  fontSize: "$16",
  lineHeight: 22,
  color: theme.colors.gray100,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
  gap: 8,
  width: 523,
  height: 54,
  background: theme.colors.gray500,
  border: `1px solid ${theme.colors.gray700}`,
  borderRadius: 8,
  "&::placeholder": {
    color: theme.colors.gray300,
  },
});

type InputProps = React.ComponentProps<typeof StyledInput>;

export function Input({ ...props }: InputProps): JSX.Element {
  return <StyledInput {...props} />;
}
