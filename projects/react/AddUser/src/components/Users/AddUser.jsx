import React, { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const enteredNameRef = useRef("");
  const enteredAgeRef = useRef("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = enteredNameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;

    props.onSubmit(enteredName, enteredAge);

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.onNameError();
      return;
    }

    if (+enteredAge < 1) {
      props.onAgeError();
      return;
    }

    enteredNameRef.current.value = "";
    enteredAgeRef.current.value = "";
  };

  return (
    <Wrapper>
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input id="username" type="text" ref={enteredNameRef} />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={enteredAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
