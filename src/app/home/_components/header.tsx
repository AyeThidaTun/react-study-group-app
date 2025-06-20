import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Header() {
  return (
    <section className="">
      <Card className="mx-2 sm:mx-3">
        <CardContent>
          <section className="grid md:grid-cols-6 grid-cols-1">
            <div className="col-span-1 flex items-center justify-center">
              <Image
                src="/image/pic-banner.png"
                alt="pic"
                className="sm:mr-6"
                width={100}
                height={100}
              />
            </div>
            <div className="col-span-5">
              <p className="font-serif">
                <b>Welcome to Studybara</b> — a study group app that helps you
                stay connected with friends while making studying more fun and
                engaging!
                <br />
                <br />
                Join or create study groups, chat with your peers, and stay
                motivated together.
                <br />
                <br />
                With shared goals and gentle reminders, you’ll never feel alone
                in your learning journey.
                <br />
                At Studybara, studying is calm, cozy, and just a little more
                capybara.
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </section>
  );
}
