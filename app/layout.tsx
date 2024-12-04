import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import Container from "@/components/shared/container"
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat", 
});

export const metadata: Metadata = {
  title: "TrendCore",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Container>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
