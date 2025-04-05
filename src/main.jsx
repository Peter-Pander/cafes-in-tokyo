import './index.css';
import { createRoot } from 'react-dom/client';
import App from "./App";

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

// const Hello = ({ name, age }) => {
  // console.log (props);

  // const name = props.name;
  // const age = props.age;

  // props ==> [name: "Remy", age: "21"]
  // const { name, age } = props;

//   return <h1> Hi I am {name}, {age} years old. </h1>;
// };

root.render(<App />);
