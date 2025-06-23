import { Icon } from "@iconify/react";
import Link from "next/link";

type Props = {
  page: string;
  href: string;
};

export default function BackButton({ page, href }: Props) {
  return (
    <section className="flex items-center">
      <Link href={href}>
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            <Icon icon="flowbite:arrow-left-outline" />
          </span>
          <span>Back to {page}</span>
        </div>
      </Link>
    </section>
  );
}
