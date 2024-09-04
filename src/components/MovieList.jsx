import React from "react";

const MovieList = ({ genre }) => {
  // gelen proptaki kategorinin bilgisine göre
  // kategoriye ait film verisini çekip
  // bunları slider içerisinde listeleme
  return (
    <div>
      <h1>{genre.name} </h1>
    </div>
  );
};

export default MovieList;
