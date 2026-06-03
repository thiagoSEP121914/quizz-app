import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Alert } from "react-native";

export default function App() {
  const handleStart = () => {
    Alert.alert("Sucesso!", "Tailwind rodando no Mobile e no Web!");
  };

  return (
    <View className="flex-1 bg-[#131921] items-center justify-center px-6">
      <Text className="text-4xl font-bold text-[#FF9900] mb-2 tracking-wider">
        Star Quizz
      </Text>

      <Text className="text-lg text-white/80 font-medium text-center mb-8">
        Mobile & Browser rodando com Tailwind!
      </Text>

      <TouchableOpacity
        className="bg-[#FF9900] py-4 px-8 rounded-lg w-full max-w-xs items-center active:opacity-90"
        onPress={handleStart}
      >
        <Text className="text-[#131921] text-lg font-bold">
          Iniciar Simulado
        </Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}
