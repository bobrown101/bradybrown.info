import React, { FC } from "react";

const ExperienceItem = ({
  company,
  dateFrom,
  dateTo,
  position,
  location,
  content
}: {
  company: string;
  dateFrom: string;
  dateTo: string;
  position: string;
  location: string;
  content: React.ReactNode[];
}) => {
    const rowHeight = "2rem";
  return (
    <React.Fragment>
      <div>
        <div className="row clearfix">
          <div className="left title">{company}</div>
          <div className="right title-alt">
            <span>{dateFrom}</span>
            {` - `}
            <span>{dateTo}</span>
          </div>
        </div>
        <div className="row title-alt clearfix">
          <div className="left">{position}</div>
          <div className="right">{location}</div>
        </div>
        <div>
            <ul>
            {content.map((str, index) => <li key={`${str}-${index}`}>{str}</li>)}
            </ul>
            
        </div>
      </div>
      <style jsx>{`
        .row {
            height: auto;
        }
        .clearfix::after { 
            content: " ";
            display: block; 
            height: 0; 
            clear: both;
         }

        .title {
            font-weight: 900;
            font-size: 1.5rem;
            font-family: Merriweather;
        }
        .title-alt {
            font-style: italic;
            opacity: .6;
        }

        .left {
          float: left;
          display: inline-block;
        }

        .right {
          float: right;
          display: inline-block;
        }

        @media (max-width: 666px) {
            .right, .left {
                width: 100%;
                float: right;
            }
            ul {
                padding-inline-start: 1rem;
            }
        }
      `}</style>
    </React.Fragment>
  );
};

export default ExperienceItem;
