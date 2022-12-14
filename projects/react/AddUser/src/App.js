import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [first, setfirst] = useState([]);
  const [error, setError] = useState();

  const userDataHandler = (uName, uAge) => {
    return setfirst((predata) => {
      return [
        ...predata,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const nameError = () => {
    setError({
      title: "Invalid input",
      message: "Please enter a valid name and age (non-empty values)",
    });
  };

  const ageError = () => {
    setError({ title: "Invalid input", message: "Please enter age > 0" });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <AddUser
        onSubmit={userDataHandler}
        onNameError={nameError}
        onAgeError={ageError}
      />
      <UsersList users={first} />
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    </>
  );
}

export default App;
