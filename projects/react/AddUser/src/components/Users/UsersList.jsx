import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((data) => {
          return (
            <li key={data.id}>
              {data.username} ({data.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
