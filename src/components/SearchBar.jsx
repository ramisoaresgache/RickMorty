import { useDispatch } from "react-redux";
import { useState } from "react";
import searchCharacter from "../redux/slices/characters.js";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleImputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(searchCharacter(name));
        setName("");
      }}
    >
      <input
        type="text"
        placeholder="Search Character..."
        onChange={(e) => handleImputChange(e)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
