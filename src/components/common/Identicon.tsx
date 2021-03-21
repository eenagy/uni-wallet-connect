import React  from 'react'
import { useActiveWeb3React } from '../../hooks'
import { Jazzicon } from '@ukstv/jazzicon-react';
import styled from 'styled-components'


const StyledIdenticonContainer = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
`

export function Identicon() {

  const { account } = useActiveWeb3React()

  const seed = account ? parseInt(account.slice(2, 10), 16).toString(): ""
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdenticonContainer >
    <Jazzicon address={seed}/>
  </StyledIdenticonContainer>
}