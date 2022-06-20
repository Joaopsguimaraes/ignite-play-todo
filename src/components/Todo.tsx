import React from "react";
import { styled, theme } from "../styles";
import { IconButton } from "./Button";
import { Checkbox } from "./Checkbox";

const Box = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: 8,
  gap: 24,
  width: 736,
  height: 291,
  left: 'calc(50% - 736px/2)',
  position: "absolute",
  top: 291,
});

const ToolsCreated = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  gap: 8,
  width: 139,
  height: 19,
  "& > p": {
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

const FinishTools = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
  gap: 8,
  width: 111,
  height: 19,
  "& > p": {
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

const HeaderTools = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: 0,
  gap: 561,
  width: 736,
  height: 19,
});

const Tools = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    background: theme.colors.gray500,
    border: `1px solid ${theme.colors.gray400}`,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
    borderRadius: 8,
    '& > p': {
        fontFamily: '$default',
        fontSize: '$14',
        lineHeight: '140%',
        fontWeight: '$regular',
        color: theme.colors.gray100,
    }
});

export function Todo() {
  return (
    <Box>
      <HeaderTools>
        <ToolsCreated>
          <p>Tarefas Criadas</p>
          <span>0</span>
        </ToolsCreated>
        <FinishTools>
            <p>Concluidas</p>
            <span>0</span>
        </FinishTools>
      </HeaderTools>
      <Tools>
        <Checkbox />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
        <IconButton />
      </Tools>
      <Tools>
        <Checkbox />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
        <IconButton />
      </Tools>
      <Tools>
        <Checkbox />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
        <IconButton />
      </Tools>
      <Tools>
        <Checkbox />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer</p>
        <IconButton />
      </Tools>
    </Box>
  );
}
