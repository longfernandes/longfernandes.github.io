import React from "react";
import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import Count from "./components/Count";

function App() {
  // const [count, setCount] = useState([1, 2, 3, 4, 5]); //react hook của react , bản chất là 1 hàm  viết sẵn mà react đã viết sẵn cho mình
  // setCount([1, 4, 56, , 6, 66]);

  //cập nhật dữ liệu state cho các kiểu dữ liệu cơ bản string, number, boolean
  // cập nhật cho các kiểu dữ liệu phức tạp như object, array

  const [theme, setTheme] = useState("light");
  const [userState, setUserState] = useState(false);

  const handleGetUserState = (state) => {
    console.log("get state from child", state);
    setUserState(state);
  };
  return (
    <Container>
      <Count theme={theme} />
      {setUserState ? "user đã login " : "User đã logout"}
      <Header theme={theme} name="Tuyên" getUserState={handleGetUserState} />
      {/* <Count /> */}
      {/* <Count /> */}
    </Container>
  );
}

export default App;

<header/> thôgn tin name
{
  name: "Tuyên",
  createdDate:'322323',
  gender:'male'
}