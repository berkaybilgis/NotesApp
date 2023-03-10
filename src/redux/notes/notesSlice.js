import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    filtered: "",
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ text, color }) => {
        return {
          payload: {
            id: nanoid(),
            color,
            text,
          },
        };
      },
    },
    setFiltered: (state, action) => {
      state.filtered = action.payload.search;
    },
  },
});

export const selectFilteredNotes = (state) => {
  if (state.notes.filtered === "") {
    return state.notes.items;
  }
  return state.notes.items.filter((note) => {
    return state.notes.filtered.toLowerCase() === ""
      ? note
      : note.text.toLowerCase().includes(state.notes.filtered);
  });
};

export const { addNote, setFiltered } = notesSlice.actions;

export default notesSlice.reducer;
