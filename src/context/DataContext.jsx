import { createContext, useState } from 'react';
import axios from '../api/countries'; // Axios Instance
import useAxios from '../hooks/use-axios';
import useNonInitialEffect from '../hooks/use-non-initial-effect';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [modifiedData, setModifiedData] = useState([]);
  const [maxFetch, setMaxFetch] = useState(8);
  const [detailedData, setDetailedData] = useState({});

  const { response, error, isLoading, refetch } = useAxios({
    axiosInstance: axios,
    method: 'GET',
  });

  useNonInitialEffect(() => {
    refetch();
  }, []);

  useNonInitialEffect(() => {
    setOriginalData(response?.data);
  }, [response]);

  useNonInitialEffect(() => {
    setData(originalData.slice(0, maxFetch));
  }, [originalData, maxFetch]);

  useNonInitialEffect(() => {
    setModifiedData(
      data
        .map(obj => [
          {
            flag: obj.flags.png,
            name: obj.name.official,
            nativeName: obj.name.nativeName
              ? obj.name.nativeName.length > 1
                ? obj.name.nativeName[0][Object.keys(obj.name.nativeName)[0]].official
                : obj.name.nativeName[Object.keys(obj.name.nativeName)[0]].official
              : 'Not determined',
            population: obj.population,
            region: obj.region,
            subRegion: obj.subregion || 'Not determined',
            capital: (obj.capital && obj.capital[0]) || 'Not determined',
            topLevelDomain: (obj.tld && obj.tld[0]) || 'Not determined',
            currencies: obj.currencies
              ? obj.currencies[Object.keys(obj.currencies)[0]].name
              : 'Not determined',
            borderCountries: obj.borders || 'no border countries',
            languages:
              (obj.languages && [Object.values(obj.languages)].join(',')) || 'Not determined',
          },
        ])
        .flat()
    );
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        originalData,
        response,
        modifiedData,
        error,
        isLoading,
        detailedData,
        setOriginalData,
        setModifiedData,
        setDetailedData,
        setMaxFetch,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
