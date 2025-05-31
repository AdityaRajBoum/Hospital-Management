import { Container } from '@chakra-ui/react'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'


export default function MainArea() {
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Sidebar />
      <Content />
    </Container>
  )
}