import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

let baseURL = "http://localhost:3001";
const api = axios.create({ baseURL });

const timeout = (ms) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};

export const addRutas = async (data) => {
  const res = await api.post("/rutas", data);
  return res.data;
};

export const CrearRutaForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    await addRutas(data);
    await timeout(2000);
    console.log("SUBMIT");
    reset();
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Nombre de la ruta" {...register("name")} />
      <input type="submit" />
    </form>
  );
};
