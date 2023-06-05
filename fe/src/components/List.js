import React, { useState, useEffect } from "react";
import axios from "axios";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      {users.map((item, idx) => {
        return <h1 key={idx}>{item.name}</h1>;
      })}
    </div>
  );
};

export default ListUser;
