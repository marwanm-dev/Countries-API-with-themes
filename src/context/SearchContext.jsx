import { createContext, useContext, useState } from 'react';
import useNonInitialEffect from '../hooks/use-non-initial-effect';
import DataContext from './DataContext';
import useInput from '../hooks/use-input';

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const { response, setOriginalData } = useContext(DataContext);
  const [search, resetSearch, searchAttrs] = useInput('');
  const [filteredRegion, setFilteredRegion] = useState('');

  useNonInitialEffect(() => {
    setOriginalData(
      response.data.filter(countryData =>
        filteredRegion === ''
          ? countryData.name.official.toLowerCase().includes(search.toLowerCase())
          : countryData.name.official.includes(search) && countryData.region === filteredRegion
      )
    );
  }, [search, filteredRegion]);

  //* Do not change this useEffect order!
  useNonInitialEffect(() => {
    if (!filteredRegion && !search) setOriginalData(response.data);
  }, [filteredRegion, search]);

  return (
    <SearchContext.Provider
      value={{
        search,
        resetSearch,
        searchAttrs,
        filteredRegion,
        setFilteredRegion,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
