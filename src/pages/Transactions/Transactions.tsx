import { Header } from "../../components/Header/Header";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { SearchForm } from "./components/SearchForm/iSearchForm";
import { Summary } from "../../components/Summary/Summary";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2020</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="outcome">R$12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2020</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2020</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
