'use server'

import api from '@/app/services/api'
import { CharacterType } from '@/app/types/character-types'
import { Planet } from '@/app/types/planet-types'
import React from 'react'

const CharacterCard: React.FC<CharacterType> = async ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld }: CharacterType) => {

    const planet = await api.get<Planet>(`${homeworld}`)

    return (
        <div className='border w-2/5 m-4'>

            <img src='https://picsum.photos/400/250' alt={`Picture of ${name}`} />

            <h3>{name}</h3>

            <h6>{planet.data.name}</h6>

            <div className='uppercase flex flex-col'>
                <span>Height: {height}</span>
                <span>Mass: {height}</span>
                <span>Gender: {height}</span>
            </div>

        </div>
    );
};

export default CharacterCard