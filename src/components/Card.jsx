import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allFetch } from "../redux/slices/characters.js";


const Card = () => {
  const dispatch = useDispatch();
  const {loading, character, error}  = useSelector(
    (state) => state.character
  );
 

  useEffect(() => {
    dispatch(allFetch());
  }, [dispatch]);
  return (
    <div className="card">
      <ul>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {character.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.status}</p>
            <p>{user.species} </p>
            <p> {user.gender} </p>
            <img alt={user.name} src={user.image}/>
            <a href={user.episode[0]}>Episodio</a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Card;
