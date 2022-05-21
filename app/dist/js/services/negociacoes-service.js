import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        const BASE_URL = "http://localhost:8080/dados";
        return fetch(BASE_URL)
            .then((resposta) => resposta.json())
            .then((dados) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map