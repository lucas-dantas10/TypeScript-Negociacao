import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    
    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        const BASE_URL = "http://localhost:8080/dados";
        return fetch(BASE_URL)
            .then((resposta) => resposta.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante)
                })
            })
    }
}