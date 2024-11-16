import { Button, ButtonContainer, ButtonText, CardContainer, CardHeader, IconContainer, IdSpan } from './Card.style'
import CharacterIcon from '../../assets/starWars.svg'
import { characterType } from '../../types'
const Card = ({ character, id }: { character: characterType, id: number }) => {
  return (
    <CardContainer>
      <IdSpan>#{id}</IdSpan>
      <CardHeader>
        <span>{character.name}</span>
      </CardHeader>
      <ButtonContainer>
        <Button>
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