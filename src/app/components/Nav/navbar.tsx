import api from "@/app/services/api";
import FilterList from "./_components/Filter/filter-list";
import { Planet } from "@/app/types/planet-types";

type PlanetResponse = {
    results?: Planet[],
    next?: string
}

async function fetchAllPlanets(url: string): Promise<Planet[]> {
    let planets: Planet[] = [];
    let nextUrl: string | null = url;

    while (nextUrl) {
        const response: any = await api.get<PlanetResponse>(nextUrl);
        const data = response.data;
        if (data.results) {
            planets = planets.concat(data.results);
        }
        nextUrl = data.next || null;
    }

    return planets;
}

export default async function Nav() {
    const allPlanets = await fetchAllPlanets('https://swapi.dev/api/planets');

    return (
        <nav className="sm:border-b">
            <div className="py-[16px] sm:py-[26px] px-[25px] sm:px-[50px] max-w-[1820px] min-[1920px]:mx-auto min-[1920px]:px-0">
                <FilterList planets={allPlanets} />
            </div>
        </nav>
    )
}