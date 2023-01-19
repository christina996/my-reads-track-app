import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getBooks } from "./redux/features/booksSlice";
import AppRoutes from "./Routes";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return <AppRoutes />;
}

export default App;
