import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TopicCard } from "../components/TopicCard"; // Ajuste o caminho conforme sua estrutura
import { ScreenLayout } from "../../../common/components/layout/ScreenLayout";

const DOMAIN_DATA = [
  {
    id: 1,
    title: "Conceitos de Nuvem",
    description: "Fundamentos da computação em nuvem e benefícios da AWS",
    questionsCount: 5,
  },
  {
    id: 2,
    title: "Segurança e Compliance",
    description: "Modelo de responsabilidade compartilhada, IAM e conformidade",
    questionsCount: 5,
  },
  {
    id: 3,
    title: "Tecnologia e Serviços",
    description: "Principais serviços AWS: EC2, S3, RDS, Lambda, VPC",
    questionsCount: 6,
  },
  {
    id: 4,
    title: "Faturamento e Preços",
    description: "Modelos de cobrança, suporte e ferramentas de custo",
    questionsCount: 5,
  },
];

export default function Begin() {
  return (
    <ScreenLayout
      subtitle="AWS Cloud Practitioner"
      title="Escolha um tópico"
      rightElement={
        <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Ionicons name="log-out-outline" size={18} color="white" />
        </TouchableOpacity>
      }
    >
      {/* CARD DE SEQUÊNCIA (STREAK) */}
      <View className="flex-row items-center rounded-2xl border border-[#FF9900]/20 bg-[#FF9900]/10 p-4 mb-6">
        <View className="h-10 w-10 items-center justify-center rounded-full bg-[#FF9900]/20 mr-4">
          <Ionicons name="flame" size={20} color="#FF9900" />
        </View>
        <View>
          <Text className="text-[13px] text-white/60">Sequência de estudo</Text>
          <Text className="text-[15px] font-bold text-white">
            7 dias seguidos · <Text className="text-[#FF9900]">continue!</Text>
          </Text>
        </View>
      </View>

      {/* LISTA DE DOMÍNIOS */}
      {DOMAIN_DATA.map((domain) => (
        <TopicCard
          key={domain.id}
          domainNumber={domain.id}
          title={domain.title}
          description={domain.description}
          questionsCount={domain.questionsCount}
          onPress={() => console.log(`Clicou no domínio ${domain.id}`)}
        />
      ))}
    </ScreenLayout>
  );
}
