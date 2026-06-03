export type RootStackParamList = {
  Login: undefined;
  Quiz: undefined; // Adicione novas telas aqui no futuro se precisarem de parâmetros
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
