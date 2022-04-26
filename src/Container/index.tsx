import { FC, ReactElement } from 'react'
import ContainerStyle from './Container.styled'

interface ContainerProps {
  children?: React.ReactNode
}

const Container: FC<ContainerProps> = ({ children }): ReactElement => {
  return <ContainerStyle>{children}</ContainerStyle>
}
export default Container
