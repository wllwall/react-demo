import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "antd";
const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = async () => {
    // 这里可以添加登录逻辑，比如发送登录请求到后端等
    const loginParams = {
      username: username,
      password: password,
    };
    const response = await postData(
      "http://127.0.0.1:3007/api/login",
      loginParams
    );
    handleResponse(response);

    console.log("登录用户名:", username);
    console.log("登录密码:", password);
  };
  const postData = async (url:string, data:object) => {
    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      });
      return response.data;
    } catch (error) {
      alert(error.message);
      console.error("错误", error.message);
    }
  };
  const handleResponse = (response:any) => {
    console.log(response);
    alert(response.message);
    if (response.status === 0) {
      // 登录成功跳转到首页
      debugger;
      router.push("/");
    }
  };

  return (
    <main>
      <div>
        <h2>登录页</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label htmlFor="username">用户名:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">密码:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleLogin} type="primary">
            登录
          </Button>
        </form>
      </div>
    </main>
  );
};
export default LoginPage;
