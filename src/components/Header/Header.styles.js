import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;
  }

  .nav-right {
    display: flex;
    align-items: center;

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;

      .loggedin {
        font-size: 0.8rem;
      }
    }
  }
`;

export const LogoImg = styled.img`
  width: 150px;

  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  margin-left: 1em;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
