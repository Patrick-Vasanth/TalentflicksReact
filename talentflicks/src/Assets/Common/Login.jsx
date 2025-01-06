import React, {useContext, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { AuthContext } from "./Autenticate";
import { useNavigate } from "react-router-dom";

export default function Login({ toggleForm }) {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  let loginCredentials = ()=>{
    login()
    navigate("/")
  }

  return (
    <div className="login">
      <form className="loginForm" onSubmit={loginCredentials}>
        <h3>Login To Talentflicks</h3>
        <FormControl sx={{ m: 2, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-login-email" id="user-login-label">
            Email
          </InputLabel>
          <OutlinedInput
            id="outlined-login-email"
            variant="warning"
            type="Email"
            label="Email"
          />
        </FormControl>
        <FormControl sx={{ m: 2, width: "25ch" }} variant="outlined">
          <InputLabel
            htmlFor="outlined-login-password"
            id="password-login-label"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-login-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="outlined" id="loginBtn" type="submit">
          Login
        </Button>
        <div
          style={{
            margin: "10px 30px 15px 0",
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Link style={{ color: "#ffd200", fontWeight: 600 }}>
            Forget Password?
          </Link>
        </div>
        <div style={{ color: "#000" }}>
          <h6>
            Don't have an Account ?
            <Link
              onClick={toggleForm}
              style={{ color: "#ffd200", marginLeft: "10px", fontWeight: 600 }}
            >
              Sign Up
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
}
