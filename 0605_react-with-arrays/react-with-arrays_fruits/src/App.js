import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "fruit01",
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: "fruit02",
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: "fruit03",
      name: "🍉 Melon",
      color: "green",
    },
    {
      id: "fruit04",
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: "fruit05",
      name: "🫐 Blueberry",
      color: "blue",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return (
          <article key={fruit.id}>
            <Card name={fruit.name} color={fruit.color} />
          </article>
        );
      })}
    </div>
  );
}
