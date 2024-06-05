import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  console.log(USERS);

  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => {
          return (
            <Card
              key={user.id}
              user={user.name}
              about={user.about}
              roles={user.roles}
            />
          );
        })}
      </div>
    </main>
  );
}
