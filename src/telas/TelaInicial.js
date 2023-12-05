import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useLivros } from "../Livros";

function TelaInicial() {
  const { livros, removerLivro } = useLivros();
  const navegacao = useNavigation();

  function navegarParaFormulario(idLivro) {
    navegacao.navigate("telaFormularioLivro", { idLivro });
  }

  const renderizarLivro = ({ item }) => (
    <View style={styles.cardLivro}>
      <Text style={styles.titulo}>{item.nome}</Text>
      <Text>{item.descricao}</Text>

      <TouchableOpacity onPress={() => navegarParaFormulario(item.id)} style={[{ backgroundColor: "royalblue" }, styles.botao]}>
        <Text style={{ color: "white" }}>Editar Livro</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removerLivro(item.id)} style={[{ backgroundColor: "red" }, styles.botao]}>
        <Text style={{ color: "white" }}>Excluir Livro</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.tituloTela}>Lista de Livros</Text>

      <TouchableOpacity onPress={() => navegarParaFormulario(null)} style={[{ backgroundColor: "green", marginBottom: 24 }, styles.botao]}>
        <Text style={{ color: "white" }}>Cadastrar Novo Livro</Text>
      </TouchableOpacity>

      <FlatList
        data={livros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderizarLivro}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  tituloTela: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 36
  },
  cardLivro: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  botao: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    padding: 10,
    marginTop: 8
  }
});

export default TelaInicial;
