import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Admin } from "../JS/userSlice/userSlice";

const Register = () => {
  const [Admin, setAdmin] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <div className="wrapper">
        <form onSubmit={(e) => e.preventDefault()} className="form-signin">
          <h2 className="form-signin-heading">Please register</h2>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="name"
            required=""
            autofocus=""
            onChange={(e) => setregister({ ...Admin, name: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="last name"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...Admin, lastname: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
            onChange={(e) =>
              setregister({ ...Admin, email: e.target.value })
            }
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
            onChange={(e) =>
              setregister({ ...Admin, password: e.target.value })
            }
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              dispatch(userRegister(Admin));
            }}
          >
            register
          </button>

          <h5>
            u already have account <Link to="/login">sign in </Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Admin;