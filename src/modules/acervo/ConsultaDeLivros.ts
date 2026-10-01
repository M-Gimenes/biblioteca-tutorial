/** Contrato de leitura publicado pelo Acervo, no vocabulário do Acervo. */
export interface ConsultaDeLivros {
  existeNumeroRegistro(numeroRegistro: string): boolean;
}
