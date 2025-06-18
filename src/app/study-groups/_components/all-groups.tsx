import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Groups() {
  const groups = [
    { id: 1, name: "Computer Science Group", image: "/image/avatar.jpg" },
    { id: 2, name: "Design Enthusiasts", image: "/image/avatar.jpg" },
    { id: 3, name: "Math Group", image: "/image/avatar.jpg" },
    { id: 4, name: "AI Researchers", image: "/image/avatar.jpg" },
    { id: 5, name: "Physics Group", image: "/image/avatar.jpg" },
    { id: 6, name: "Chemistry Group", image: "/image/avatar.jpg" },
    { id: 7, name: "Computer Science Group", image: "/image/avatar.jpg" },
    { id: 8, name: "Interest Group", image: "/image/avatar.jpg" },
    { id: 9, name: "Hobby Group", image: "/image/avatar.jpg" },
    { id: 10, name: "Python Enthusiasts", image: "/image/avatar.jpg" },
  ];

  return (
    <section className="grid grid-cols-4 gap-6 pb-10">
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
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
