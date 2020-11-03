import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://ropsten.etherscan.io/address/0xc2aa3f18462b8130eae6a023050c0437e1870f34"
      >
        AdsNFT Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://uniswap.info"
      >
        Uniswap ADS-ETH
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
