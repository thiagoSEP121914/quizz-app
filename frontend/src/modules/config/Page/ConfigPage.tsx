import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScreenLayout } from "../../../common/components/layout/ScreenLayout"; // Ajuste o caminho

const SectionTitle = ({ title }: { title: string }) => (
  <Text className="text-[11px] font-bold tracking-widest text-[#FF9900] uppercase mt-6 mb-3 ml-2">
    {title}
  </Text>
);

// Linha individual de configuração
const SettingsRow = ({
  icon,
  title,
  rightElement,
  isLast = false,
  onPress,
}: any) => {
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      activeOpacity={0.7}
      onPress={onPress}
      className={`flex-row items-center justify-between py-4 ${!isLast ? "border-b border-white/5" : ""}`}
    >
      <View className="flex-row items-center">
        <Ionicons
          name={icon}
          size={20}
          color="#9CA3AF"
          style={{ marginRight: 12 }}
        />
        <Text className="text-[15px] font-medium text-white">{title}</Text>
      </View>
      <View>{rightElement}</View>
    </Component>
  );
};

// --- COMPONENTE PRINCIPAL ---

export const Settings = () => {
  // Estados para os botões de Ligar/Desligar (Switch)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkThemeEnabled, setDarkThemeEnabled] = useState(true);

  return (
    <ScreenLayout subtitle="Perfil" title="Ajustes">
      {/* CARTÃO DE PERFIL */}
      <View className="flex-row items-center rounded-2xl border border-white/5 bg-[#151A22] p-4 mt-2">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-[#FF9900]/20 border border-[#FF9900] mr-4">
          <Text className="text-[15px] font-bold text-[#FF9900]">VC</Text>
        </View>
        <View className="flex-1">
          <Text className="text-lg font-bold text-white mb-0.5">Você</Text>
          <Text className="text-[12px] text-white/50">
            cloud.practitioner@aws.dev
          </Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[13px] font-bold text-[#FF9900]">Editar</Text>
        </TouchableOpacity>
      </View>

      {/* SEÇÃO: PREFERÊNCIAS */}
      <SectionTitle title="Preferências" />
      <View className="rounded-2xl border border-white/5 bg-[#151A22] px-4">
        <SettingsRow
          icon="notifications-outline"
          title="Notificações"
          rightElement={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#3f3f46", true: "#FF9900" }}
              thumbColor="#ffffff"
            />
          }
        />
        <SettingsRow
          icon="moon-outline"
          title="Modo escuro"
          rightElement={
            <Switch
              value={darkThemeEnabled}
              onValueChange={setDarkThemeEnabled}
              trackColor={{ false: "#3f3f46", true: "#FF9900" }}
              thumbColor="#ffffff"
            />
          }
        />
        <SettingsRow
          icon="globe-outline"
          title="Idioma"
          isLast={true}
          rightElement={
            <Text className="text-[13px] text-white/50">Português</Text>
          }
        />
      </View>

      {/* SEÇÃO: CONTA */}
      <SectionTitle title="Conta" />
      <View className="rounded-2xl border border-white/5 bg-[#151A22] px-4 mb-6">
        <SettingsRow
          icon="shield-checkmark-outline"
          title="Privacidade e segurança"
          onPress={() => {}}
          rightElement={
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          }
        />
        <SettingsRow
          icon="help-circle-outline"
          title="Central de ajuda"
          isLast={true}
          onPress={() => {}}
          rightElement={
            <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
          }
        />
      </View>

      {/* BOTÃO SAIR */}
      <TouchableOpacity
        activeOpacity={0.7}
        className="flex-row items-center justify-center rounded-full border border-white/5 bg-[#151A22] p-4 mb-8"
      >
        <Ionicons
          name="log-out-outline"
          size={20}
          color="#EF4444"
          style={{ marginRight: 8 }}
        />
        <Text className="text-[15px] font-bold text-[#EF4444]">
          Sair da conta
        </Text>
      </TouchableOpacity>

      {/* VERSÃO DO APP */}
      <Text className="text-center text-[11px] text-white/30 mb-4">
        AWS Quiz - v1.0.0
      </Text>
    </ScreenLayout>
  );
};
