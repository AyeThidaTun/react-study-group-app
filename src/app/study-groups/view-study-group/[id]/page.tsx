import BackButton from "@/components/ui/back-button";
import Header from "./_components/group-header";
import Contents from "./_components/content";

export default function ViewGroups() {
  return (
    <main className="">
      <section className="max-w-5xl mx-auto md:py-10 p-5">
        <BackButton page="Study Groups" href="/study-groups" />
        <Header />
        <Contents />
      </section>
      
    </main>
  );
}
