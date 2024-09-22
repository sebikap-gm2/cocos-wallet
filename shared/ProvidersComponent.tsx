import { PropsWithChildren } from "react";
import { CustomThemeProvider, ReactQueryProvider, RecoilProvider } from "./providers";

const ProvidersList = [
  RecoilProvider,
  ReactQueryProvider,
  CustomThemeProvider
]

export const ProvidersComponent: React.FC<PropsWithChildren> = ({ children }) => ProvidersList.reduce((acc, Provider) => <Provider>{acc}</Provider>, children);
