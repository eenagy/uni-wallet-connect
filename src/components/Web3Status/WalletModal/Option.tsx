import React from 'react'
import { ExternalLink } from '../../common/ExternalLink'
import Image from 'next/image'
import {
  OptionCardClickable,
  OptionCardLeft,
  HeaderText,
  SubHeader,
  GreenCircle,
  IconWrapper,
} from './Option.syles'

interface Props {
  link?: string | null
  clickable?: boolean
  onClick?: () => void
  color: string
  header: React.ReactNode
  subheader: React.ReactNode | null
  icon: string
  active?: boolean
  id: string
}

export function Option({
  link = null,
  clickable = true,
  onClick,
  header,
  icon,
  active = false,
  id,
  subheader
}: Props) {
  const content = (
    <OptionCardClickable id={id} onClick={onClick} clickable={clickable && !active} active={active}>
      <OptionCardLeft>
        <HeaderText>
          {active && <GreenCircle />}
          {header}
        </HeaderText>
        {subheader && <SubHeader>{subheader}</SubHeader>}
      </OptionCardLeft>
      <IconWrapper>
        <Image src={icon} alt={'Icon'} width="24px" height="24px" />
      </IconWrapper>
    </OptionCardClickable>
  )
  if (link) {
    return <ExternalLink href={link}>{content}</ExternalLink>
  }

  return content
}
