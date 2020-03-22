import React, { FC } from "react";

const mainColor = "#feeea0"
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

      a.styled {
        background:
           linear-gradient(
             to bottom, ${mainColor} 0%,
             ${mainColor} 100%
           );
          background-position: 0 100%;
          background-repeat: repeat-x;
          background-size: 4px 4px;
        color: #000;
        text-decoration: none;
        transition: background-size .2s;
      }
      
      a.styled:hover {
        background-size: 4px 50px;
      }

      form {
        padding: 1rem;
      }

      input, textarea {
        border: 1px solid black;
        border-radius: .2rem;
        display: block;
        padding: .2rem;
        margin-bottom: 1rem;
        width: 100%;
        box-sizing: border-box;
      }

      label {
        font-weight: bold;
        font-style: italic;
      }

      input:active, textarea:active, input:focus, textarea:focus {
        box-shadow: 0.2rem 0.2rem 0rem 0.1rem ${mainColor};
      }

      @media (min-width: 666px) {
        * {
              font-size: 1.2rem;
              line-height: 1.8rem;
          }
      }
    `}</style>
  );
};

export default GlobalStyles;
