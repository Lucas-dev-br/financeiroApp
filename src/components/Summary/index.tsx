import { Container } from "./styles";
import income from "../../assets/dinheiro.png"
import outcome from "../../assets/dinheiro-fiduciario.png"
import saida from "../../assets/sair.png"

export function Summary() {
  return (
    <Container>
        <div>
            <header>
                <p>Entrdas</p>
                <img style={{width: '20px'}} src={income} alt="" />
            </header>
            <strong>R$ 1000,00</strong>
        </div>
        <div>
            <header>
                <p>Saídas</p>
                <img style={{width: '20px'}} src={saida} alt="" />
            </header>
            <strong>R$ 1000,00</strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img style={{width: '20px'}} src={outcome} alt="" />
            </header>
            <strong>R$ 1000,00</strong>
        </div>
    </Container>
  )
}
