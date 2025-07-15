import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/user/login",
          { email, password }
        );

        setUser(data);
        setRedirect(true);
      } catch (error) {
        alert("Deu um erro ao fazer login, verifique suas credenciais!");
      }
    } else {
      alert("Preencha todos os campos!");
      return;
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="flex flex-col gap-4 items-center  max-w-96 w-full mx-auto ">
        <h1 className="text-3xl font-bold">Faça seu Login</h1>
        {/* Formulario de Login */}
        <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 py-2 px-4"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 py-2 px-4"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full rounded-full border border-gray-300 py-2 px-4 cursor-pointer bg-primary text-white font-bold">
            Login
          </button>
        </form>
        <p>
          Ainda não tem conta?{" "}
          <Link to="/register" className="underline font-semibold">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
