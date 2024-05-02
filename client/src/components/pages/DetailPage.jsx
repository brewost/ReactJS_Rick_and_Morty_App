import { useLoaderData } from "react-router-dom";
function DetailPage() {
  const charData = useLoaderData();
  // return <figure>{charData && charData.name}</figure>;
  return (
    <>
      {charData ? (
        <figure>
          <img src={charData.image} alt={charData.name} />
          <h1>{charData.name}</h1>
          <h2>
            {charData.status} - {charData.species}
          </h2>
          <h2>Planet of origin: {charData.origin.name}</h2>
          <h2>Last known whereabouts: {charData.location.name}</h2>
        </figure>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
}
export default DetailPage;
// random comment
