import TypeWriter from "./_components/typewriter";
import Header from "./_components/header";
// import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto py-10">
      <TypeWriter />
      <Header />
      {/* <section className="flex justify-center items-center py-6">
        <Button variant="user" size="lg">Start now</Button>
      </section> */}
    </main>
  );
}
