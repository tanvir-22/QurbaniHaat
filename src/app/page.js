import Banner from "@/components/Banner";
import CattleFeature from "@/components/CattleFeature";
import FeturedSection from "../components/FeturedSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <FeturedSection />
        <CattleFeature />
        <Footer />
      </main>
    </div>
  );
}
