import type { AnimeProp } from "../types.ts";

export const fetchAnime = async (
  page: number = 1,
  limit: number = 8,
): Promise<AnimeProp[]> => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=${limit}&order=popularity`,
  );

  return await response.json();
};
