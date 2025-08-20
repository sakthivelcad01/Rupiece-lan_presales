import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupiece | Get Funded to Trade Indian Markets",
  description: "Get funded to trade Indian markets (NSE & BSE) with Rupiece. Pass our evaluation, trade our capital, and keep up to 80% of the profits. Start your professional trading journey today.",
  keywords: "proprietary trading, prop firm india, get funded, nse, bse, stock trading, day trading, swing trading, rupiece",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
