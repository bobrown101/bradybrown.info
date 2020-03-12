import React from "react";

const CircleImage = ({ src, size }: {src: string, size: string}) => {
  return (
    <React.Fragment>
      <img src={src}/>
      <style jsx>{`
        img {
          border-radius: 50%;
          height: ${size};
          width: ${size};
          object-fit: scale-up;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CircleImage;
