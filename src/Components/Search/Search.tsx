import { SearchContainer } from "./Search.style"


const Search = ({handleSearch}:{handleSearch:(value:string) => void}) => {
  return (
    <SearchContainer>
        <input placeholder="Search Character" name="text" type="text"  onChange={(e) => handleSearch(e.target.value)} />
    </SearchContainer>
  )
}

export default Search