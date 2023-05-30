/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
export default function Card({
  props,
}: {
  props: {
    id: number;
    name: string;
    image: string;
    sexo: string;
    location: { name: string };
    status: string;
    species: string;
  };
}) {
  return (
    <div
      className="border m-5 flex min-w-[800px] min-h-[200px] rounded-md  max-w-[800px] max-h-[300px] p-2"
      onClick={() => {
        console.log(props);
      }}
    >
      <div className="border-r border-purple-900">
        <img src={props.image} alt="" className="w-[200px] h-full" />
      </div>
      <div className="flex flex-col items-center w-full h-full p-5 text-center gap-4 font-[roboto] font-extrabold">
        <h1> Name: {props.name} </h1>
        <p>Sexo: {props.sexo}</p>
        <p>Categoria: {props.species}</p>
        <p>Status: {props.status}</p>
        <p>Location: {props.location.name}</p>
      </div>
    </div>
  );
}
