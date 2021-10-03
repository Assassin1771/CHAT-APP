import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "d9617744-0435-4647-860f-edcff849befe",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (err) {
      setError("OOPS!! INCORRECT CREDENTIALS ☹");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">CHAT APPLICATION</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>START CHATTING!!</span>
            </button>
            <br />
            <br />
            <p
              className="title"
              style={{
                display: "inline",
                fontSize: "20px",
                fontFamily: "serif",
                fontWeight: "bold",
              }}
            >
              NEW HERE??
            </p>
            <br />
            <button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeqgHyV9GZojkkgCEOUCNVp3wXqCi2hsEM0iRHgZp1lwQtBuA/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
                style={{ fontFamily: "serif" }}
                className="button-1"
              >
                Click Here
              </a>
            </button>
          </div>
          <br />
          <br />

          <h2
            className="error"
            align="center"
            style={{ color: "white", fontSize: "20px" }}
          >
            {error}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
