import React, { useState, useEffect } from "react";
import loginStyle from "./login.module.css";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {  fetchUsers, selectAllUsers } from "../../redux/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/logo.png";

const SignIn = () => {
  const allUsers = useSelector(selectAllUsers);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (email === "" && password === "") {
      alert("Please enter email and password");
    } else if (allUsers.find((user) => user.email === email && user.password === password)) {
      alert("succesfull");
      navigate("/");
    } else {
      alert("wrong email or password");
    }
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <div className={loginStyle.container}>
        <div className={loginStyle.navbar}>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={loginStyle.navRightSide}>
            <p>Not a member?</p>
            <Link to="/signUp">Sign Up Now</Link>
          </div>
        </div>
        <div className={loginStyle.main}>
          <div className={loginStyle.main_leftSide_SignIn}>
            <div>
              <h3>We Offer the Best Products</h3>
            </div>
          </div>
          <div className={loginStyle.main_rightSide}>
            <div className={loginStyle.main_rightSide_form}>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <h3>Sign in to eTrade.</h3>
                  <p>Enter your detail below</p>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="annie@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <FormGroup className={loginStyle.signIn_forgotpassword_btn}>
                  <Button type="submit" className={loginStyle.createAccount}>
                    Sign In
                  </Button>
                  <Link to="">Forget Password?</Link>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
