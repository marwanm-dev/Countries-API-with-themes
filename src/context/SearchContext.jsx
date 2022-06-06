import { createContext, useContext, useState } from 'react';
import useNonInitialEffect from '../hooks/use-non-initial-effect';
import DataContext from './DataContext';
import useInput from '../hooks/use-input';

const SearchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const { response, setOriginalData } = useContext(DataContext);
  // const [searchedName, setSearchedName] = useState('');
  const [search, resetSearch, searchAttrs] = useInput('');
  const [filteredRegion, setFilteredRegion] = useState('');

  //! loops between setting searchedName & filteredRegion resulting in not activating either one of them
  useNonInitialEffect(() => {
    // setSearchedName('');
    setOriginalData(response.data.filter(countryData => countryData.region === filteredRegion));
  }, [filteredRegion]);

  useNonInitialEffect(() => {
    // setFilteredRegion('');
    setOriginalData(
      response.data.filter(countryData => countryData.name.official.includes(search))
    );
  }, [search]);

  //* Do not change this useEffect's order!
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
