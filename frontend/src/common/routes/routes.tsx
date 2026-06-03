import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./routes.d";
import StartPage from "../pages/startPage.tsx/StartPage";
import Login from "../../modules/Login/pages/Login";
import HomeTabs from "../../modules/Home/pages/HomeTabs";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="StartPage"
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#131921" },
      }}
    >
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeTabs} />
    </Stack.Navigator>
  );
}
