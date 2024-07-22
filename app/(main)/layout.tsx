import type { Metadata } from "next";
import "../globals.css";
import Menu from "@/ui/components/template/Menu";

export const metadata: Metadata = {
  title: "Aplicativo de tarefas",
  description: "Aplicação de tarefas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex w-screen h-screen">
        <Menu/>
        <div className="flex-1 relative overflow-hidden">
          <div className="w-full h-full overflow-auto p-4">
            {children}
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
