import React from "react";
import "./Login.css";
import { createUserWithEmailAndPassword, getAuth, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [profilePicture, setProfilePicture] = React.useState("");

  const auth = getAuth();
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(userAuth => {
        dispatch(login(
            {
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoURL: userAuth.photoURL,
            }
        ))
           }).catch(err => alert(err))
  };

  const register = () => {
    if (!name) {
      alert("Please enter your name");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=>updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profilePicture,
    }))
      .then((userAuth) => {
        console.log(userAuth)
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: name,
            photoURL: profilePicture,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
        alt="linkedin"
      />
      <form onSubmit={loginToApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name(Required if registering)"
        />
        <input
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          type="text"
          placeholder="Profile Picture (Optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Sign in</button>
      </form>
      <p>
        Not a member ?{" "}
        <span onClick={register} className="login__register">
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
