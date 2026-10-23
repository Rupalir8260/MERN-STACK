import { useState } from "react";
import"./LoginForm.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
if (username.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter your username!");
    }
};
 return (
    <div className="login-container">
      {!isLoggedIn ? (
    <form onSubmit={handleSubmit}>
    <h2>Login Form</h2>
    <input type="text" placeholder="Enter username" value={username}
            onChange={(e) => setUsername(e.target.value)}
    />
  <br /> <br />
  <button type="submit">Login</button>
  <p id="para">Enter a username and click Login.</p>
        </form>
    ) : (
        <h2>Welcome, {username}!</h2>
      )}
    </div>
  );
}

export default LoginForm;