import { useContext } from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

// import MovietopiaLogo from "../../images/react-movie-logo.svg";
import MovietopiaLogo from "../../images/movietopia-icon.png";
import TMDBLogo from "../../images/tmdb_logo.svg";

// Context
import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);

  return (
    <Wrapper>
      <Content>
        <div className="nav-left">
          <Link to="/">
            <LogoImg src={MovietopiaLogo} alt="movietopia-logo" />
          </Link>
        </div>
        <div className="nav-right">
          {user ? (
            <span className="loggedin">Logged in as: {user.username}</span>
          ) : (
            <Link to="/login">
              <span className="login">Log in</span>
            </Link>
          )}
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;
