import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState } from 'react';
const inter = Inter({ subsets: ["latin"] });

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const handleLogin = () => {
      // 这里可以添加登录逻辑，比如发送登录请求到后端等
      console.log('登录用户名:', username);
      console.log('登录密码:', password);
    };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
        <div>
        <h2>登录页</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
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
        <button type="submit">登录</button>
      </form>
        </div>
        
    </main>
  );
}
export default LoginPage