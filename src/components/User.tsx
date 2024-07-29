import { useState, useEffect } from "react";

function User() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    id: String(Date.now()), //convert the date to string first
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json(); //parse it from json to javascript
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    }

    getUsers();
    console.log(users);
  }, []);

  return (
    <>
      {users.map((item) => (
        <div key={item.id}>
          <p>
            <b>Name:</b> {item.name}
          </p>
          <p>
            <b>Email:</b> {item.email}
          </p>
          <p>
            <b>Password:</b> {item.password}
          </p>
        </div>
      ))}

      <div>
        <h3>Sample</h3>
        <p>
          <b>Name:</b> Jessica Fuyuki
        </p>
        <p>
          <b>Email:</b> happybunny_jf@yahoo.co.id
        </p>
        <p>
          <b>Password:</b> r@hasiaD0ng
        </p>
      </div>
    </>
  );
}

export default User;
