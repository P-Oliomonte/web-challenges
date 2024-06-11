import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("history", {
    defaultValue: [],
  });

  // const [currentValue, setCurrentValue] = useLocalStorageState("currentValue", {
  //   defaultValue: 0,
  // });

  function handleRoll() {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  }

  const currentValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} value={currentValue} />
      </main>

      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
