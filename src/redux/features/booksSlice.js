import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import bookConfig from "../../configs/books.config.json";
import { shelfCategory } from "./../../constants/booksEnum";

import { convertArrayToObject } from "../../utils/DataMasking";
import { getAll, update } from "../../utils/BooksAPI";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const books = await getAll();
  return books;
});

export const updateBookshelf = createAsyncThunk(
  "books/updateBookshelf",
  async (data) => {
    await update(data.book, data.shelf);
    return data;
  }
);

const initialState = {
  data: {},
  error: null,
  loading: false,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBooks.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.data = convertArrayToObject(
          action.payload,
          bookConfig.staticFieldsNames.id
        );
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(updateBookshelf.fulfilled, (state, action) => {
        const { book, shelf } = action.payload;
        const { data } = state;

        //check if book already exist in my reads data then if shelf is "none" will remove it from my reads else update shelf
        //else if not exist add shelf property then add the book in my reads data
        if (data[book.id]) {
          if (shelf === shelfCategory.NONE) delete data[book.id];
          else data[book.id].shelf = shelf;
        } else {
          if (!book.shelf) book.shelf = shelf;
          data[book.id] = book;
        }
      })
      .addCase(updateBookshelf.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
