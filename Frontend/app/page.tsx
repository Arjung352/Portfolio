import About from "@/components/FixedSection/About";
export default function Home() {
  return (
    <div>
      <div className="lg:fixed lg:w-2/5 h-screen p-8 lg:p-12 lg:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]"><About/></div>
    </div>
  );
}
