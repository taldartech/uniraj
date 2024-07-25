import Image from "next/image";
import styles from "./page.module.css";
import AboutSection from "@/components/AboutSection";
import UpcomingEvent from "@/components/UpcomingEvent";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <UpcomingEvent />
    </main>
  );
}
