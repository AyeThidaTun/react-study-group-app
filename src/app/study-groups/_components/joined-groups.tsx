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
    <section className="py-5 md:p-0 p-3">
      <h1 className="text-xl font-bold pb-5">Your Groups</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="md:w-full w-3xs mx-auto"
      >
        <CarouselContent>
          {joinedGroups.map((group, index) => (
            <CarouselItem key={index} className="md:basis-1/3 basis-1/2">
              <Card key={group.id} className="h-full py-3">
                <CardContent className="h-full flex flex-col justify-between">
                  <div className="flex md:flex-row flex-col items-center justify-between gap-2 h-full">
                    <div className="flex items-center md:flex-row flex-col text-center md:text-left gap-3">
                      <Image
                        src={group.image}
                        alt={`${group.name} avatar`}
                        className="border rounded-full"
                        width={50}
                        height={50}
                      />
                      <p className="text-sm max-w-[150px] md:text-nowrap">
                        {group.name}
                      </p>
                    </div>
                    {/* You can add a view button or member count here */}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="outline" />
        <CarouselNext variant="outline" />
      </Carousel>
    </section>
  );
}
