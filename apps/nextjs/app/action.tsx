"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard.tsx";

export const fetchAnime = async (page: number = 1, limit: number = 8) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`,
  );

  const data = await response.json();

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
