'use client'

import { usePeople } from "@/app/contexts/PlanetsFilterContext"
import { Planet } from "@/app/types/planet-types"

export default function FilterList() {

    const { people, isLoading } = usePeople()

    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }

    return (
        <div className="flex items-start gap-x-[12px]">
            <label className="text-gray-gravity-300 font-light">Filter By:</label>
            <select className="filter-nav-select" name="nav" id="nav">
                {people.results.map((item: any) => (
                    <option key={item.homebrew} value={item.name}>{item.homeworld}</option>
                ))}
            </select>
        </div>
    )
}