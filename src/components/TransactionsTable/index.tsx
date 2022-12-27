import React, { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function Transaction() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desenvolvimento de web site</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>26/12/2022</td>
          </tr>
          <tr>
            <td className="title">Desenvolvimento de web site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>26/12/2022</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw">R$-1.100</td>
            <td>casa</td>
            <td>26/12/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
