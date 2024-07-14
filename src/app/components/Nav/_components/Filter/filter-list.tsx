'use client'

import { useFilterPlanet } from "@/app/contexts/PlanetsFilterContext"
import { Planet } from "@/app/types/planet-types"

type PlanetList = {
    planets?: Planet[]
}

export default function FilterList({ planets }: PlanetList) {

    const { setFilter, filter } = useFilterPlanet()

    const hasResidentsPlanets = planets?.filter((planet: Planet) => planet.residents.length > 0)

    function clearFilterSelected(){
        setFilter('')
    }

    return (
        <div className="w-full flex justify-between">
            <div className="flex  flex-1 items-start gap-x-[12px]">
                <label className="text-gray-gravity-300 font-normal text-[16px]">Filter By:</label>
                <select value={filter} autoComplete="false" onChange={e => setFilter(e.target.value)} className="filter-nav-select" >
                    <option value={''} defaultChecked>All</option>
                    {hasResidentsPlanets && hasResidentsPlanets.map((planet: any) =>
                        <option key={planet.name} value={planet.url}>{planet.name}</option>
                    )}
                </select>
            </div>

            <button onClick={() => clearFilterSelected()} disabled={!filter} className="uppercase hidden sm:flex justify-center items-center border h-[38px] px-[40px] text-sm border-blue-gravity text-blue-gravity disabled:text-gray-300 disabled:border-gray-gravity-50 disabled:bg-white hover:bg-blue-gravity hover:text-white transition-all duration-500">
                Clear all
            </button>

        </div>
    )
}