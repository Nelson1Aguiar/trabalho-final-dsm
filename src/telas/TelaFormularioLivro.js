import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useLivros } from "../Livros";

export function TelaFormularioLivro() {
  const rota = useRoute();
  const parametros = rota.params;

  const navegacao = useNavigation();

  const { buscarPorId, atualizarLivro, cadastrarLivro } = useLivros();

  const [nomeLivro, setNomeLivro] = useState("");
  const [descricaoLivro, setDescricaoLivro] = useState("");

  function salvar(){
    if(parametros.idLivro){
      atualizarLivro({
        id: parametros.idLivro,
        nome: nomeLivro,
        descricao: descricaoLivro
      })
    }else{
      cadastrarLivro({
        nome: nomeLivro,
        descricao: descricaoLivro
      })
    }

    navegacao.navigate("telaInicial");
  }


  useEffect(() => {
    if (parametros.idLivro) {
      const livro = buscarPorId(parametros.idLivro);

      if(!livro){
        navegacao.goBack();
        return;
      }

      setNomeLivro(livro.nome);
      setDescricaoLivro(livro.descricao);

    } else {
      setNomeLivro("");
      setDescricaoLivro("");
    }
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{parametros.idLivro ? "Atualizar Livro" : "Cadastrar Livro"}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do livro"
        value={nomeLivro}
        onChangeText={setNomeLivro}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição do livro"
        value={descricaoLivro}
        onChangeText={setDescricaoLivro}
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>Salvar Informções</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  botao: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: "white",
    textAlign: "center",
  },
});

export default TelaFormularioLivro;
