import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FeatureCard } from "../../components/Cards/Index";
import { Button } from "../../components/Button/Index";
import { useNavigation } from "@react-navigation/native";

/* ─── Feature card data ───────────────────────────────────── */
const features = [
  {
    icon: "cloud-outline", // Substitui o ☁️
    title: "5 domínios CLF-C02",
    description:
      "Conceitos de nuvem, segurança, tecnologia, faturamento e infraestrutura global.",
  },
  {
    icon: "flash-outline", // Substitui o ⚡
    title: "Explicação imediata",
    description:
      "Veja por que cada alternativa está certa logo após responder.",
  },
  {
    icon: "stats-chart-outline", // Substitui o 📊
    title: "Acompanhe sua melhor nota",
    description: "Histórico salvo por tópico para identificar o que estudar.",
  },
];
/* ─── Login Page ──────────────────────────────────────────── */
export default function StartPage() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<any>();

  const isWide = width >= 600;
  const containerMaxWidth = isWide ? 480 : undefined;

  return (
    <SafeAreaView className="flex-1 bg-[#131921]">
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{ maxWidth: containerMaxWidth, width: "100%" }}
          className="flex-1 px-6 pb-10"
        >
          {/* ── Header ───────────────────────────────── */}
          <View className="flex-row items-center justify-between pt-4 pb-6">
            <View className="flex-row items-center">
              <View className="mr-2 h-9 w-9 items-center justify-center rounded-full bg-[#FF9900]">
                <Text className="text-sm font-extrabold text-[#131921]">
                  AQ
                </Text>
              </View>
              <Text className="text-base font-bold text-white">AWS Quiz</Text>
            </View>

            {/* Entrar link */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Login")}
            >
              <Text className="text-sm font-semibold text-white/80">
                Entrar
              </Text>
            </TouchableOpacity>
          </View>

          {/* ── Badge ────────────────────────────────── */}
          <View className="mb-6 flex-row items-center self-start">
            <View className="mr-2 h-2 w-2 rounded-full bg-[#34D399]" />
            <Text className="text-xs font-semibold text-white/70">
              Certificação CLF-C02
            </Text>
          </View>

          {/* ── Hero text ────────────────────────────── */}
          <View className="mb-4">
            <Text className="text-[28px] font-extrabold leading-[36px] text-white">
              Domine a AWS{" "}
              <Text className="text-[#FF9900] italic">Cloud Practitioner</Text>{" "}
              no celular.
            </Text>
          </View>

          {/* ── Subtitle ─────────────────────────────── */}
          <Text className="mb-8 text-[15px] leading-[22px] text-white/60">
            Quizzes por tópico, explicações detalhadas em cada questão e seu
            progresso salvo na nuvem. Em português.
          </Text>

          {/* ── CTA Button ───────────────────────────── */}
          <Button
            title="Começar grátis →"
            className="mb-10"
            onPress={() => navigation.navigate("Login")}
          />

          <View className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
            {features.map((f, i) => (
              <FeatureCard
                key={i}
                icon={f.icon as any} // Passamos o icon aqui! O 'as any' previne erros chatos de tipagem do TS
                title={f.title}
                description={f.description}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
