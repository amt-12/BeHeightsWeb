import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { apiUrl } from "../../../../config";
import axiosInstance from '../../../../axiosInstance'

const API_URL = apiUrl;

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Define the navigate function

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn.addEventListener("click", () => {
      container.classList.add("active");
      setIsLogin(false);
    });

    loginBtn.addEventListener("click", () => {
      container.classList.remove("active");
      setIsLogin(true);
    });
  }, []);

  const onFinish = (values) => {
    axiosInstance
      .post(`${API_URL}/api/auth/login`, { 
       
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        localStorage.setItem("accessToken",response?.data?.accessToken)
        message.success(response?.data?.message);
        navigate('/dashboard')
      })
      .catch((error) => {
        message.error(error?.response?.data?.error?.message);
      });
  };
  const handleRegisterButtonClick = () => {
    const container = document.getElementById("container");
    container.classList.remove("active");
    setIsLogin(true);
  };
  const onFinish2 = (values) => {
    axiosInstance
      .post(`${API_URL}/api/auth/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
      })
      .then((response) => {
        message.success("Registration successful!");
        console.log(response);
        handleRegisterButtonClick();
      })
      .catch((error) => {
        console.error(error);

        message.error("Registration failed!");
      });
  };

  return (
    <div className="bg-[#f8f1e1] flex items-center justify-center flex-col h-[90vh]">
      <div class="container" id="container">
        <div class="form-container sign-up">
          <Form onFinish={onFinish2}>
            <h1>Create Account</h1>
            <span>or use your email for registeration</span>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your Name!",
                },
              ]}
            >
              <Input type="text" placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your Email!",
                },
              ]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your Password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter your Phone!",
                },
              ]}
            >
              <Input type="phone" placeholder="Phone" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div class="form-container sign-in">
          <Form onFinish={onFinish}>
            <p className="text-[25px]">Log In</p>
            <span className="text-[15px] font-bold">
              or use your email password
            </span>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your Email!",
                },
              ]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your Password!",
                },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>
            <p className="text-[250px] font-bold">Forget Your Password?</p>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form>
        </div>
        <div class="toggle-container">
          <div class="toggle">
            <div class="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <Button class="hidden" id="login">
                Log In
              </Button>
            </div>
            <div class="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <Button class="hidden" id="register">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
