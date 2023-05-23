import { configureStore } from "@reduxjs/toolkit";
import {createCharacter} from "../slices/characters.js";
import {searchCharacter} from "../slices/charName.js";

export const store = configureStore({
  reducer: {
    character: createCharacter,
    nameCharacters: searchCharacter,
  },
});
