import React, { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { User } from '@phosphor-icons/react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
