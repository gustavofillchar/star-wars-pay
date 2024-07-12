'use client';

import api from '@/app/services/api'
import { CharacterType } from '@/app/types/character-types'
import { Planet } from '@/app/types/planet-types'
import React, { useEffect, useState } from 'react'

function CharacterCard({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld }: CharacterType) {

  const [planet, setPlanet] = useState<string | undefined>(undefined)

  type PlanetResponse = {
    name?: string
  }

  async function fetchPlanet() {
    const response = await api.get<PlanetResponse>(`${homeworld}`)
    return response.data
  }

  useEffect(() => {
    if (!planet) {
      const fetchData = async () => {        
        const planetData = await fetchPlanet()
        setPlanet(planetData.name)
      }
      fetchData()
    }
  }, [homeworld, planet])

  return (
    <div className=''>
      <img src='https://picsum.photos/400/250' className='bg-slate-200' height={250} width={400} alt={`Picture of ${name}`} />

      <h3>{name}</h3>

      <h6>{planet}</h6>

      <div className='uppercase flex flex-col'>
        <span>Height: {height}</span>
        <span>Mass: {mass}</span>
        <span>Gender: {gender}</span>
      </div>
    </div>
  );
};

export default CharacterCard
