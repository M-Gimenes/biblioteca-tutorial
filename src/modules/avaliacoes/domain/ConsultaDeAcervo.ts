/** Port de saída: o que Avaliações precisa saber do Acervo. */
export interface ConsultaDeAcervo {
  existeNumeroRegistro(numeroRegistro: string): boolean;
}
