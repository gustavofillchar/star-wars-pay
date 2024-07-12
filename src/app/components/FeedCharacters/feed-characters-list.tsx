'use client'

import { useEffect, useState } from "react"
import { CharacterType } from "@/app/types/character-types"
import CharacterCard from "../CharacterCard/character-card"
import api from "@/app/services/api"
import Button from "../Button/button"
import { usePeople } from "@/app/contexts/PlanetsFilterContext"

type PeopleResponse = {
    next: string;
    results: CharacterType[];
}

export default function FeedCharacters({ initialPeople }: any) {
    const { setPeople, setIsLoadingContext } = usePeople()
    const [people, setPeopleList] = useState(initialPeople)
    const [page, setPage] = useState(initialPeople.next)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setPeople(people && people)
        if (setIsLoadingContext) {
            setIsLoadingContext(false);
        }
    }, [people])

    const loadMore = async () => {
        setIsLoading(true)
        const nextPage = page;
        const newPeople = await api.get<PeopleResponse>(`${nextPage}`).finally(() => {
            setIsLoading(true)

            if (setIsLoadingContext) {
                setIsLoadingContext(false);
            }

        })

        setPeopleList({
            ...newPeople.data,
            results: [...people.results, ...newPeople.data.results],
        });

        setPage(newPeople.data.next ? newPeople.data.next : null);
    };

    return (
        <section className="mx-[50px] my-[50px] max-w-[1820px] min-[1920px]:mx-auto">
            <h4 className="text-[20px] font-light text-gray-gravity-500 mb-[50px]">All Characters</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1920px]:grid-cols-5 gap-x-[30px] gap-y-0">
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
            </div>

            <div className="w-full flex justify-center">
                <Button disabled={!page || isLoading} click={loadMore}>{isLoading ? 'Loading...' : 'Load more'}</Button>
            </div>

        </section>
    )
}
