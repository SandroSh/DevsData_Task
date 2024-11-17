import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import { apiDataType, characterType } from './types'
import { fetchData } from './fetch'
import { useQuery } from '@tanstack/react-query'
import CardList from './Components/CardList/CardList'
import { useDebounce } from './useDebounce'


function App() {
  const [charactersData, setCharactersData] = useState<characterType[]>([]);
  const [apiData, setApiData] = useState<apiDataType>({ key: 'character', url: 'https://swapi.dev/api/people' });
  // Tanstack query also provides isLoading, but as it was mentioned that more hand written code will be better, 
  // I use Tanstack for caching data
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedValue = useDebounce(searchValue);

  const { data } = useQuery({
    queryKey: [apiData.key],
    queryFn: () => fetchData([apiData.url]),
    initialData: [],
  });

  useEffect(() => {
    if (data && data[0] && data[0].results) {
      setCharactersData(data[0].results);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data])

  useEffect(() => {
    if (debouncedValue.trim() === '') {
      setApiData({ key: 'character', url: 'https://swapi.dev/api/people' });
    } else {
      setApiData({ key: debouncedValue, url: `https://swapi.dev/api/people/?search=${debouncedValue}` });
    }
  }, [debouncedValue]);

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }
  return (
    <>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <Navbar />
      <Search handleSearch={(value: string) => handleSearch(value)} />
      <CardList isLoading={isLoading} data={charactersData} />
    </>
  )
}

export default App
