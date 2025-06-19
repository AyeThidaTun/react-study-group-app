import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";

export default function JoinedGroups() {
  const joinedGroups = [
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
  ];

  return (
    <section className="py-5">
      <h1 className="text-xl font-bold pb-5">Your Groups</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {joinedGroups.map((group, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="">
                <Card key={group.id} className="py-3">
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={group.image}
                          alt={`${group.name} avatar`}
                          className="border rounded-full"
                          width={50}
                          height={50}
                        />
                        <p className="text-md p-3">{group.name}</p>
                      </div>
                      {/* <Button variant="ghost" size="sm">
                        View
                      </Button> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="outline" />
        <CarouselNext variant="outline" />
      </Carousel>
    </section>
  );
}
