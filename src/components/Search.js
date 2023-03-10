import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFiltered } from "../redux/notes/notesSlice";

function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(setFiltered({ search }));
  }, [search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        value={search}
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}

export default Search;
