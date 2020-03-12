import React, { FC } from "react";

const Title: FC = ({ children }) => {
  return (
    <React.Fragment>
      <h1>{children}</h1>
      <style jsx>{`

        h1 {
          font-size: calc(5vw + 5vh);
          line-height: 5rem;
          margin-bottom: 2.5rem;
          margin-top: 0;
          font-family: Montserrat;
          font-weight: bold;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Title;
