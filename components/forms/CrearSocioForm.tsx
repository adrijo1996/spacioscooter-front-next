import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 50px 200px;
`;

const InputStyled = styled.input`
  width: 180px;
  heigth: 20px;
  margin: 20px;
`;

let baseURL = "http://localhost:3001";
const api = axios.create({ baseURL });

const timeout = (ms) => {
  return new Promise((resolve) => {
    return setTimeout(resolve, ms);
  });
};

export const addSocios = async (data) => {
  const res = await api.post("/socios", data);
  return res.data;
};

export const CrearSocioForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    await addSocios(data);
    await timeout(2000);
    console.log("SUBMIT");
    reset();
  });

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <strong>Nombre:</strong>{" "}
      <InputStyled
        placeholder="ej: Fernando"
        {...register("name")}
        required="true"
      />
      <strong>Apellidos:</strong>
      <InputStyled
        placeholder="ej: López Santos"
        {...register("surname")}
        required="true"
      />
      <strong>DNI:</strong>
      <InputStyled
        placeholder="ej: 12345678A"
        {...register("dni")}
        required="true"
      />
      <strong>Fecha de nacimiento:</strong>
      <InputStyled type="date" {...register("birthday")} required="true" />
      <strong>Tipo de vía:</strong>
      <InputStyled
        placeholder="ej: Calle, Plaza..."
        {...register("road")}
        required="true"
      />
      <strong>Dirección:</strong>
      <InputStyled
        placeholder="ej: Mayor, 5, bajo A..."
        {...register("address")}
        required="true"
      />
      <strong>Código postal:</strong>
      <InputStyled
        type="number"
        placeholder="ej: 12345..."
        {...register("postal")}
        required="true"
      />
      <strong>Población:</strong>
      <InputStyled
        placeholder="ej: Arganda del Rey..."
        {...register("town")}
        required="true"
      />
      <strong>Provincia:</strong>
      <InputStyled
        placeholder="ej: Madrid..."
        {...register("province")}
        required="true"
      />
      <strong>Número de télefono:</strong>
      <InputStyled
        type="number"
        placeholder="ej: 612345789..."
        {...register("number")}
        required="true"
      />
      <strong>Correo electrónico:</strong>
      <InputStyled
        type="email"
        placeholder="ej: 1234@gmail.com..."
        {...register("email")}
        required="true"
      />
      <strong>Modelo de moto:</strong>
      <InputStyled
        placeholder="ej: Piaggio X10..."
        {...register("motocycle")}
        required="true"
      />
      <InputStyled type="submit" style={{ margin: "20px" }} />
    </FormStyled>
  );
};
