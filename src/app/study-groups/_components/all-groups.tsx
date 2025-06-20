import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { allGroups } from "./dummy-data";
import JoinDialog from "./join-dialog";

export default function Groups() {
  const groups = allGroups;

  return (
    <section className="md:p-0 p-3">
      <h2 className="flex items-center text-xl font-bold py-7">All Groups</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 pb-10">
        {groups.map((group) => (
          <Card key={group.id} className="">
            <CardContent>
              <div className="flex flex-col items-center">
                <Image
                  src={group.image}
                  alt={`${group.name} avatar`}
                  className="border rounded-full"
                  width={100}
                  height={100}
                />
                <p className="text-md pt-5">{group.name}</p>
                <p className="text-xs pb-5">{group.noOfMembers} Members</p>
                <div className="flex items-center space-x-2">
                  <Button variant="link" size="sm" id={group.id}>
                    View
                  </Button>
                  <JoinDialog id={group.id}>
                    <Button variant="secondary" size="sm">
                      Join
                    </Button>
                  </JoinDialog>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
