import React from "react";
import { styled, theme } from "../../styles";
import { Logo } from "../Logo";


const StyledHeader = styled("header", {
    width: '100vw',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    background: theme.colors.gray700,
})

export function Header(){
    return(
        <StyledHeader>
            <Logo />
        </StyledHeader>
    )
}