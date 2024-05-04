import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
function Card({ char }) {
  return (
    <>
      <figure className="card">
        <NavLink to={`/detail/${char.id}`}>
          <img className="card-img" src={char.image} alt={char.name} />
          <figcaption className="card-name">{char.name}</figcaption>
        </NavLink>
      </figure>
    </>
  );
}
export default Card;
