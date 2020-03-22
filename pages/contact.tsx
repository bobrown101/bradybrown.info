import Title from "../components/Title";
import Header from "../components/Header";
import Section from "../components/Section";
import GlobalStyles from "../components/GlobalStyles";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SubmitButton, {ButtonStates} from "../components/SubmitButton"

export default () => {
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState(ButtonStates.DEFAULT)
  const onSubmit = (data: any) => {
      console.log(data);
      setState(ButtonStates.LOADING)
      setTimeout(() => {
        setState(ButtonStates.SUCCESS)
      }, 2000)
  }


  return (
    <div>
      <GlobalStyles />
      <Header>
        <Title>Brady Brown</Title>
        <Link href="/">
          <a className="styled">Go Home</a>
        </Link>
      </Header>
      <Section title={"CONTACT ME"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="#name">Name</label>
          <input ref={register} type="text" name="name"></input>

          <label htmlFor="#email">Email</label>
          <input ref={register} type="email" name="email"></input>

          <label htmlFor="#message">Message</label>
          <textarea ref={register} name="message"></textarea>

          <SubmitButton buttonState={state}>Submit</SubmitButton>
        </form>
      </Section>
    </div>
  );
};
