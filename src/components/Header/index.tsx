import logo from '../../assets/logoHeader.png'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>  
        <img style={{width: '50px'}} src={logo} alt="" />
        <button type='button'>
            nova transação
        </button>
      </Content>
    </Container>
  )
}
