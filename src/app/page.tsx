import FeedCharacters from "@/app/components/FeedCharacters/feed-characters-list";
import api from "./services/api"
import { CharacterType } from "@/app/types/character-types";

type PeopleResponse = {
  results: CharacterType[]
}
 
export default async function Home() {

  const people = await api.get<PeopleResponse>('https://swapi.dev/api/people?page=1')

  return (
    <main>

      <h1 className="text-5xl font-thin text-gray-gravity">Star Wars Characters</h1>

      <FeedCharacters people={people} />

    </main>
  )

}