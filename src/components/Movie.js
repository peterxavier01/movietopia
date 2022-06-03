import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid/Grid";
import { Spinner } from "./Spinner/Spinner.styles";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";

// Hooks
import useMovieFetch from "../Hooks/useMovieFetch";

// Image
import ImageNotFound from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();

  const { data: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : ImageNotFound
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
