import { styled, theme } from "../styles";

const HeaderTools = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-end",
  padding: 0,
  gap: 561,
  width: 736,
  height: 19,
  paddingTop: 80,
});

const ToolsCreated = styled("div", {
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  width: 138,
  height: 19,
  padding: 0,
  gap: 8,
  "& > p": {
    fontFamily: "$default",
    fontWeight: "$bold",
    fontSize: "$12",
    lineHeight: 15,
    flex: "none",
    order: 0,
    flexGrow: 0,
    color: theme.colors.blue,
  },
  "& > span": {
    fontFamily: "$default",
    fontSize: "$12",
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
  width: 138,
  height: 19,
  flex: "none",
  order: 1,
  flexGrow: 0,
  "& > p": {
    fontFamily: "$default",
    fontWeight: "$bold",
    fontSize: "$12",
    lineHeight: 15,
    flex: "none",
    color: theme.colors.purple,
  },
  "& > span": {
    fontFamily: "$default",
    fontSize: "$12",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 8px",
    background: theme.colors.gray400,
    borderRadius: 99999,
    color: theme.colors.gray100,
  },
});
interface HeaderTodoProps {
  todosCreated?: number;
  todosFinish?: number | undefined;
}

export function HeaderTodo({
  todosCreated = 0,
  todosFinish = 0,
}: HeaderTodoProps): JSX.Element {
  return (
    <>
      <HeaderTools>
        <ToolsCreated>
          <p>Tarefas Criadas</p>
          <span>{todosCreated}</span>
        </ToolsCreated>
        <FinishTools>
          <p>Concluídas</p>
          <span>
            {todosFinish} de {todosCreated}
          </span>
        </FinishTools>
      </HeaderTools>
    </>
  );
}
