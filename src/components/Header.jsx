import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { options } from "../constant";

const Header = ({ showBar, setShowBar }) => {
  const [q, setQ] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${e.target[0].value}`,
        options
      )
      .then((res) => setQ(res.data.results));
  };
  return (
    <div className="p-4 d-flex gap-5">
      <Link onClick={() => setShowBar(true)} to={"/"}>
        <img
          style={{ maxWidth: "150px" }}
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        />
      </Link>

      {showBar ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="form-inline d-flex gap-5 w-100"
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <Link to={"/search"}>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
