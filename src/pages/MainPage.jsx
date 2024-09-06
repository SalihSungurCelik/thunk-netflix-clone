import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getPopuler } from "../redux/actions/movieActions";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const MainPage = ({ setShowBar }) => {
  const state = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopuler());

    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />

      {state.isLoading ? (
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      ) : state.isError ? (
        <p> Üzgünüz bir hata oluştu. </p>
      ) : (
        state.genres.map((genre) => (
          <MovieList setShowBar={setShowBar} key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
