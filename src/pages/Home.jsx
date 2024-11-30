import AnimationWrapper from "@/components/AnimationWrapper";
import Hero from "@/components/Home/Hero";
import Highlights from "@/components/Home/Highlights";
import ParticipatingColleges from "@/components/Home/ParticipatingColleges";
import Stats from "@/components/Home/Stats";
import Unplugged from "@/components/Home/Unplugged";

function Home() {
  return (
    <AnimationWrapper title="NMC MUN">
      <div className="min-h-screen w-full bg-black">
        <Hero />
        <Stats />
        <Highlights />
        <Unplugged />
        <ParticipatingColleges />
      </div>
    </AnimationWrapper>
  );
}

export default Home;
