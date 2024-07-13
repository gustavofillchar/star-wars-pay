'use client'

import { useFilterPlanet } from "@/app/contexts/PlanetsFilterContext"
import { Planet } from "@/app/types/planet-types"

type PlanetList = {
    planets?: Planet[]
}

export default function FilterList({ planets }: PlanetList) {

    const {setFilter} = useFilterPlanet()

    const hasResidentsPlanets = planets?.filter((planet: Planet) => planet.residents.length > 0)

    return (
        <div className="flex items-start gap-x-[12px]">
            <label className="text-gray-gravity-300 font-normal text-[16px]">Filter By:</label>
            <select autoComplete="false" onChange={e => setFilter(e.target.value)} className="filter-nav-select" >
                <option value={''} defaultChecked>All</option>
                {hasResidentsPlanets && hasResidentsPlanets.map((planet: any) =>
                    <option key={planet.name} value={planet.url}>{planet.name}</option>
                )}
            </select>
        </div>
    )
}