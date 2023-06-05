import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";
import getUser from "./service/users";

function App() {
  const [users, setUsers] = useState([]);
  const [usersCreate, setUserCreate] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    getUser()
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChange = (event) => {
    setUserCreate({ [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", usersCreate)
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        alert(JSON.stringify(err));
      });
  };

  return (
    <div className="App">
      <List />
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="name" name="name" onChange={onChange} />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={onChange}
        />
        <button>Simpan</button>
      </form>
    </div>
  );
}

export default App;
