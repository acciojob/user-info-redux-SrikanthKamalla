import { createStore } from "redux";
import combined from "./reducer";

export const store = createStore(combined);
