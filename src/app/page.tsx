"use client";
import { useQueryClient, useQuery } from "react-query";
import Card from "@/components/card";
import { useState } from "react";
async function getCaracters() {
  const query = await fetch("https://rickandmortyapi.com/api/character");
  const data = await query.json();
  return data.results;
}
export default function Home() {
  const [statePage, setStatePage] = useState(1);
  const { data, isLoading } = useQuery({
    queryFn: getCaracters,
    queryKey: ["characters"],
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLoading ? (
        <div> Carregando...</div>
      ) : (
        <>
          <div>Bem vindo a página inicial</div>
          {data &&
            data.map((character: any) => (
              <Card
                key={character.id}
                props={{
                  id: character.id,
                  name: character.name,
                  image: character.image,
                  location: { name: character.location.name },
                  status: character.status,
                  sexo: character.gender,
                  species: character.species,
                }}
              />
            ))}
        </>
      )}
    </main>
  );
}
