import { Button } from "react-native-paper";
import React, {useState, useEffect } from "react";
import { View, Text, FlatList, TextInput } from "react-native";

export default function PagePedido(navigation){
    const [pedidos, setPedidos] = useState([]);
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  const API_URL = "http://10.0.2.2:3000/api/pedidos"; // ajuste conforme seu ambiente

  // Listar pedidos
  const fetchPedidos = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPedidos(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Criar pedido
  const createPedido = async () => {
    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cliente_id: 1,
          produto,
          quantidade: Number(quantidade),
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
        placeholder="Produto"
        value={produto}
        onChangeText={setProduto}
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <TextInput
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 5 }}
      />
      <Button title="Adicionar Pedido" onPress={createPedido} />
    </View>
  );


}
