import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FeatureCard } from "../../../common/components/Cards/Index";
import { ScreenLayout } from "../../../common/components/layout/ScreenLayout";

const SIMULATIONS_DATA = [
  {
    id: 1,
    title: "Simulado Completo",
    description: "65 questões · 90 min · pontuação real",
    emoji: "🥇",
  },
  {
    id: 2,
    title: "Simulado Rápido",
    description: "20 questões aleatórias para revisão",
    emoji: "⏱️",
  },
  {
    id: 3,
    title: "Foco em Segurança",
    description: "Apenas questões do domínio 2",
    emoji: "🛡️",
  },
  {
    id: 4,
    title: "Foco em Serviços",
    description: "EC2, S3, RDS, Lambda e VPC",
    emoji: "☁️",
  },
];

export default function Simulators() {
  return (
    <ScreenLayout subtitle="Prática" title="Simulados">
      {/* CARD DE ÚLTIMO RESULTADO */}
      <View className="rounded-2xl border border-[#FF9900]/40 bg-[#151A22] p-5 mb-6">
        <Text className="text-[13px] text-white/50 mb-2">Último resultado</Text>
        <View className="flex-row items-end justify-between mb-4">
          <Text className="text-4xl font-bold text-white leading-none">
            82%
          </Text>
          <Text className="text-[13px] font-medium text-[#00C853] mb-1">
            +6% vs anterior
          </Text>
        </View>
        <View className="h-2 w-full flex-row rounded-full bg-white/10 overflow-hidden">
          <View className="h-full w-[82%] rounded-full bg-[#FF9900]" />
        </View>
      </View>

      {/* LISTA DE SIMULADOS */}
      {SIMULATIONS_DATA.map((simulation) => (
        <FeatureCard
          key={simulation.id}
          title={simulation.title}
          description={simulation.description}
          emoji={simulation.emoji}
        />
      ))}
    </ScreenLayout>
  );
}
