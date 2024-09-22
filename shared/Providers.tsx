import { PropsWithChildren } from "react";
import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import { CustomThemeProvider } from "./providers/CustomThemeProvider";

const ProvidersList = [
  ReactQueryProvider,
  CustomThemeProvider
]

export const Providers: React.FC<PropsWithChildren> = ({ children }) => ProvidersList.reduce((acc, Provider) => <Provider>{acc}</Provider>, children);
