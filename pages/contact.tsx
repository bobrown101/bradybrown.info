import Title from "../components/Title";
import Header from "../components/Header";
import Section from "../components/Section";
import GlobalStyles from "../components/GlobalStyles";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SubmitButton, { ButtonStates } from "../components/SubmitButton";
import axios from "axios";

enum RequestState {
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  DEFAULT = "DEFAULT"
}
export default () => {
  const { register, handleSubmit, errors } = useForm();
  const [buttonState, setButtonState] = useState(ButtonStates.DEFAULT);
  const [requestState, setRequestState] = useState(RequestState.DEFAULT);
  const onSubmit = async (data: any) => {
    console.log(data);
    setRequestState(RequestState.LOADING);
    setButtonState(ButtonStates.LOADING);

    //   Make the loading animation a little longer than it needs to be
    setTimeout(async () => {
      try {
        const result = await axios.post("/api/contact", data);
        if (result.data.error) {
          setRequestState(RequestState.ERROR);
          setButtonState(ButtonStates.ERROR);
        } else {
          setRequestState(RequestState.SUCCESS);
          setButtonState(ButtonStates.SUCCESS);
        }
      } catch (error) {
        setRequestState(RequestState.ERROR);
        setButtonState(ButtonStates.ERROR);
      }
    }, 1000);
  };

  return (
    <div>
      <GlobalStyles />
      <Header>
        <Title>Brady Brown</Title>
        <Link href="/">
          <a className="styled nav-link">Go Home</a>
        </Link>
      </Header>
      <Section title={"CONTACT ME"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="#name">Name </label>
          {errors.name && <div className="error">{errors.name.message}</div>}

          <input
            ref={register({
              required: "Required",
              pattern: {
                value: /([^\s])/,
                message: "Name cannot be empty"
              }
            })}
            type="text"
            name="name"
          ></input>

          <label htmlFor="#email">Email </label>
          {errors.name && <div className="error">{errors.name.message}</div>}

          <input
            ref={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
              }
            })}
            type="email"
            name="email"
          ></input>

          <label htmlFor="#message">Message </label>
          {errors.name && <div className="error">{errors.name.message}</div>}

          <textarea
            ref={register({
              required: "Required",
              pattern: {
                value: /([^\s])/,
                message: "Message cannot be empty"
              }
            })}
            name="message"
          ></textarea>

          <SubmitButton
            buttonState={buttonState}
            disabled={
              buttonState === ButtonStates.ERROR ||
              Object.keys(errors).length > 0
            }
          >
            Submit
          </SubmitButton>
        </form>
      </Section>
    </div>
  );
};
