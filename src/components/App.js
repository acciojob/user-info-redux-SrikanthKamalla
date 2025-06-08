import React from "react";
import "./../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../actions";

const App = () => {
  const updateValue = useSelector((state) => state.values);
  console.log(updateValue);
  const dispatch = useDispatch();
  return (
    <div>
      {/* Do not remove the main div */}
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={updateValue.name}
        onChange={(e) => dispatch(updateInput(e))}
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={updateValue.email}
        onChange={(e) => dispatch(updateInput(e))}
      />
      <p>Current values in store</p>
      <p>Name-{updateValue.name}</p>
      <p>Email-{updateValue.email}</p>
    </div>
  );
};

export default App;
