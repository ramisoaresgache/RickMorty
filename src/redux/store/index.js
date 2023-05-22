import { configureStore } from "@reduxjs/toolkit";
import createCharacter from "../slices/characters.js";

export const store = configureStore({
  reducer: {
    character: createCharacter,
  },
});
