import { createContext, useContext, useState } from 'react';
import useNonInitialEffect from '../hooks/use-non-initial-effect';
import DataContext from './DataContext';
const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const { response, setOriginalData, originalData } = useContext(DataContext);
  const [searchedName, setSearchedName] = useState('');
  const [filteredRegion, setFilteredRegion] = useState('');

  useNonInitialEffect(() => {
    setOriginalData(
      response.data.filter(countryData => {
        if (searchedName && filteredRegion) {
          return (
            countryData.name.official.includes(searchedName) &&
            countryData.region === filteredRegion
          );
        } else if (searchedName && !filteredRegion) {
          return countryData.name.official.includes(searchedName);
        } else if (!searchedName && filteredRegion) {
          return countryData.region === filteredRegion;
        } else {
          return countryData;
        }
      })
    );
  }, [filteredRegion, searchedName]);

  useNonInitialEffect(() => console.log(originalData), [originalData]);

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
