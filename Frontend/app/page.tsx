import About from "@/components/FixedSection/About";
import ScrollableSection from "@/components/ScrollableSection/ScrollableSection";
export default function Home() {
  return (
    <div>
      <div className="lg:fixed z-[9999] lg:w-2/5 h-4/5 p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]">
        <About />
      </div>
      <div className="lg:ml-[40%] z-0 w-full lg:w-3/5 min-h-screen min-w-[300px] max-w-[1200px] mx-auto">
        <main className="p-8 lg:p-12 lg:pr-[10%]">
          <ScrollableSection />
        </main>
      </div>
    </div>
  );
}
