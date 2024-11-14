import { MainContainer, MainIcon } from "./Navbar.style"
import UniverseIcon from '../../assets/universe.svg'
import GithubIcon from '../../assets/github.svg'

const Navbar = () => {
    return (
        <MainContainer>
            <MainIcon src={UniverseIcon} alt="Universe Icon" />
            <a href="https://github.com/SandroSh/DevsData_Task" target="_blank"><img src={GithubIcon} alt="Github Icon" /></a>
        </MainContainer>
    )
}

export default Navbar