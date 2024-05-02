import Card from "../Card";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  function handleChange(e) {
    setText(e.target.value);
  }

  const [text, setText] = useState("");

  const data = useLoaderData();
  return (
    <>
      <h1> I am a homepage</h1>
      <input
        type="text"
        placeholder="Who are you looking for?"
        value={text}
        onChange={handleChange}
      />
      {data.results.map((char) => {
        return (
          char.name.toLowerCase().includes(text.toLowerCase()) && (
            <Card key={char.id} char={char} />
          )
        );
      })}
    </>
  );
}
export default HomePage;
