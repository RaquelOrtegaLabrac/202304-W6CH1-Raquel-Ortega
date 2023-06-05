import "./App.css";
import { Info } from "./Info";
import { Keyboard } from "./Keyboard";
import { Actions } from "./Actions";
import { Display } from "./Display";

export function App() {
  return (
    <>
      <Info></Info>
      <Display></Display>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
