import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { deDE } from "@clerk/localizations";
import { cn } from "@/lib/utils";
import Navigation from "@/components/Navigation/Navigation";
import { Providers } from "./providers";
import Link from "next/link";
import Head from "next/head";
import { useTheme } from 'next-themes'

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
});

const APP_NAME = "Yournal";
const APP_DEFAULT_TITLE = "Yournal - mehr als nur ein Tagebuch";
const APP_TITLE_TEMPLATE = "%s - Yournal";
const APP_DESCRIPTION = "Yournal";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: neobrutalism }} localization={deDE}>
      {/* <Head>
        <meta name="theme-color" content='#000000'></meta>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FAFAFA"></meta>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000"></meta>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"></meta>
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta name="color-scheme" content="dark light"></meta>
      </Head> */}
      <html
        lang="de"
        className="h-full overflow-y-scroll"
        suppressHydrationWarning
      >
        <body
          className={cn(
            "h-full min-h-fit bg-white font-space text-neutral-900 antialiased dark:bg-neutral-900 dark:text-neutral-50 overflow-x-hidden",
            space_grotesk.variable,
          )}
        >
          <Providers>
            <header className="absolute left-0 right-0 top-0">
              <Navigation></Navigation>
            </header>
            {children}
            {/* <footer className="fixed bottom-0 left-0 flex gap-6 text-neutral-400 dark:text-neutral-600 dark:bg-neutral-900 justify-center items-center py-2 bg-neutral-100 right-0">
              <Link href={"/datenschutz"}>Datenschutz</Link>
              <Link href={"/nutzungsbedingungen"}>Nutzungsbedingungen</Link>
            </footer> */}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
