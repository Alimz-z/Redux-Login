import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verification } from "../Redux/loginSlicer"; // Import the verification action
import Header from "./Header";
function Users() {
  const [userName, setUser] = useState("");
  const [passWord, setPassWord] = useState("");

  const dispatch = useDispatch();
  const { value, loginmsg } = useSelector((state) => state.login); // Access login slice

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(verification({ userName, passWord }));
  };

  return (
    <div>
        <Header />
      {value ? (
        <div className="h-[100vh] flex items-center justify-center">
          You are Logged in
        </div>
      ) : (
        <form onSubmit={handleLogin} className="h-[100vh]">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="username"
                value={userName}
                className="border border-px border-black rounded-sm"
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                value={passWord}
                className="border border-px border-black rounded-sm"
                onChange={(e) => setPassWord(e.target.value)}
              />
              <button type="submit">Submit</button>
              {loginmsg && <p>{loginmsg}</p>} {/* Display login message */}
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default Users;
