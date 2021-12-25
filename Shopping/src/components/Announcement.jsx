import styled from 'styled-components'

const Container = styled.div`
    height: 25px;
    background-color: black;
    color: white;
    margin-left: 0px;
`;
const Deal = styled.div`
    margin-left: 800px;
    display: flex; 
`
const Announcement = () => {
    return (
        <Container>
            <Deal>Deal! Free Delivery on order over Rs.5000 </Deal>
        </Container>
    )
}

export default Announcement
