import api from "./services/api"
import Button from "./components/Button/button"
import CharacterCard from "./components/CharacterCard/character-card";
import { CharacterType } from "@/app/types/character-types";

type PeopleResponse = {
  results: CharacterType[]
}

export default async function Home() {

  const people = await api.get<PeopleResponse>('https://swapi.dev/api/people?page=1')

  return (
    <main>
      <h1 className="font-bold">Planetas</h1>

      <section>
        {people.data.results.map((character: CharacterType) => (
          <CharacterCard
            name={character.name}
            homeworld={character.homeworld}
            height={character.height}
            mass={character.mass}
            gender={character.gender}
          />
        ))}
      </section>

      <Button>Load more</Button>

    </main>
  )

}