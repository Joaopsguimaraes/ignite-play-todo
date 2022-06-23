import { CreateTodo } from "./components/CreateTodo";
import { Header } from "./Header";
import { Todo } from "./components/Todo";
import { globalStyles } from "./styles/globalCss";

export function App (){
  globalStyles();
  return (
    <>
      <Header />
      <CreateTodo />
    </>
  )
}