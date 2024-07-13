'use client';

import api from '@/app/services/api'
import { CharacterType } from '@/app/types/character-types'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton' 

function CharacterCard({ name, height, mass, homeworldFilterSelected, gender, homeworld }: CharacterType) {

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

  const showCharacter = homeworldFilterSelected ? (homeworld === homeworldFilterSelected) : true

  const image = `https://picsum.photos/432/230?random=${name}${homeworld}`

  return (
    <>
      <article className={`w-full flex sm:flex-col pb-[46px] sm:pb-[110px] group ${showCharacter ? 'flex' : 'hidden'}`}>
        <img src={image} className='bg-slate-200 mr-[12px] sm:m-0 w-[115px] h-[130px] object-cover object-center sm:w-full sm:h-[230px] sm:group-hover:grayscale transition-all duration-500' alt={`Picture of ${name}`} />

        <div className='sm:mt-[16px]'>
          <h3 className='font-normal text-black text-[20px] leading-7 tracking-[1px]'>{name}</h3>
          <h6 className='text-black leading-7 text-[15px] tracking-[1px]'>{planet ? planet : <Skeleton width={72} />}</h6>
        </div>

        <div className='uppercase leading-4	sm:flex sm:flex-col hidden tracking-[0.5px] text-gray-gravity-200 text-[12px] mt-[13px]'>
          <span>Height • {height}</span>
          <span>Mass: • {mass}</span>
          <span>Gender: • {gender}</span>
        </div>

      </article>
    </>
  );
};

export default CharacterCard
