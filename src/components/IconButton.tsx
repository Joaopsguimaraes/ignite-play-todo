import React from "react";
import { styled, theme } from "../styles";
import { FiTrash } from "react-icons/fi";

const StyledIconButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "auto",
  padding: 2,
  cursor: "pointer",
  width: 26,
  borderRadius: 4,
  background: "transparent",
  border: "none",
  color: theme.colors.gray300,
  "&:hover": {
    background: theme.colors.gray400,
    color: theme.colors.danger,
  },
});

type IconButtonProps = React.ComponentProps<typeof StyledIconButton>;

export function IconButton({ children, ...props }: IconButtonProps): JSX.Element {
  return (
    <StyledIconButton {...props}>
      <FiTrash size={18} />
    </StyledIconButton>
  );
}
