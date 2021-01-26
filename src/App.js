import React from "react";
import "./App.css";
import { Todo } from "./Todo.js";
import { Card } from "./components/Card";
import  Button  from "./components/Button";

function App() {
  const cardData = [
    {
      userImage: "https://avatars1.githubusercontent.com/u/48939851?s=460&v=4",
      name: "Ali",
      occupation: "CEO and Co Founder",
      university: "Oxford University",
    },

    {
      userImage: "https://avatars1.githubusercontent.com/u/48939851?s=460&v=4",
      name: "Ali",
      occupation: "CEO and Co Founder",
      university: "Oxford University",
    },

    {
      userImage: "https://avatars1.githubusercontent.com/u/48939851?s=460&v=4",
      name: "Ali",
      occupation: "CEO and Co Founder",
      university: "Oxford University",
      btn: "nn"
    },
  ];

  return (
    <div>
      {/* <Todo /> */}
      {cardData.map((data, index) => {
        return (
          <div>
            <Card
              key={index}
              name={data.name}
              occupation={data.occupation}
              university={data.university}
              image={data.userImage}
            />
            <Button btnText={data.btn}/>
          </div>
        );
      })}
    </div>
  );
}

export default App;
