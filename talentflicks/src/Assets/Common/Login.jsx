import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <form className="loginForm">
        <h3>Login To Talentflicks</h3>
        <FormControl sx={{ m: 2, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-username" id="user-label">
            UserName
          </InputLabel>
          <OutlinedInput
            id="outlined-username"
            variant="warning"
            type="text"
            label="UserName"
          />
        </FormControl>
        <FormControl sx={{ m: 2, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" id="password-label">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
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
        <Button variant="outlined" id="loginBtn">
          Login
        </Button>
        <div style={{margin:"10px 0"}}>
          <Link>Forget Password?</Link>
        </div>
      </form>
    </div>
  );
}
