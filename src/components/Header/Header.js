import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

import MovietopiaLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={MovietopiaLogo} alt="movietopia-logo" />
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
