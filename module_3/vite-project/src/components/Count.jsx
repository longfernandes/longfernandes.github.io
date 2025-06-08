import React from "react";
import { useState } from "react";

const Count = ({ theme }) => {
  const [count, setCount] = useState([1, 2, 4, 5]); //react hook của react , bản chất là 1 hàm  viết sẵn mà react đã viết sẵn cho mình

  console.log("re render");
  return (
    <>
      Count : {count}
      <button
        onClick={() => {
          setCount([...count, 7]); /// bản chất là nó sẽ có sự so sánh giữ 2 giá trị previous và next [1,2,4,5] và [1,2,4,5,7]
        }}
      >
        Click on me
      </button>
    </>
  );
};

export default Count;
