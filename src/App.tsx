import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import { characterType } from './types'
import { fetchData } from './fetch'
import { useQuery } from '@tanstack/react-query'
import CardList from './Components/CardList/CardList'


function App() {
  const [charactersData, setCharactersData] = useState<characterType[]>([]);
  // Tanstack query also provides isLoading, but as it was mentioned that more hand written code will be better, I use Tanstack for caching data
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data } = useQuery({
    queryKey: ['character'],
    queryFn: () => fetchData([`https://swapi.dev/api/people`]),
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
  
  const handleSearch = (value:string) => {

  }
  return (
    <>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <Navbar />
      {!isLoading ?
        <Search handleSearch={(value:string) => handleSearch(value)} />
        : null
      }
      <CardList isLoading={isLoading} data={charactersData} />
    </>
  )
}

export default App
