import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons"
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`;
const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    ${mobile({ padding: "10px 0px" })}
`;
const Left =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language =styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
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
    ${mobile({ width: "50px" })}
`;

const Center =styled.div`
    flex: 1;
    text-align: center;
`;
const Logo =styled.div`
    font-weight: bolder;
    ${mobile({ fontSize: "24px" })}
`
const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenueItem =styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
