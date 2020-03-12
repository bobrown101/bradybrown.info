import React, { FC } from "react";

const GlobalStyles: FC = () => {
  return (
    <style global jsx>{`
      @font-face {
        font-family: "Merriweather";
        src: url("/fonts/Merriweather/Merriweather-Black.ttf");
        font-weight: 900;
      }
      @font-face {
        font-family: "Merriweather";
        src: url("/fonts/Merriweather/Merriweather-Regular.ttf");
        font-weight: normal;
      }
      @font-face {
        font-family: "Montserrat";
        src: url("/fonts/Montserrat/Montserrat-Black.ttf");
      }

      * {
        font-size: calc(1.5vw + 1.5vh);
        line-height: calc(2.5vw + 2.5vh);
        font-family: Merriweather;
        font-weight: normal;
      }
      @media (min-width: 666px) {
        * {
              font-size: 1.2rem;
              line-height: 2rem;
          }
      }
    `}</style>
  );
};

export default GlobalStyles;
