import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="flex flex-col gap-4 items-center  max-w-96 w-full mx-auto ">
        <h1 className="text-3xl font-bold">Faça seu Login</h1>
        {/* Formulario de Login */}
        <form className="flex flex-col w-full gap-2">
          <input
            type="email"
            className="w-full rounded-full border border-gray-300 py-2 px-4"
            placeholder="Digite seu email"
          />
          <input
            type="password"
            className="w-full rounded-full border border-gray-300 py-2 px-4"
            placeholder="Digite sua senha"
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
