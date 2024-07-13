'use client'

import { useFilterPlanet } from "@/app/contexts/PlanetsFilterContext"
import { Planet } from "@/app/types/planet-types"

type PlanetList = {
    planets?: Planet[]
}

export default function FilterList({ planets }: PlanetList) {

    const {setFilter} = useFilterPlanet()

    return (
        <div className="flex items-start gap-x-[12px]">
            <label className="text-gray-gravity-300 font-light">Filter By:</label>
            <select onChange={e => setFilter(e.target.value)} className="filter-nav-select" name="nav" id="nav">
                <option value={''} defaultChecked>All</option>

                {planets && planets.map((planet: any) =>
                    <option key={planet.name} value={planet.url}>{planet.name}</option>
                )}

            </select>
        </div>
    )
}