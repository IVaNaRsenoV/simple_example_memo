import React, { useState, useEffect, useCallback, memo, useRef } from "react";

const HeavyComponent = ({ title, onClickOn }) => {
  console.log("HeavyComponent render");

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onClickOn}>heavy button</button>
    </div>
  )
};

const HeavyComponentMemo = memo(HeavyComponent)

const App = () => {
  const [value, setValue] = useState("");

  const ref = useRef();

  useEffect(() => {
    ref.current = () => console.log(value);
  });

  const inputChangeOn = (event) => {
    setValue(event.target.value);
  };

  const onClick = useCallback(() => {
    ref.current();
  })

  console.log("App render");

  return (
    <div>
      <input
        placeholder="type text"
        value={value}
        onChange={(e) => inputChangeOn(e)}
      />
      <HeavyComponentMemo
        title={"Heavy Component"}
        onClickOn={onClick}
      />
    </div>
  )
}

export default App;