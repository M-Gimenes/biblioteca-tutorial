import { db } from "../../../infrastructure/db";

/**
 * O módulo Avaliações é o dono da tabela `avaliacoes`.
 * `numero_registro` é só texto: referência a um livro do Acervo, sem chave
 * estrangeira. Quem garante que o livro existe é o caso de uso, pela porta
 * ConsultaDeAcervo.
 */
export function createAvaliacaoTables(): void {
  db.run(`
    CREATE TABLE IF NOT EXISTS avaliacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      numero_registro TEXT NOT NULL,
      matricula TEXT NOT NULL,
      nota INTEGER NOT NULL,
      comentario TEXT,
      UNIQUE (numero_registro, matricula)
    );
  `);
}
