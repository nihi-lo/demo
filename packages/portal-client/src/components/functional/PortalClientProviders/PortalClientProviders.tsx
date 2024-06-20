import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useNavigate } from "react-router-dom";

import { PortalCoreProvider } from "@portal-core/ui";

interface PortalClientProvidersProps {
  children: React.ReactNode;
}

const PortalClientProviders = ({ children }: PortalClientProvidersProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <PortalCoreProvider>
      <NextUIProvider navigate={navigate}>
        <ThemeProvider attribute="class" defaultTheme="system" storageKey="portal-client.theme">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </PortalCoreProvider>
  );
};

export { PortalClientProviders };
