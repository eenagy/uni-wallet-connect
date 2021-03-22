import React, { useContext } from 'react'
import styled from 'styled-components'

import { AlertTriangle, X } from 'react-feather'
import { isMobile } from 'react-device-detect'
import { Web3StatusActions, Web3StatusState } from '../Web3Status.provider'
import {APP_URL} from '../constants'

const PhishAlert = styled.div<{ isActive: any }>`
  width: 100%;
  padding: 6px 6px;
  background-color: ${({ theme }) => theme.blue1};
  color: white;
  font-size: 11px;
  justify-content: space-between;
  align-items: center;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`

export const StyledClose = styled(X)`
  :hover {
    cursor: pointer;
  }
`

export function URLWarning() {
  const {
    application: { URLWarningVisible },
  } = useContext(Web3StatusState)
  const { toggleURLWarning } = useContext(Web3StatusActions)
  const hostnameMatch = process.env.browser ? window.location.hostname === APP_URL : true
  return isMobile ? (
    <PhishAlert isActive={URLWarningVisible}>
      <div style={{ display: 'flex' }}>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> Make sure the URL is
        <code style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }}>{APP_URL}</code>
      </div>
      <StyledClose size={12} onClick={toggleURLWarning} />
    </PhishAlert>
  ) : hostnameMatch ? (
    <PhishAlert isActive={URLWarningVisible}>
      <div style={{ display: 'flex' }}>
        <AlertTriangle style={{ marginRight: 6 }} size={12} /> Always make sure the URL is
        <code style={{ padding: '0 4px', display: 'inline', fontWeight: 'bold' }}>{APP_URL}</code> - bookmark it
        to be safe.
      </div>
      <StyledClose size={12} onClick={toggleURLWarning} />
    </PhishAlert>
  ) : null
}
