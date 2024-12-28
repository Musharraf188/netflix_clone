import GPTSearch from "./GPTSearch";
import Header from "./Header";
import useMovies from "./hooks/useMovies";
import usePopular from "./hooks/usePopular";
import useUpcoming from "./hooks/useUpcoming";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  console.log(showGptSearch);
  useMovies();
  usePopular();
  useUpcoming();

  return (
    <div>
      <>
        <Header />
        {showGptSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </>
    </div>
  );
};
export default Browse;
