// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumb from "./Thumb/Thumb";
import { Spinner } from "./Spinner/Spinner.styles";
import SearchBar from "../components/SearchBar/SearchBar";
import Button from "./Button/Button";

// Hook
import { useHomeFetch } from "../Hooks/useHomeFetch";

// Image
import ImageNotFound from "../images/no_image.jpg";

const Home = () => {
  const { data, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();

  if (error) return <div>Something went wrong...</div>

  return (
    <>
      {!searchTerm && data.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${data.results[0].backdrop_path}`}
          title={data.results[0].original_title}
          text={data.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {data.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : ImageNotFound
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {data.page < data.total_pages && !loading && (
          <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
