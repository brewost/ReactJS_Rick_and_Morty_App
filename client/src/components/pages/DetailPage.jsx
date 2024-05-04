import { useLoaderData } from "react-router-dom";
function DetailPage() {
  const charData = useLoaderData();
  // return <figure>{charData && charData.name}</figure>;
  return (
    <div className="detail-page">
      <>
        {charData ? (
          <figure className="detail-card">
            <div>
              <img
                className="detail-image"
                src={charData.image}
                alt={charData.name}
              />
            </div>
            <div className="detail-words">
              <h1>{charData.name}</h1>
              <h2>
                {charData.status} - {charData.species}
              </h2>
              <h3>Planet of origin: {charData.origin.name}</h3>
              <h3>Last known whereabouts: {charData.location.name}</h3>
            </div>
          </figure>
        ) : (
          <div>LOADING</div>
        )}
      </>
    </div>
  );
}
export default DetailPage;
