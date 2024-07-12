import api from "@/app/services/api"
import { CharacterType } from "@/app/types/character-types"
import Button from "../Button/button"
import CharacterCard from "../CharacterCard/character-card"

export default function FeedCharacters({people}:any) {
 
  return (
      <section className="flex flex-wrap gap-6">

        {people.data.results.map((character: CharacterType, index: number) => (
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
  )

}