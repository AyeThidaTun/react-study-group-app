import Contents from "./_components/contents";
import Groups from "./_components/all-groups";
import JoinedGroups from "./_components/joined-groups";

export default function StudyGroupsPage() {
  return (
    <main className="max-w-5xl mx-auto">
      <Contents />
      <JoinedGroups />
      <Groups/>
    </main>
  );
}
