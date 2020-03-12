import React, { FC } from "react";

const Paragraph: FC = ({ children }) => {
  return (
    <React.Fragment>
      <p>{children}</p>
      <style jsx>{`

        p {
          font-size: calc(1.5vw + 1.5vh);
          line-height: calc(2.5vw + 2.5vh);
          margin-bottom: calc(1.5vw + 1.5vh);
          font-family: Merriweather;
          font-weight: normal;
        }
        @media (min-width: 666px) {
            p {
                font-size: 1.2rem;
                line-height: 2rem;
                margin-bottom: 2rem;
            }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Paragraph;
