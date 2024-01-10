import React from "react";
import { useState } from "react";

function App() {
  const [username, setusername] = useState("");
  const [city, setcity] = useState("");
  const [gender, setgender] = useState("");
  const [index, setindex] = useState("");
  const [user, setuser] = useState([]);

  const handler = (e) => {
    e.preventDefault();
    console.log({ username, city, gender });

    const newuser = { username, city, gender };
    const copyuser = [...user];
    copyuser.push(newuser);
    setuser(copyuser);

    setusername('')
    setcity('')
    setgender('')
  };

  const deletehandler = (index) => {
    const copyuser = [...user]
    copyuser.splice(index, 1)
    setuser(copyuser);
  };

  let data = <h1 className="m-5 inline-block text-center w-32 h-32 bg-zinc-800 text-white rounded font-semibold">Loading...</h1>;
  if (user.length > 0) {
    data = user.map((user, username) => {
      return (
        <div
          className="card m-5 text-center inline-block flex-column gap-10 w-40 h-40 bg-zinc-800 text-white rounded font-semibold "
          key={index}
        >
          <h1>{user.username}</h1>
          <button
            className="bg-red-400 px-4 py-1 rounded text-black font-semibold"
            onClick={() => {deletehandler(index)}}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="font-bold text-4xl text-center bg-black text-white py-5">
        Two Way Binding
      </h1>
      <form onSubmit={handler}>
        <input
          className="border-2 border-black rounded m-5 px-4 py-2"
          type="text"
          placeholder="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <select
          className="border-2 border-black rounded px-4 py-2"
          onChange={(e) => setcity(e.target.value)}
        >
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
          <option value="Khatu">Khatu</option>
          <option value="Ujjain">Ujjain</option>
          <option value="Ayodhya">Ayodhya</option>
        </select>
        <label className="border-2 border-black font-semibold rounded px-4 py-2 m-5">
          Female
          <input
            className="mx-1"
            type="radio"
            placeholder="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setgender(e.target.value)}
          />
        </label>
        <label className="border-2 border-black font-semibold rounded px-4 py-2">
          Male
          <input
            className="mx-1"
            type="radio"
            placeholder="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setgender(e.target.value)}
          />
        </label>
        <button className="px-4 py-2 bg-blue-700 text-white font-semibold m-5 rounded">
          Submit
        </button>
      </form>
      <hr />
      {data}
    </div>
  );
}

export default App;
