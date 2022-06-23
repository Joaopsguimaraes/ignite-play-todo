import { styled, theme } from "..";

export const HeaderTools = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: 0,
  gap: 561,
  width: "60%",
  paddingTop: 80,
});


export const ToolsCreated = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  width: 200,
  height: 19,
  "& > p": {
    width: "100%",
    fontFamily: "$default",
    fontWeight: "$bold",
    fontSize: "$14",
    color: theme.colors.blue,
  },
  "& > span": {
    fontFamily: "$default",
    fontSize: "$14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 8px",
    background: theme.colors.gray400,
    borderRadius: 99999,
    color: theme.colors.gray100,
  },
});

export const FinishTools = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  gap: 8,
  width: 200,
  height: 19,
  "& > p": {
    fontFamily: "$default",
    fontWeight: "$bold",
    fontSize: "$14",
    color: theme.colors.purple,
  },
  "& > span": {
    fontFamily: "$default",
    fontSize: "$14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 8px",
    background: theme.colors.gray400,
    borderRadius: 99999,
    color: theme.colors.gray100,
  },
});

