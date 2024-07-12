'use client';

import { useState } from "react";
import { CharacterType } from "@/app/types/character-types";
import CharacterCard from "../CharacterCard/character-card";
import api from "@/app/services/api";

export default function FeedCharacters({ initialPeople }: any) {
    const [people, setPeople] = useState(initialPeople);
    const [page, setPage] = useState(initialPeople.next);

    const loadMore = async () => {
        const nextPage = page;
        const newPeople = await api.get<any>(`${nextPage}`);

        setPeople({
            ...newPeople.data,
            results: [...people.results, ...newPeople.data.results],
        });

        setPage(newPeople.data.next ? newPeople.data.next : null);
    };

    return (
        <>
            <span>Exibindo {people.results.length} de {people.count}</span>

            <section className="flex flex-wrap gap-6">

                {people.results.map((character: CharacterType, index: number) => (
                    <CharacterCard
                        key={`key-${index}`}
                        name={character.name}
                        homeworld={character.homeworld}
                        height={character.height}
                        mass={character.mass}
                        gender={character.gender}
                    />
                ))}

            </section>
            <button disabled={!page} onClick={loadMore} className="mt-4 p-2 bg-blue-500 text-white rounded">Load More</button>
        </>
    );
}
