import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenLayout } from "../../../common/components/layout/ScreenLayout"; // Ajuste o caminho caso precise

// --- DADOS MOCKADOS ---
const STATS_DATA = [
  {
    id: 1,
    title: "Precisão geral",
    value: "80%",
    icon: "disc-outline",
    iconColor: "#FF9900",
  },
  {
    id: 2,
    title: "Evolução 7d",
    value: "+12%",
    icon: "trending-up",
    iconColor: "#00C853",
  },
  {
    id: 3,
    title: "Acertos",
    value: "248",
    icon: "checkmark-circle-outline",
    iconColor: "#00C853",
  },
  {
    id: 4,
    title: "Erros",
    value: "62",
    icon: "close-circle-outline",
    iconColor: "#FF3B30",
  },
] as const;

const DOMAIN_STATS = [
  { id: 1, name: "Conceitos de Nuvem", score: 92 },
  { id: 2, name: "Segurança e Compliance", score: 74 },
  { id: 3, name: "Tecnologia e Serviços", score: 81 },
  { id: 4, name: "Faturamento e Preços", score: 65 },
  { id: 5, name: "Infraestrutura Global", score: 88 },
];

// --- FUNÇÕES E COMPONENTES AUXILIARES ---

// Retorna a cor da barra dependendo da nota
const getScoreColor = (score: number) => {
  if (score >= 80) return "#00C853"; // Verde
  if (score >= 70) return "#FF9900"; // Laranja
  return "#FF3B30"; // Vermelho
};

// Componente para os 4 cards superiores
const StatCard = ({ title, value, icon, iconColor }: any) => (
  <View className="w-[48%] rounded-2xl border border-white/5 bg-[#151A22] p-4 mb-4">
    <Ionicons
      name={icon}
      size={18}
      color={iconColor}
      style={{ marginBottom: 8 }}
    />
    <Text className="text-[12px] font-medium text-white/50 mb-1">{title}</Text>
    <Text className="text-2xl font-bold text-white">{value}</Text>
  </View>
);

// Componente para a linha de cada domínio
const DomainProgressBar = ({
  name,
  score,
}: {
  name: string;
  score: number;
}) => {
  const barColor = getScoreColor(score);

  return (
    <View className="mb-5">
      <View className="flex-row justify-between mb-1.5">
        <Text className="text-[13px] font-bold text-white/90">{name}</Text>
        <Text className="text-[13px] font-bold text-white">{score}%</Text>
      </View>
      <View className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <View
          className="h-full rounded-full"
          style={{ width: `${score}%`, backgroundColor: barColor }}
        />
      </View>
    </View>
  );
};

// --- COMPONENTE PRINCIPAL ---

export const Perfomance = () => {
  return (
    <ScreenLayout subtitle="Análise" title="Seu desempenho">
      {/* GRID DE MÉTRICAS (2 Colunas) */}
      <View className="flex-row flex-wrap justify-between mb-2">
        {STATS_DATA.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </View>

      {/* CARTÃO: DESEMPENHO POR DOMÍNIO */}
      <View className="rounded-2xl border border-white/5 bg-[#151A22] p-5 mb-6">
        <View className="flex-row justify-between items-center mb-6">
          <Text className="text-[15px] font-bold text-white">Por domínio</Text>
          <Text className="text-[11px] text-white/40">Últimos 30 dias</Text>
        </View>

        {DOMAIN_STATS.map((domain) => (
          <DomainProgressBar
            key={domain.id}
            name={domain.name}
            score={domain.score}
          />
        ))}
      </View>

      {/* CARTÃO: ATIVIDADE DA SEMANA */}
      <View className="rounded-2xl border border-white/5 bg-[#151A22] p-5 mb-6 min-h-[140px]">
        <Text className="text-[15px] font-bold text-white mb-6">
          Atividade da semana
        </Text>

        {/* Gráfico base (Dias da semana) */}
        <View className="flex-1 justify-end">
          <View className="flex-row justify-between items-end px-2">
            {["S", "T", "Q", "Q", "S", "S", "D"].map((day, i) => (
              <View key={i} className="items-center">
                {/* Aqui entrarão as barrinhas dinâmicas de progresso futuramente */}
                <View className="w-1.5 h-1 rounded-full bg-white/10 mb-2" />
                <Text className="text-[10px] text-white/30">{day}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};
