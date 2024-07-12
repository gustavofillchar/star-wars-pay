'use client'
 
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CharacterType } from "@/app/types/character-types";

type PeopleContextType = {
  people: CharacterType[] | any;
  setPeople: any;
  setFilter: (homeworld: string) => void;
  filter?: string,
  isLoading?: boolean,
  setIsLoadingContext?: React.Dispatch<React.SetStateAction<boolean>>
};

export const PeopleContext = createContext<PeopleContextType | undefined>(undefined);

export const usePeople = () => {
  const context = useContext(PeopleContext);
  if (!context) {
    throw new Error("usePeople must be used within a PeopleProvider");
  }
  return context;
};

export const PeopleProvider = ({ children }: { children: ReactNode }) => {
  const [people, setPeople] = useState<CharacterType[]>([]); 
  const [filter, setFilterState] = useState<string>('');
  const [isLoading, setIsLoadingContext] = useState<boolean>(true);
 
  const setFilter = (homeworld: string) => {
    setFilterState(homeworld);
  };

  return (
    <PeopleContext.Provider value={{ people, setPeople, setFilter, filter, isLoading, setIsLoadingContext }}>
      {children}
    </PeopleContext.Provider>
  );
};
