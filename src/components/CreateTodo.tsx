import React from "react";
import { v4 as uuid4 } from "uuid";
import { styled, theme } from "../styles";
import { Button } from "./Button";
import { Input } from "./Input";
import { HeaderTodo } from "./HeaderTodo";
import { IconButton } from "./IconButton";
import { Checkbox } from "./Checkbox";
import { FiPlusCircle } from "react-icons/fi";

const Container = styled("section", {
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const Box = styled("div", {
  position: "absolute",
  top: 173,
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: 8,
});

export const BoxTodo = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: 8,
  gap: 24,
  width: 736,
  paddingTop: 20,
});

export const ToolList = styled("ul", {
  listStyle: "none",
  width: "100%",
  height: 72,
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "stretch",
  gap: 12,
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
  variants: {
    complete: {
      true: {
        color: theme.colors.gray300,
        textDecoration: "line-through",
      },
    },
  },
});
interface Todo {
  id: string;
  description: string;
  isComplete: boolean;
}

export function CreateTodo(): JSX.Element {
  const [todo, setTodo] = React.useState<Todo[]>([]);
  const [descriptionTool, setDescriptionTool] = React.useState("");

  function handleCreateNewTool(): void {
    if (!descriptionTool) return;

    const newTodo = {
      id: uuid4(),
      description: descriptionTool,
      isComplete: false,
    };
    setTodo((oldTodo: Todo[]): Todo[] => [...oldTodo, newTodo]);
    setDescriptionTool("");
  }

  const handleDeleteTodo = (id: string): void => {
    const filteredTodo: Todo[] = todo.filter(
      (todos: Todo): boolean => todos.id !== id
    );
    setTodo(filteredTodo);
  };

  const handleComplete = (id: string): void => {
    const completeTodo: Todo[] = todo.map(
      (todo: Todo): Todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodo(completeTodo);
  };

  return (
    <Container>
      <Box>
        <Input
          placeholder="Adicione uma nova tarefa"
          value={descriptionTool}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setDescriptionTool(event.target.value)
          }
        />
        <Button type="submit" onClick={handleCreateNewTool}>
          Criar
          <FiPlusCircle />
        </Button>
      </Box>
      <HeaderTodo
        todosCreated={todo.length}
        todosFinish={
          todo.filter((id: Todo): boolean => id.isComplete === true).length
        }
      />
      <BoxTodo>
        {todo.map((tool: Todo, id: number) => {
          return (
            <ToolList key={id}>
              <Checkbox
                checked={tool.isComplete}
                onClick={(): void => handleComplete(tool.id)}
              />
              <ToolItem complete={tool.isComplete === true && true}>
                {tool.description}
              </ToolItem>
              <IconButton onClick={(): void => handleDeleteTodo(tool.id)} />
            </ToolList>
          );
        })}
      </BoxTodo>
    </Container>
  );
}
