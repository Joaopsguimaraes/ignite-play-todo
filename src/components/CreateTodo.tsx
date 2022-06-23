import React from "react";
import { v4 as uuid4 } from "uuid";
import { styled } from "../styles";
import { Button } from "./Button";
import { Input } from "./Input";
import { HeaderTodo } from "./HeaderTodo";
import { Box as BoxTodo, ToolItem, ToolList } from "../styles/Todo/StylesTodo";
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
  gap: 8,
});

interface Todo {
  id: string;
  description: string;
  isComplete: boolean;
}

export function CreateTodo() {
  const [todo, setTodo] = React.useState<Todo[]>([]);
  const [descriptionTool, setDescriptionTool] = React.useState("");

  function handleCreateNewTool() {
    if (!descriptionTool) return;

    const newTodo = {
      id: uuid4(),
      description: descriptionTool,
      isComplete: false,
    };
    setTodo((oldTodo) => [...oldTodo, newTodo]);
    setDescriptionTool("");
  }

  const handleDeleteTodo = (id: string) => {
    const filteredTodo = todo.filter((todos) => todos.id !== id);
    setTodo(filteredTodo);
  };

  const handleComplete = (id: string) => {
    const completeTodo = todo.map((todo) =>
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
          onChange={(event) => setDescriptionTool(event.target.value)}
        />
        <Button type="submit" onClick={handleCreateNewTool}>
          Criar
          <FiPlusCircle />
        </Button>
      </Box>
      <HeaderTodo
        todosCreated={todo.length}
        todosFinish={todo.filter((id) => id.isComplete === true).length}
      />
      <BoxTodo>
        {todo.map((tool, id) => {
          return (
            <ToolList key={id}>
              <Checkbox
                checked={tool.isComplete}
                onClick={() => handleComplete(tool.id)}
              />
              <ToolItem complete={tool.isComplete === true && true}>
                {tool.description}
              </ToolItem>
              <IconButton onClick={() => handleDeleteTodo(tool.id)} />
            </ToolList>
          );
        })}
      </BoxTodo>
    </Container>
  );
}
