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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data } = useQuery({
    queryKey: ['character'],
    queryFn: () => fetchData(`https://swapi.dev/api/people`),
    initialData: [],
  });

  useEffect(() => {
    console.log(data)
    if (data) {
      setCharactersData(data.results);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data])

  return (
    <>
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
      <Navbar />
      {!isLoading ?
        <Search />
        : null
      }
      <CardList isLoading={isLoading} data={charactersData} />


    </>
  )
}

export default App
