import FeedCharacters from "@/app/components/FeedCharacters/feed-characters-list";
import api from "./services/api";
import { CharacterType } from "@/app/types/character-types";
import Header from "./components/Header/header";

type PeopleResponse = {
  results: CharacterType[]
}

export default async function Home() {
  const response = await api.get<PeopleResponse>('https://swapi.dev/api/people');
  const people = response.data;

  return (
    <main className="">

      <Header
        title="Star Wars Characters"
        description="Explore the Star Wars universe through our comprehensive character directory. Discover detailed profiles of all your favorite characters from the iconic saga, including heroes, villains, and everyone in between."
      />
 
      <FeedCharacters initialPeople={people} />

    </main>
  );
}