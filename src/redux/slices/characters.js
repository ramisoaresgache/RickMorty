import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { formatterCharacter } from "../Utils/formatterChar";

const initialState = {
  loading: false,
  character: [],
  pages: [],
  error: "",
  nameCharacters: [],
};

export const allFetch = createAsyncThunk(
  "character/fetchCaharacters",
  async () => {
    let page = [];
    for (let i = 1; i <= 42; i++) {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      const characters = response.data.results;
      page.push(...characters);
    }
    const characters = formatterCharacter(page);
    return characters;
  }
);
export const charName = createAsyncThunk("namecharacter", async (name) => {
  const charName = `https://rickandmortyapi.com/api/character?name=${name}`;
  const dataChar = await axios.get(charName);
  const finalName = dataChar.filter((c) => c.name === name);
  return finalName;
});

const createCharacter = createSlice({
  name: "characters",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(allFetch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.character = action.payload;
      state.error = "";
    });
    builder.addCase(allFetch.rejected, (state, action) => {
      state.loading = false;
      state.character = [];
      state.error = action.error.message;
    });
  },
});

const searchCharacter = createSlice({
  name: "nameCharacters",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(charName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(charName.fulfilled, (state, action) => {
      state.loading = false;
      state.nameCharacters = action.payload;
      state.error = "";
    });
    builder.addCase(charName.rejected, (state, action) => {
      state.loading = false;
      state.nameCharacters = [];
      state.error = action.error.message;
    });
  },
});

export default {
  createCharacter: createCharacter,
  searchCharacter: searchCharacter,
};
