import createReducer from "../../helpers/createReducer";
import { handler } from "./handler";
import { initialState } from "./initialState";

export const themeReducer = createReducer(initialState, handler);