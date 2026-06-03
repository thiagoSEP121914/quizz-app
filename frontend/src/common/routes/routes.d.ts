export type RootStackParamList = {
  StartPage: undefined;
  Login: undefined;
  Home: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
