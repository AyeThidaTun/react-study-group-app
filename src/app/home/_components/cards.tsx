import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function Cards() {
  return (
    <section className="grid grid-cols-2">
      <div className="col-span-1">
        <Card>
          <CardContent>
            <div className="col-span-1">
              <Image
                src="/image/pic-banner.png"
                alt="pic"
                className=""
                width={100}
                height={100}
              />
            </div>
            <div className="col-span-5">
              <p>
                <b>Welcome to Studybara</b> — a study group app that helps you
                stay connected with friends while making studying more fun and
                engaging!
                <br />
                <br />
                Join or create study groups, chat with your peers, and stay
                motivated together.👋
                <br />
                With shared goals and gentle reminders, you’ll never feel alone
                in your learning journey.
                <br />
                Track your progress, plan sessions, and celebrate small wins
                with your group.
                <br />
                At Studybara, studying is calm, cozy, and just a little more
                capybara.🌞
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-1"></div>
    </section>
  );
}
