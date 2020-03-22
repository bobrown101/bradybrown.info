import React from "react";

const Section = ({
  children,
  title
}: {
  title?: string;
  children?: React.ReactNode;
}) => {
  return (
    <React.Fragment>
      <section>
        {title && (
          <header>
            <span>
              <h2>{title}</h2>
            </span>
            <hr />
          </header>
        )}
        <div className="section-content">{children}</div>
      </section>
      <style jsx>{`
        section {
          margin: 2rem;
          margin-left: auto;
          margin-right: auto;
        }
        header {
          text-align: center;
        }

        span {
          background: white;
          padding: 1rem;
        }

        h2 {
          display: inline-block;
          font-size: calc(2vw + 2vh);
          line-height: 4rem;
          margin-bottom: 0;
          margin-top: 0;
          font-family: Merriweather;
          font-weight: bold;
          transform: skewX(-15deg);
          background: url("/images/yellow-brushstroke.png");
          background-repeat: no-repeat;
          background-size: 100% 95%;
          padding: 8px 0;
        }

        hr {
          border-bottom: 1px solid black;
          width: 100%;
          display: block;
          margin-top: -2.5rem;
          margin-bottom: 2.5rem;
        }

        .section-content {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 666px) {
          section {
            max-width: 40rem;
          }

          h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Section;
