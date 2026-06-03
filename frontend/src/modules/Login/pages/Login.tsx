import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../common/components/Button/Index";
import { Input } from "../../../common/components/Input/Index";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#131921]">
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingVertical: 20,
        }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header - Back Button */}
        <TouchableOpacity
          className="flex-row items-center mb-8"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-white/60 text-lg mr-2">←</Text>
          <Text className="text-white/60 text-base">Voltar</Text>
        </TouchableOpacity>

        <Text className="text-3xl font-extrabold text-white mb-2">
          Bem-vindo de volta
        </Text>
        <Text className="text-[15px] text-white/60 mb-8">
          Continue estudando de onde parou.
        </Text>

        <Button
          variant="secondary"
          title="Continuar com Google"
          icon={<Text className="text-[#EA4335] font-bold text-lg">G</Text>}
          onPress={() => console.log("Google Login")}
        />

        {/* Divider */}
        <View className="flex-row items-center justify-center my-6">
          <Text className="text-white/40 text-sm">ou</Text>
        </View>

        <Input
          label="E-mail"
          placeholder="voce@exemplo.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Senha"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Submit Button */}
        <View className="mt-4">
          <Button
            title="Entrar"
            onPress={() => console.log("Login", { email, password })}
          />
        </View>

        <View className="flex-row items-center justify-center mt-8 pb-8">
          <Text className="text-white/60 text-sm mr-1">Não tem conta?</Text>
          <TouchableOpacity>
            <Text className="text-[#FF9900] text-sm font-bold">
              Criar conta
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
