import { useState } from "react";

// Styles
import { Button } from "./Rate.styles";

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}
      <p>
        <Button onClick={() => callback(value)}>Rate</Button>
      </p>
    </div>
  );
};

export default Rate;
