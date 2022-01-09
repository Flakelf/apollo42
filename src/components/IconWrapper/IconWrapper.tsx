import React from 'react'

type IconWrapperProps = {
  className: string
  icon: React.FC
  onClick?: () => void
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  icon: Icon,
  onClick,
  className,
}) => (
  <button className={className} onClick={onClick}>
    <Icon />
  </button>
)

export { IconWrapper }
