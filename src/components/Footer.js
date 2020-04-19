import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #0F1116;
    max-height: 95px;
    padding: 30px;
`

const FooterLogo = styled.img`
`

const FooterMenu = styled.div`
`
const Home = styled.link`
`


const Footer = props => (
    <FooterGroup>
        <FooterLogo src={props.footerlogo} />
        <FooterMenu>
            <Home />
        </FooterMenu>
    </FooterGroup>
)

export default Footer