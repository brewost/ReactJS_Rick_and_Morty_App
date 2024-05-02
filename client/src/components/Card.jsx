import { NavLink } from "react-router-dom";
/* eslint-disable react/prop-types */
function Card({ char }) {
  return (
    <>
      <figure>
        <NavLink to={`/detail/${char.id}`}>
          <img src={char.image} alt={char.name} />
          <figcaption>{char.name}</figcaption>
        </NavLink>
      </figure>
    </>
  );
}
export default Card;
