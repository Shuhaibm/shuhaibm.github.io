import styled from 'styled-components';
import profile from "../assets/profile.jpeg"
import { } from "../components/intro"

const Container = styled.div`
    border-radius: 8px;
    background-color: #dfe6e9;
    height: 10vw;
    width: 40vw;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`
const Profile = styled.img`
    border-radius: 50%;
    height: 100%;

`
const Section = styled.div`
  padding: 20px;
`

function Intro() {
    return (
        <div >
            <Section>
                <Container>
                    <Profile src={profile} alt='Shuhaib Mehri' />
                    <h1>Shuhaib Mehri</h1>
                </Container>
            </Section>
        </div>)

}

export default Intro;

