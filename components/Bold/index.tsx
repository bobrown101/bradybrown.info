import React, { FC } from "react";

const Bold: FC = ({ children }) => {
  return (
    <React.Fragment>
      <strong>{children}</strong>
      <style jsx>{`
        strong {
          font-weight: 900;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Bold;
