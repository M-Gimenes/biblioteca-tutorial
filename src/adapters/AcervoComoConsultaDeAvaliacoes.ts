import type { ConsultaDeLivros } from "../modules/acervo";
import type { ConsultaDeAcervo } from "../modules/avaliacoes";

/** Ponte entre os vocabulários: fica fora dos dois módulos. */
export class AcervoComoConsultaDeAvaliacoes implements ConsultaDeAcervo {
  constructor(private readonly livros: ConsultaDeLivros) {}

  existeNumeroRegistro(numeroRegistro: string): boolean {
    return this.livros.existeNumeroRegistro(numeroRegistro);
  }
}
