import React from "react";
import { View, Text } from "react-native";
import ResponsiveLayout, {
  TabKey,
} from "../../../common/components/layout/ResponsiveLayout";
import Begin from "../../Begin/pages/Begin"; // Importe a sua página Begin limpa
import Simulators from "../../Simulator/pages/Simulator";
import { Perfomance } from "../../Perfomance/Pages/Perfomance";
import { Ranking } from "../../Ranking/Pages/RankingPage";

export default function HomeTabs() {
  return (
    <ResponsiveLayout>
      {(active: TabKey) => {
        switch (active) {
          case "home":
            return <Begin />;

          case "simulados":
            return <Simulators />;

          case "desempenho":
            return <Perfomance />;

          case "ranking":
            return <Ranking />; // <-- Correção feita aqui: apenas um "<" e sem parênteses extras

          case "ajustes":
            return (
              <View className="p-4">
                <Text className="text-white">Tela de Ajustes</Text>
              </View>
            );

          default:
            return <Begin />;
        }
      }}
    </ResponsiveLayout>
  );
}
