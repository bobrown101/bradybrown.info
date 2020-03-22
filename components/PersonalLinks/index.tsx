import React, { FC } from "react";

type Links = {
  url: string;
  icon: string;
}[];

const PersonalLinks = ({ links }: { links: Links }) => {
  return (
    <React.Fragment>
      <div>
        {links.map((item, index) => {
          return (
            <span key={`${item.url}-${item.icon}`}>
              <a href={item.url}>
                <img src={item.icon} />
              </a>
            </span>
          );
        })}
      </div>
      <style jsx>{`
        div {
          width: 100%;
          text-align: center;
        }
        a {
            padding: 1rem;
        }
        img {
            height: 2rem;
            width: 2rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default PersonalLinks;
