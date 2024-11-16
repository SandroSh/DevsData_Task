import { characterType } from '../../types'
import GalaxyIcon from '../../assets/galaxy.svg'
import Card from '../Card/Card'
import { CardsContainer, LoaderContainer } from './CardList.style'


const CardList = ({ data, isLoading }: { data: characterType[], isLoading: boolean }) => {

    return (
        <CardsContainer>
            {
                !isLoading && data?
                    data.map((character, index) => (<Card character={character} id={index}  key={index}/>))
                    :
                    (<LoaderContainer>
                        <img src={GalaxyIcon} alt="Galaxy icon" />
                        <h2>Please wait, Spaceships arrive soon</h2>
                    </LoaderContainer>
                    )
            }
        </CardsContainer>
    )
}

export default CardList