import { characterType } from '../../types'
import GalaxyIcon from '../../assets/galaxy.svg'
import Card from '../Card/Card'
import { CardsContainer, LoaderContainer } from './CardList.style'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'


const CardList = ({ data, isLoading }: { data: characterType[], isLoading: boolean }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeCharacter, setActiveCharacter] = useState<characterType>();
   
    return (
        <>
            <CardsContainer>
                {
                    !isLoading && data ?
                        data.map((character, index) => (<Card character={character} id={index} key={index} toggleModal={() => setIsModalOpen(!isModalOpen)} setCharacter={(character:characterType) => setActiveCharacter(character) } />))
                        :
                        (<LoaderContainer>
                            <img src={GalaxyIcon} alt="Galaxy icon" />
                            <h2>Please wait, Spaceships arrive soon</h2>
                        </LoaderContainer>
                        )
                }
            </CardsContainer>
            <Modal characterData={activeCharacter as characterType} onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
        </>
    )
}

export default CardList