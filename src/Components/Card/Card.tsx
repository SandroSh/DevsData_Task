import { Button, ButtonContainer, ButtonText, CardContainer, CardHeader, IconContainer, IdSpan } from './Card.style'
import CharacterIcon from '../../assets/starWars.svg'
import { characterType } from '../../types'

const Card = ({ character, id ,toggleModal, setCharacter}: { character: characterType, id: number, toggleModal:()=> void, setCharacter:(character: characterType) => void }) => {
  
  const handleClick = () => {
    toggleModal();
    setCharacter(character);
  }
  return (
    <CardContainer>
      <IdSpan>#{id}</IdSpan>
      <CardHeader>
        <span>{character.name}</span>
      </CardHeader>
      <ButtonContainer>
        <Button onClick={handleClick} >
          <IconContainer>
            <img src={CharacterIcon} alt="Star wars character icon" />
          </IconContainer>
          <ButtonText>See Details</ButtonText>
        </Button>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card