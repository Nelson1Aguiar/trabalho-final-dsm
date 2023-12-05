import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicial from "./telas/TelaInicial";
import TelaLogin from "./telas/TelaLogin";
import telaFormularioLivro from "./telas/TelaFormularioLivro";

const RotasApp = createNativeStackNavigator();

export default function Rotas(){
  return (
    <NavigationContainer >
      <RotasApp.Navigator>
        <RotasApp.Screen options={{ headerShown: false }} name="telaLogin" component={TelaLogin} />
        <RotasApp.Screen options={{ headerShown: false }} name="telaFormularioLivro" component={telaFormularioLivro} />
        <RotasApp.Screen options={{ headerShown: false }} name="telaInicial" component={TelaInicial} />
      </RotasApp.Navigator>
    </NavigationContainer>
  )
}