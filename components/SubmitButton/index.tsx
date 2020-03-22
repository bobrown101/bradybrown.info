import React, { useState, useEffect, useRef, useCallback } from "react";

export enum ButtonStates {
  LOADING = "loading",
  DEFAULT = "default",
  SUCCESS = "success",
  ERROR = "error"
}
const mainColor = "#feeea0";

export default ({
  className = "",
  buttonState = ButtonStates.DEFAULT,
  children,
  ...props
}: {
  className?: string;
  buttonState?: ButtonStates;
  children?: React.ReactNode;
}) => {
  const [currentClass, setCurrentClass] = useState(buttonState);
  const [animationFinished, setAnimationFinished] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonState !== currentClass && animationFinished) {
      setCurrentClass(buttonState);
    }
  }, [buttonState, animationFinished]);

  const onAnimationIteration = useCallback(() => {
    setAnimationFinished(true);
  }, []);

  const innerCircleClass = `inner-circle ${buttonState}`;

  return (
    <React.Fragment>
      <button
        {...props}
        className={`${className} ${currentClass}`}
        ref={buttonRef}
      >
        {buttonState === ButtonStates.DEFAULT && children}
        <div
          className={innerCircleClass}
          onAnimationIteration={onAnimationIteration}
        >
          {buttonState === ButtonStates.SUCCESS && <div className="check" />}
        </div>
      </button>
      <style jsx>
        {`
          button {
            padding: 0 0 0 0;
            box-shadow: 0rem 0rem 0rem 0.1rem;
            border: none;
            border-radius: 0.2rem;
            display: block;
            margin-bottom: 1rem;
            width: 100%;
            box-sizing: border-box;
            background-color: ${mainColor};
            font-weight: bold;
            height: 3rem;
            transition: width border 0.2s ease;
            margin: 0 auto; /* Center the element */
          }

          .check {
            display: inline-block;
            transform: rotate(45deg) translate(-0.1rem, -0.1rem);
            height: 1rem;
            width: 0.5rem;
            border-bottom: 0.5rem solid black;
            border-right: 0.5rem solid black;
            margin: 0 auto;

            animation: bounceIn;
            animation-duration: 1s;
            animation-fill-mode: both;
          }

          button.loading {
            width: 3rem;
            content: " ";
            animation: pulse-button 1.25s
              cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
            border-radius: 50%;
          }

          button.success {
            width: 3rem;
            content: "X";
            border-radius: 50%;
          }

          button .inner-circle {
            border-radius: 50%;
            content: " ";
            background-color: black;
            height: 3rem;
            width: 3rem;
            margin: 0 auto; /* Center the element */
            transition: background-color 0.25s ease;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          button.default .inner-circle {
            display: none;
          }

          button.loading .inner-circle {
            animation: pulse-inner 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s
              infinite;
            background-color: black;
          }

          button.success .inner-circle {
            transition: none;
            background-color: ${mainColor};
          }

          @keyframes pulse-button {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(0.8);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes pulse-inner {
            0% {
              transform: scale(0);
            }
            50% {
              transform: scale(0.8);
            }
            100% {
              transform: scale(0);
            }
          }

          @keyframes bounceIn {
            from,
            20%,
            40%,
            60%,
            80%,
            to {
              animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              transform: rotate(45deg) translate(-0.1rem, -0.1rem) scale3d(0.3, 0.3, 0.3);
            }

            20% {
              transform: rotate(45deg) translate(-0.1rem, -0.1rem) scale3d(1.1, 1.1, 1.1);
            }

            40% {
              transform: rotate(45deg) translate(-0.1rem, -0.1rem) scale3d(0.9, 0.9, 0.9);
            }

            60% {
              opacity: 1;
              transform: rotate(45deg) translate(-0.1rem, -0.1rem) scale3d(1.03, 1.03, 1.03);
            }

            80% {
              transform: rotate(45deg) translate(-0.1rem, -0.1rem) scale3d(0.97, 0.97, 0.97);
            }

            to {
              opacity: 1;
              transform: rotate(45deg) translate(-0.1rem, -0.1rem) scale3d(1, 1, 1);
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};
