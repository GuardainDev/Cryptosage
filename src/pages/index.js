import { Inter } from "next/font/google";
import ComingSoon from "@/component/coming-soon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
