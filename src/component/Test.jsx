import { useState } from "react";
import axios from "axios";
const rootUrl = "http://localhost:5000";

function Test() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const user = { email, password };
    console.log(user);

    const url = `${rootUrl}/api/v1/auth/login`;
    // const url = `/api/v1/auth/login`;
    axios(url, {
      method: "POST",
      // withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "http://localhost:5000",
        "X-Requested-With": "*",
        // "Access-Control-Allow-Origin": "*",
      },
      data: JSON.stringify(user),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    console.log("success");
    setPassword("");
    setEmail("");

    // try {
    //   const url = `${rootUrl}/api/v1/auth/login`;
    //   // const url = `/api/v1/auth/login`;
    //   await fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   });
    //   console.log("success");
    //   setPassword("");
    //   setEmail("");
    // } catch (error) {
    //   console.log(error);
    //   console.log("error");
    // }
  };

  const fetchTesting = async () => {
    const url = `${rootUrl}/api/v1`;
    // const url = `/api/v1`;
    await fetch(url);
  };
  const fetchLogout = async () => {
    const url = `${rootUrl}/api/v1/auth/logout`;
    // const url = `/api/v1/auth/logout`;
    await fetch(url);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>login form</h4>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input email-input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block submit-btn">
          submit
        </button>
      </form>
      <div className="container">
        <button className="btn testing-btn" onClick={fetchTesting}>
          Testing
        </button>
        <button className="btn logout-btn" onClick={fetchLogout}>
          Logout
        </button>
      </div>
    </>
  );
}

export default Test;
