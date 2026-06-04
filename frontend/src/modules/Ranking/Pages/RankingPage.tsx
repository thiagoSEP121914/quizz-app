import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ScreenLayout } from "../../../common/components/layout/ScreenLayout";
import { RankingCard } from "../components/Cards/RankingCard"; // <-- Importando o seu componente

// --- DADOS MOCKADOS ---
const RANKING_DATA = [
  {
    id: 1,
    name: "Marina Costa",
    initials: "MC",
    points: 4820,
    precision: "78%",
    isMe: false,
  },
  {
    id: 2,
    name: "Lucas Pereira",
    initials: "LP",
    points: 4710,
    precision: "79%",
    isMe: false,
  },
  {
    id: 3,
    name: "Você",
    initials: "V",
    points: 4560,
    precision: "80%",
    isMe: true,
  },
  {
    id: 4,
    name: "Ana Lima",
    initials: "AL",
    points: 4320,
    precision: "81%",
    isMe: false,
  },
  {
    id: 5,
    name: "Rafael Souza",
    initials: "RS",
    points: 4180,
    precision: "82%",
    isMe: false,
  },
  {
    id: 6,
    name: "Camila Reis",
    initials: "CR",
    points: 3990,
    precision: "78%",
    isMe: false,
  },
  {
    id: 7,
    name: "Tiago Alves",
    initials: "TA",
    points: 3870,
    precision: "79%",
    isMe: false,
  },
];

const PodiumAvatar = ({
  initials,
  isMe,
}: {
  initials: string;
  isMe?: boolean;
}) => (
  <View
    className={`h-10 w-10 items-center justify-center rounded-full mb-2 
    ${isMe ? "bg-[#FF9900]/20 border border-[#FF9900]" : "bg-white/10"}`}
  >
    <Text
      className={`text-[13px] font-bold ${isMe ? "text-[#FF9900]" : "text-white"}`}
    >
      {initials}
    </Text>
  </View>
);

const PodiumBlock = ({ rank, user, heightClass, bgClass }: any) => (
  <View className="items-center flex-1 mx-1">
    <PodiumAvatar initials={user.initials} isMe={user.isMe} />
    <Text className="text-[12px] font-bold text-white mb-0.5" numberOfLines={1}>
      {user.name}
    </Text>
    <Text className="text-[10px] text-white/50 mb-3">{user.points} pts</Text>

    <View
      className={`w-full ${heightClass} ${bgClass} rounded-t-2xl items-center justify-start pt-3`}
    >
      <Text className="text-lg font-bold text-white">{rank}</Text>
    </View>
  </View>
);

export const Ranking = () => {
  const top3 = RANKING_DATA.slice(0, 3);
  const remainingUsers = RANKING_DATA.slice(3); // Do 4º em diante para renderizar abaixo (opcional, pode renderizar todos também)

  return (
    <ScreenLayout subtitle="Competição" title="Ranking semanal">
      <View className="flex-row items-end justify-between mt-4 mb-8 h-48 px-2">
        <PodiumBlock
          rank={2}
          user={top3[1]}
          heightClass="h-24"
          bgClass="bg-zinc-900"
        />
        <PodiumBlock
          rank={1}
          user={top3[0]}
          heightClass="h-32"
          bgClass="bg-[#8c5400]"
        />
        <PodiumBlock
          rank={3}
          user={top3[2]}
          heightClass="h-20"
          bgClass="bg-zinc-900"
        />
      </View>

      <View>
        {RANKING_DATA.map((user, index) => (
          <RankingCard key={user.id} rank={index + 1} user={user} />
        ))}
      </View>
    </ScreenLayout>
  );
};
