import React from "react";
import { HeaderTools, FinishTools, ToolsCreated } from '../styles/Todo/StylesHeaderTodo';

interface HeaderTodoProps {
  todosCreated?: number;
  todosFinish?: number | undefined;
}

export function HeaderTodo({todosCreated = 0, todosFinish = 0}: HeaderTodoProps) {
  return (
    <>
      <HeaderTools>
        <ToolsCreated>
          <p>Tarefas Criadas</p>
          <span>{todosCreated}</span>
        </ToolsCreated>
        <FinishTools>
          <p>Concluidas</p>
          <span>{todosFinish} de {todosCreated}</span>
        </FinishTools>
      </HeaderTools>
    </>
  );
}
