import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;
const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
`;
const Left =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language =styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContaioner =styled.div`
    border: none;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input =styled.input`
    border: none;
`;

const Center =styled.div`
    flex: 1;
    text-align: center;
`;
const Logo =styled.div`
    font-weight: bolder;
`
const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenueItem =styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`




const Navbar = () => {
    return (
        <Container style={{background:"teal"}}>
            <Wrapper>
                <Left><Language> English</Language>
                <SearchContaioner>
                    <Input></Input>Search
                    <Search style={{color:"none", fontSize:25}}/> 
                </SearchContaioner>
                </Left>
                <Center><Logo> औशधि पसल</Logo></Center>
                <Right>
                    <MenueItem>Register</MenueItem>
                    <MenueItem>Sign-In</MenueItem>
                    <MenueItem> 
                        <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                    </MenueItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
