import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface FilterState {
  priceRange: {
    min: number;
    max: number;
  };
  metalType: string[];
  occasion: string[];
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
}

type FilterAction =
  | { type: 'SET_PRICE_RANGE'; payload: { min: number; max: number } }
  | { type: 'TOGGLE_METAL_TYPE'; payload: string }
  | { type: 'TOGGLE_OCCASION'; payload: string }
  | { type: 'SET_SORT_BY'; payload: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' }
  | { type: 'CLEAR_FILTERS' };

const initialState: FilterState = {
  priceRange: {
    min: 0,
    max: 100000,
  },
  metalType: [],
  occasion: [],
  sortBy: 'name-asc',
};

const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'SET_PRICE_RANGE':
      return {
        ...state,
        priceRange: action.payload,
      };
    
    case 'TOGGLE_METAL_TYPE':
      const updatedMetalTypes = state.metalType.includes(action.payload)
        ? state.metalType.filter(type => type !== action.payload)
        : [...state.metalType, action.payload];
      return {
        ...state,
        metalType: updatedMetalTypes,
      };
    
    case 'TOGGLE_OCCASION':
      const updatedOccasions = state.occasion.includes(action.payload)
        ? state.occasion.filter(occasion => occasion !== action.payload)
        : [...state.occasion, action.payload];
      return {
        ...state,
        occasion: updatedOccasions,
      };
    
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    
    case 'CLEAR_FILTERS':
      return initialState;
    
    default:
      return state;
  }
};

interface FilterContextType {
  state: FilterState;
  setPriceRange: (min: number, max: number) => void;
  toggleMetalType: (type: string) => void;
  toggleOccasion: (occasion: string) => void;
  setSortBy: (sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc') => void;
  clearFilters: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const setPriceRange = (min: number, max: number) => {
    dispatch({ type: 'SET_PRICE_RANGE', payload: { min, max } });
  };

  const toggleMetalType = (type: string) => {
    dispatch({ type: 'TOGGLE_METAL_TYPE', payload: type });
  };

  const toggleOccasion = (occasion: string) => {
    dispatch({ type: 'TOGGLE_OCCASION', payload: occasion });
  };

  const setSortBy = (sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc') => {
    dispatch({ type: 'SET_SORT_BY', payload: sortBy });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  return (
    <FilterContext.Provider value={{
      state,
      setPriceRange,
      toggleMetalType,
      toggleOccasion,
      setSortBy,
      clearFilters,
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
