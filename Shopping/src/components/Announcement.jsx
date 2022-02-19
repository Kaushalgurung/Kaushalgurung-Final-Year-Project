import styled from 'styled-components'

const Container = styled.div`
    height: 25px;
    background-color: black;
    color: white;
    margin-left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;
const Announcement = () => {
    return (
        <Container>
Deal! Free Delivery on order over Rs.5000 
        </Container>
    )
}

export default Announcement
