import { ModalDiv, Close, ContentContainer, Circle, CirclesContainer, InfosContainer, Info, DetailsContainer } from "./Modal.style"
import CloseIcon from '../../assets/Close.svg'
import { characterType, detailsType } from "../../types";
import { useEffect, useState } from "react";
import { fetchData } from "../../fetch";

export const Modal = ({ characterData, onClose, isOpen }: { characterData: characterType, onClose: () => void, isOpen: boolean }) => {
    if (!isOpen) return null;
    const [homeworld, setHomeWorld] = useState<string>('');
    const [isDetailShown, setIsDetailShown] = useState<boolean>(false);
    const [details, setDetails] = useState<detailsType>({ films: [], species: [], starships: [], vehicles: [] });
    useEffect(() => {
        fetchData([characterData.homeworld]).then(result => {
            if (result) setHomeWorld(result[0].name);
        })
    }, [])

    const handleClick = () => {
        for (let k = 0; k < 4; k++) {
            let array: string[] = [...characterData.films];
            let propertyName = 'films'
            switch (k) {
                case 1:
                    array = [...characterData.species]
                    propertyName = 'species'
                    break;
                case 2:
                    array = [...characterData.vehicles]
                    propertyName = 'vehicles'
                    break;
                case 3:
                    array = [...characterData.starships]
                    propertyName = 'starships'
                    break;
            }
            fetchData(array).then(result => {
                if (result && result.length > 0) {
                    setDetails(prevDetails => ({
                        ...prevDetails,
                        [propertyName]: result
                    }));
                }
            });
        }
        setIsDetailShown(!isDetailShown);
    }

    return (
        <ModalDiv onClick={(e) => e.stopPropagation()} >
            <Close src={CloseIcon} onClick={onClose} alt="Close Icon" />
            <ContentContainer>
                <CirclesContainer>
                    <Circle></Circle>
                    <Circle></Circle>
                    <Circle></Circle>
                </CirclesContainer>
                <InfosContainer>
                    {/* It will be better to use map method here, but order and titles have to be 
                    arranged differently to have 'pretty' modal. It needs more resource , so in this case I prefer to left them like that for future visual changes  */}
                    <h2>{characterData.name}</h2>
                    <Info>
                        Birth year: {characterData.birth_year}
                    </Info>
                    <Info>
                        Homeworld: {homeworld || "Homeworld"}
                    </Info>
                    <Info>
                        Gender: {characterData.gender}
                    </Info>
                    <Info>
                        Height: {characterData.height}
                    </Info>
                    <Info>
                        Mass: {characterData.mass}
                    </Info>
                    <Info>
                        Eye color: {characterData.eye_color}
                    </Info>
                    <Info>
                        Hair color: {characterData.hair_color}
                    </Info>
                    <Info>
                        Skin color: {characterData.skin_color}
                    </Info>
                    {
                        isDetailShown &&
                        Object.entries(details).map((item, i) => (
                            <Info key={i}>
                                {item[0]}: {item[1].map(data => item[0] == 'films' ? data.title : data.name).join(", ") || "Not Provided"}
                            </Info>
                        ))

                    }
                </InfosContainer>
                <DetailsContainer>
                    <button onClick={handleClick}>{isDetailShown ? "See Less" : "See More"}</button>
                </DetailsContainer>
            </ContentContainer>
        </ModalDiv >
    )
}


