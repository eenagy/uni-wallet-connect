import styled from 'styled-components'
import { Box } from 'rebass/styled-components'
import { Text } from 'rebass'


export const Card = styled(Box)<{ width?: string; padding?: string; border?: string; borderRadius?: string }>`
  width: ${({ width }) => width ?? '100%'};
  border-radius: 16px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`

export const YellowCard = styled(Card)`
  background-color: rgba(243, 132, 30, 0.05);
  color: ${({ theme }) => theme.yellow2};
  font-weight: 500;
`

export const HeaderFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
`

export const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;
`

export const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

   ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row-reverse;
     align-items: center;
   `};
`

export const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
`

export const HideSmall = styled.span`
   ${({ theme }) => theme.mediaWidth.upToSmall`
     display: none;
   `};
`

export const NetworkCard = styled(YellowCard)`
  border-radius: 12px;
  padding: 8px 12px;
   ${({ theme }) => theme.mediaWidth.upToSmall`
     margin: 0;
     margin-right: 0.5rem;
     width: initial;
     overflow: hidden;
     text-overflow: ellipsis;
     flex-shrink: 1;
   `};
`


export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
     stroke: ${({ theme }) => theme.text1};
  }
`

export const BalanceText = styled(Text)`
   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
     display: none;
   `};
`
