import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  nameCharacters: [],
  error: "",
};

export const charName = createAsyncThunk("namecharacter", async (name) => {
  const charName = `https://rickandmortyapi.com/api/character?name=${name}`;
  const dataChar = await axios.get(charName);
  const finalName = dataChar.filter((c) => c.name === name);
  return finalName;
});

 export const searchCharacter = createSlice({
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

// export default searchCharacter.reducer; 
