import Hero from "@/components/Home/Hero";
import Highlights from "@/components/Home/Highlights";
import ParticipatingColleges from "@/components/Home/ParticipatingColleges";
import Stats from "@/components/Home/Stats";
import Unplugged from "@/components/Home/Unplugged";

function Home() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <Stats />
      <Highlights />
      <Unplugged />
      <ParticipatingColleges />
    </div>
  );
}

export default Home;
