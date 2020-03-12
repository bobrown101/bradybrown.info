import React, { FC } from "react";

const Header: FC = ({ children }) => {
  return (
    <React.Fragment>
      <div>{children}</div>
      <style jsx>{`
        div {
          width: 100%;
          text-align: center;
          margin-bottom: 1rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Header;
