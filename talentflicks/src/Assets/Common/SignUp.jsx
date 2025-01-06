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
import DatePicker from "react-datepicker";
import { useState } from "react";

export default function SignUp({ toggleForm }) {
  const [showPassword, setShowPassword] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className="SignUpForm">
        <h3>SignUp to Talentflicks</h3>
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
          Sign Up
        </Button>
        <div style={{ color: "#000" }}>
          <h6>
            Already have an Account ?{" "}
            <Link
              onClick={toggleForm}
              style={{ color: "#ffd200", marginLeft: "10px", fontWeight: 600 }}
            >
              Login
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
}
