import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import ModalProvider from "@/providers/modal-provider";
import StreamClientProvider from "@/providers/StreamClientProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | V-Meets",
    default: "V-Meets",
  },
  description:
    "V-Meets is a cloud-based video conferencing service you can use to virtually meet with others - either by video or audio-only or both!",
  keywords: ["video conferencing", "meetings", "cloud meetings", "chat"],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}>
      <html lang='en'>
        <body className={inter.className}>
          <StreamClientProvider>
            <ModalProvider />
            <Toaster />
            {children}
          </StreamClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
