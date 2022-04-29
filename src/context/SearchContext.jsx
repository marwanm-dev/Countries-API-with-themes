import { createContext, useContext, useState } from 'react';
import useNonInitialEffect from '../hooks/use-non-initial-effect';
import DataContext from './DataContext';
const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const { response, setOriginalData, originalData } = useContext(DataContext); //! Remove originalData
  const [searchedName, setSearchedName] = useState('');
  const [filteredRegion, setFilteredRegion] = useState('');

  useNonInitialEffect(() => {
    setSearchedName('');
    setOriginalData(response.data.filter(countryData => countryData.region === filteredRegion));
  }, [filteredRegion]);

  useNonInitialEffect(() => {
    setFilteredRegion('');
    setOriginalData(
      response.data.filter(countryData => countryData.name.official.includes(searchedName))
    );
  }, [searchedName]);

  useNonInitialEffect(() => {
    if (!filteredRegion && !searchedName) setOriginalData(response.data);
  }, [filteredRegion, searchedName]);

  useNonInitialEffect(() => console.log(originalData), [originalData]); //! Remove

  return (
    <SearchContext.Provider
      value={{
        searchedName,
        setSearchedName,
        filteredRegion,
        setFilteredRegion,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
