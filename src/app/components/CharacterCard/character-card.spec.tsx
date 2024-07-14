import CharacterCard from "./character-card";
import { render, screen } from "@testing-library/react";

describe('CharacterCard', () => {
    it('Renders a character card with correct planet name without a filter selected', async () => {
        render(
            <CharacterCard
                name="Luke Skywalker"
                height="172"
                mass="77"
                homeworld="https://swapi.dev/api/planets/1/"
                gender="male"
                homeworldFilterSelected=""
            />
        );
 
        expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
        expect(screen.getByText('Height • 172')).toBeInTheDocument();
        expect(screen.getByText('Mass • 77')).toBeInTheDocument();
        expect(screen.getByText('Gender • male')).toBeInTheDocument();
    });
});

