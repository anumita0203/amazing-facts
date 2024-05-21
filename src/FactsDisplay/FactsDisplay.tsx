import { useEffect, useState } from "react";
import "./FactsDisplay.css";

const colorArray = ["#5FAD56", "#F2C14E", "#F78154", "#4D9078", "#B4436C"];
const lengthOfColorArray = colorArray.length;
const tabFileMapping: { [key: number]: string } = {
  0: "/scienceFacts.txt",
  1: "/mindsetFacts.txt",
};
interface TabPanelProps {
  value: number;
}
const FactsDisplay = (props: TabPanelProps) => {
  const { value } = props;
  const [facts, setFacts] = useState<string[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(tabFileMapping[value])
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((text) => {
        const factsArray = text
          .split("\n")
          .filter((fact) => fact.trim() !== "");
        setFacts(ShuffleFacts(factsArray));
      })
      .catch((error) => {
        setError(error);
      });
  }, [value]);

  function ShuffleFacts(fetchedFacts: string[]) {
    const shuffledFacts = fetchedFacts
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffledFacts;
  }

  return (
    <div className="facts-container">
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul className="fact-list">
            {facts.length > 0 ? (
              facts.map((fact, index) => (
                <li
                  key={index}
                  className="fact-card"
                  style={{
                    backgroundColor: colorArray[index % lengthOfColorArray],
                  }}
                >
                  <p className="fact-text">{fact}</p>
                </li>
              ))
            ) : (
              <p className="fact-text">
                Author is a bit busy right now, no fact has been added yet!
              </p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default FactsDisplay;
