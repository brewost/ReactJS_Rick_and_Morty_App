import Card from "../Card";
import NoCharCard from "../NoCharCard";
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
      <input
        type="text"
        placeholder="Who are you looking for?"
        value={text}
        onChange={handleChange}
      />

      {/* I didn't folloow your instructions and ended up writing this monstrosity */}
      {/* Below - basically if no letters match - go to empty char card */}
      {/* Otherwise maps all chars and filters with the input text */}
      {text &&
        !data.results.some((result) =>
          result.name.toLowerCase().includes(text.toLowerCase()),
        ) && <NoCharCard />}
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
