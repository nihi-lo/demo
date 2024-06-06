import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useNavigate } from "react-router-dom";

import { PortalCoreProvider } from "@portal-core/ui";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <PortalCoreProvider>{children}</PortalCoreProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export { Providers };
