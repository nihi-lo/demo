import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { useNavigate } from "react-router-dom";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
};

export { Providers };
