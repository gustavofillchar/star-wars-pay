'use client'

import { useState } from "react"
import { CharacterType } from "@/app/types/character-types"
import CharacterCard from "../CharacterCard/character-card"
import api from "@/app/services/api"
import Button from "../Button/button"
import { useFilterPlanet } from "@/app/contexts/PlanetsFilterContext"

type PeopleResponse = {
    next: string;
    results: CharacterType[];
}

export default function FeedCharacters({ initialPeople }: any) {
    const { filter } = useFilterPlanet()
    const [peopleList, setPeopleList] = useState(initialPeople)
    const [page, setPage] = useState(initialPeople.next)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loadMore = async () => {
        setIsLoading(true)
        const nextPage = page;
        const newPeople = await api.get<PeopleResponse>(`${nextPage}`).finally(() => {
            setIsLoading(false)
        })

        setPeopleList({
            ...newPeople.data,
            results: [...peopleList.results, ...newPeople.data.results],
        });

        setPage(newPeople.data.next ? newPeople.data.next : null);
    };

    const characters = peopleList.results

    function EmptyList() {
        const results = filter ? characters.filter((character: CharacterType) => character.homeworld === filter) : characters
        if (results.length === 0) {
            return (
                <div className="text-gray-400 pb-12">
                    <p>There are no characters loaded from the selected homeworld.</p>
                </div>
            )
        }
    }

    return (
        <section className="px-[25px] sm:px-[50px] mt-[28px] sm:my-[50px] max-w-[1820px] min-[1920px]:mx-auto min-[1920px]:px-0">

            <h4 className="text-[32px] sm:text-[34px] font-light text-gray-gravity-500 mb-[43px]">All Characters</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1920px]:grid-cols-5 gap-x-[30px] gap-y-0">
                {characters && characters.map((character: CharacterType, index: number) => (
                    <CharacterCard
                        homeworldFilterSelected={filter}
                        key={`character-key-${index}`}
                        name={character.name}
                        homeworld={character.homeworld}
                        height={character.height}
                        mass={character.mass}
                        gender={character.gender}
                    />
                ))}
            </div>

            <EmptyList />

            <div className="w-full flex justify-center">
                <Button disabled={!page || isLoading} click={loadMore}>{isLoading ? 'Loading...' : 'Load more'}</Button>
            </div>

        </section>
    )
}
