import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={quicksand.variable}>
      <Component {...pageProps} />
    </Layout>
  )
}
