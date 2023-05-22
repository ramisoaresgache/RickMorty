import { configureStore } from "@reduxjs/toolkit";
import {createCharacter,searchCharacter} from "../slices/characters.js";

export const store = configureStore({
  reducer: {
    character: createCharacter.reducer,
    nameCharacters: searchCharacter.reducer,
  },
});
