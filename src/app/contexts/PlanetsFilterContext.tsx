'use client'
 
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CharacterType } from "@/app/types/character-types";

type PlanetContextType = {
  setFilter: (homeworld: string) => void;
  filter?: string,
  isLoading?: boolean,
  setIsLoadingContext?: React.Dispatch<React.SetStateAction<boolean>>
};

export const PlanetContext = createContext<PlanetContextType | undefined>(undefined);

export const useFilterPlanet = () => {
  const context = useContext(PlanetContext);
  if (!context) {
    throw new Error("usePeople must be used within a PlanetContextProvider");
  }
  return context;
};

export const PlanetContextProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilterState] = useState<string>('');
  const [isLoading, setIsLoadingContext] = useState<boolean>(true);
 
  const setFilter = (homeworld: string) => {
    setFilterState(homeworld);
  };

  return (
    <PlanetContext.Provider value={{ setFilter, filter, isLoading, setIsLoadingContext }}>
      {children}
    </PlanetContext.Provider>
  );
};
