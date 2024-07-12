'use server'

import api from '@/app/services/api'
import { CharacterType } from '@/app/types/character-types'
import { Planet } from '@/app/types/planet-types'
import React from 'react'

async function CharacterCard({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld }: CharacterType){

    let planet;

    if (homeworld) {
      try {
        planet = await api.get<Planet>(`${homeworld}`);
      } catch (error) {
        console.error('Error fetching planet data:', error);
      }
    }

    return (
        <div className=''>

            <img src='https://picsum.photos/400/250' className='bg-slate-200' height={250} width={400} alt={`Picture of ${name}`} />

            <h3>{name}</h3>

            <h6>{planet?.data.name}</h6>

            <div className='uppercase flex flex-col'>
                <span>Height: {height}</span>
                <span>Mass: {height}</span>
                <span>Gender: {height}</span>
            </div>

        </div>
    );
};

export default CharacterCard