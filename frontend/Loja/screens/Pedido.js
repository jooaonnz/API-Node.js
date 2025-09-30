import { Button } from "react-native-paper";
import React, {useState, useEffect } from "react";
import { View, Text, FlatList, TextInput } from "react-native";

export default function PagePedido(navigation){
    const [pedidos, setPedidos] = useState([]);
  const [produto, setProduto] = useState("");
  const [valor, setValor] = useState("");
  const [clienteId, setClienteId] = useState("");

//revisar todo esse código

  const API_URL = "http://localhost:3000/api-docs"; // ajuste conforme seu ambiente

  // Listar pedidos
  const fetchPedidos = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/pedidos");
      const data = await response.json();
      setPedidos(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Criar pedido
  const createPedido = async () => {
    try {
      await fetch("http://localhost:3000/api/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cliente_id: Number(clienteId),
          produto,
          valor: Number(valor)
        }),
      });
      setProduto("");
      setQuantidade("");
      setValor("");
      fetchPedidos();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Pedidos:</Text>
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.produto} - Qtd: {item.quantidade} - R$: {item.valor}</Text>
        )}
      />

      <TextInput
        placeholder="Nome"
        value={produto}
        onChangeText={setProduto}
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Valor"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Id do cliente"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <Button mode='contained' title="Adicionar Pedido" onPress={createPedido}>criar pedido</Button>
    </View>
  );


}
