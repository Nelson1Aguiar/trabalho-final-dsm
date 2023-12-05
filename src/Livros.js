import { createContext, useContext, useState } from "react";

const ContextoLivro = createContext();

let id = 4;

export function ContextoLivroProvider({ children }) {
  const [livros, setLivros] = useState([
    { id: 1, nome: 'Livro 1', descricao: 'Descrição do Livro 1' },
    { id: 2, nome: 'Livro 2', descricao: 'Descrição do Livro 2' },
    { id: 3, nome: 'Livro 3', descricao: 'Descrição do Livro 3' },
  ]);

  function cadastrarLivro(livroAtualizado) {
    setLivros(livrosAntigos => [...livrosAntigos, { id: ++id, nome: livroAtualizado.nome, descricao: livroAtualizado.descricao }]);
  }

  function atualizarLivro(livroAtualizado) {
    setLivros(livros.map((livro) => {
      if (livro.id === livroAtualizado.id) {
        return livroAtualizado;
      }

      return livro;
    }))
  }

  function removerLivro(idLivro) {
    setLivros(livros.filter((livro) => livro.id !== idLivro))
  }

  function buscarPorId(idLivro) {
    return livros.find((livro) => livro.id === idLivro)
  }

  return (
    <ContextoLivro.Provider value={{ livros, cadastrarLivro, removerLivro, atualizarLivro, buscarPorId }}>
      {children}
    </ContextoLivro.Provider>
  )
}

export function useLivros() {
  const contextoLivros = useContext(ContextoLivro);
  return { ...contextoLivros };
}