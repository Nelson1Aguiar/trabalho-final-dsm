import React from "react"
import { ContextoLivroProvider } from './src/Livros';

import Rotas from "./src/navegacao";

export default function App() {
  return (
    <ContextoLivroProvider>
      <Rotas />
    </ContextoLivroProvider>
  );
}

