import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  character: [],
  pages: [],
  error: "",
};

export const allFetch = createAsyncThunk(
  "character/fetchCaharacters",
  async () => {
   let page = []
     for (let i = 1; i <= 42; i++) {
         const response = await axios.get(
           `https://rickandmortyapi.com/api/character?page=${i}`
           );  
           const characters = response.data.results;
            page.push(...characters);
    } 
    const character = page.map((i) => ({
        id: i.id,
        name: i.name,
        status: i.status,
        species: i.species,
        gender: i.gender,
        image: i.image,
        episode: i.episode,
    }));
    console.log(character);
    return character;
}
);

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

export default createCharacter.reducer;
