import { useState, useEffect } from "react";
import API from "../API";

const useMovieFetch = (movieId) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        //GetDirectors only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setData({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    
    fetchMovie();
  }, [movieId]);

  return { data, loading, error };
};

export default useMovieFetch;
