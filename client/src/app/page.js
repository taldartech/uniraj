import Image from "next/image";
import styles from "./page.module.css";
import AboutSection from "@/components/AboutSection";
import UpcomingEvent from "@/components/UpcomingEvent";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <AboutSection />
      <UpcomingEvent />
    </main>
  );
}
