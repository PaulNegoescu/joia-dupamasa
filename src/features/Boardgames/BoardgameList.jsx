import { useEffect, useState } from 'react';
import { Card } from './Card';

const apiUrl = import.meta.env.VITE_API_URL;

export function BoardgameList() {
  const [boardgames, setBoardgames] = useState(null);

  useEffect(() => {
    async function getBoardgames() {
      const data = await fetch(
        `${apiUrl}/boardgames?_page=1&_per_page=10`
      ).then((res) => res.json());
      setBoardgames(data);
    }

    getBoardgames();
  }, []);

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
    </>
  );
}
