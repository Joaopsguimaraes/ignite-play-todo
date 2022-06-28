import React from "react";
import { v4 as uuid4 } from "uuid";
import { Box as BoxTodo, ToolItem, ToolList } from "../styles/Todo/StylesTodo";
import { IconButton } from "./IconButton";
import { Checkbox } from "./Checkbox";

interface TodoProps {
  newTodo: Array<{
    id: string;
    description: string;
  }>;
  onClick: () => void;
}

export function Todo({ newTodo, onClick }: TodoProps): JSX.Element {
  return (
    <BoxTodo>
      {newTodo.map(
        (
          tool: { id: string; description: string },
          id: number
        ): JSX.Element => {
          return (
            <ToolList key={id}>
              <Checkbox />
              <ToolItem>{tool.description}</ToolItem>
              <IconButton onClick={onClick} />
            </ToolList>
          );
        }
      )}
    </BoxTodo>
  );
}
