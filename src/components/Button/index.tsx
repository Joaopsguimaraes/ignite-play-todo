import React from "react";
import { styled, theme } from "../../styles";
import { FiTrash } from "react-icons/fi";

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
});

const StyledIconButton = styled("button", {
  cursor: "pointer",
  width: 24,
  height: 24,
  borderRadius: 4,
  background: "transparent",
  border: "none",
  color: theme.colors.gray300,
  "&:hover": {
    background: theme.colors.gray400,
    color: theme.colors.danger,
  },
});

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  children: React.ReactNode;
  as?: React.ElementType;
};

type IconButtonProps = React.ComponentProps<typeof StyledIconButton>;

export function Button({ children, as, ...props }: ButtonProps) {
  return (
    <StyledButton as={as} {...props}>
      {children}
    </StyledButton>
  );
}


export function IconButton({ children, ...props }: IconButtonProps) {
  return (
    <StyledIconButton {...props}>
      <FiTrash size={16}/>
    </StyledIconButton>
  );
}
