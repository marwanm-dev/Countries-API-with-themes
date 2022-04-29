import { createContext, useContext, useState } from 'react';
import useNonInitialEffect from '../hooks/use-non-initial-effect';
import DataContext from './DataContext';
const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const { response, setOriginalData } = useContext(DataContext);
  const [searchedName, setSearchedName] = useState('');
  const [filteredRegion, setFilteredRegion] = useState('');

  //! loops between setting searchedName & filteredRegion resulting in not activating either one of them
  useNonInitialEffect(() => {
    // setSearchedName('');
    setOriginalData(response.data.filter(countryData => countryData.region === filteredRegion));
  }, [filteredRegion]);

  useNonInitialEffect(() => {
    // setFilteredRegion('');
    setOriginalData(
      response.data.filter(countryData => countryData.name.official.includes(searchedName))
    );
  }, [searchedName]);

  //* Do not change this useEffect's order!
  useNonInitialEffect(() => {
    if (!filteredRegion && !searchedName) setOriginalData(response.data);
  }, [filteredRegion, searchedName]);

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
