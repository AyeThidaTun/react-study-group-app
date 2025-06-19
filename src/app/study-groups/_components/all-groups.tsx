import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Groups() {
  const groups = [
    {
      id: 1,
      name: "Computer Science Group",
      image: "/image/avatar.jpg",
      noOfMembers: "2",
    },
    {
      id: 2,
      name: "Design Enthusiasts",
      image: "/image/avatar.jpg",
      noOfMembers: "10",
    },
    {
      id: 3,
      name: "Math Group",
      image: "/image/avatar.jpg",
      noOfMembers: "10",
    },
    {
      id: 4,
      name: "AI Researchers",
      image: "/image/avatar.jpg",
      noOfMembers: "8",
    },
    {
      id: 5,
      name: "Physics Group",
      image: "/image/avatar.jpg",
      noOfMembers: "8",
    },
    {
      id: 6,
      name: "Chemistry Group",
      image: "/image/avatar.jpg",
      noOfMembers: "14",
    },
    {
      id: 7,
      name: "Computer Science Group",
      image: "/image/avatar.jpg",
      noOfMembers: "14",
    },
    {
      id: 8,
      name: "Interest Group",
      image: "/image/avatar.jpg",
      noOfMembers: "2",
    },
    {
      id: 9,
      name: "Hobby Group",
      image: "/image/avatar.jpg",
      noOfMembers: "7",
    },
    {
      id: 10,
      name: "Python Enthusiasts",
      image: "/image/avatar.jpg",
      noOfMembers: "7",
    },
  ];

  return (
    <section className="">
      <h2 className="flex items-center text-xl font-bold py-7">All Groups</h2>
      <div className="grid grid-cols-4 gap-6 pb-10">
        {groups.map((group) => (
          <Card key={group.id}>
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
                  <Button variant="link" size="sm">
                  View
                </Button>
                <Button variant="secondary" size="sm">
                  Join
                </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
