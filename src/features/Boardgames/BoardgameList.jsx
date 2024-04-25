import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from './Card';
import { Pagination } from '@/components/Pagination/Pagination';

const apiUrl = import.meta.env.VITE_API_URL;
const gamesPerPage = 10;

export function BoardgameList() {
  const [boardgames, setBoardgames] = useState(null);
  const [numberOfGames, setNumberOfGames] = useState(0);

  const [search] = useSearchParams();
  const page = search.get('page') ?? 1;

  useEffect(() => {
    async function getBoardgames() {
      const data = await fetch(
        `${apiUrl}/boardgames?_page=${page}&_limit=${gamesPerPage}`
      ).then((res) => {
        const totalNoGames = res.headers.get('x-total-count');
        setNumberOfGames(totalNoGames);
        return res.json();
      });
      setBoardgames(data);
    }

    getBoardgames();
  }, [page]);

  if (!boardgames) {
    return <strong>Loading ...</strong>;
  }

  return (
    <>
      <h1 className="text-3xl my-4">Boardgames</h1>
      <div className="grid grid-cols-responsive gap-4">
        {boardgames.map((bg) => (
          <Card key={bg.id} game={bg} />
        ))}
      </div>
      <Pagination
        numberOfItems={numberOfGames}
        itemsPerPage={gamesPerPage}
      />
    </>
  );
}
