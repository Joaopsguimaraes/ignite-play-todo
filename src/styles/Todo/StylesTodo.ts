import { styled, theme } from "..";

export const Box = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  padding: 8,
  gap: 24,
  width: "60%",
  paddingTop: 30,
});

export const ToolList = styled("ul", {
  listStyle: "none",
  width: "100%",
  display: "flex",
  flexWrap: 'wrap',
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 20,
  padding: 16,
  background: theme.colors.gray500,
  border: `1px solid ${theme.colors.gray400}`,
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
  borderRadius: 8,
});

export const ToolItem = styled("li", {
  listStyle: "none",
  fontFamily: "$default",
  fontSize: "$14",
  lineHeight: "140%",
  fontWeight: "$regular",
  color: theme.colors.gray100,
  variants:{
    complete:{
      true:{
        color: theme.colors.gray300,
        textDecoration: 'line-through'
      }
    }
  }
});

