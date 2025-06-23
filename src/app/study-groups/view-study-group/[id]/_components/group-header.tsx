"use client";
import { allGroups } from "@/app/study-groups/_components/dummy-data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import JoinDialog from "@/app/study-groups/_components/join-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Header() {
  const group = allGroups[1];
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="pt-10 pb-5">
      <div className="flex md:flex-row md:items-center items-start md:justify-between md:gap-2 h-full gap-20">
        <section className="flex items-center md:justify-between md:gap-10 gap-5">
          <Image
            src={group.image}
            alt={`${group.name} avatar`}
            className="border rounded-full"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-medium md:text-nowrap">{group.name}</h1>
            <h3 className="">{group.noOfMembers} Members</h3>
          </div>
        </section>
        <div className="hidden md:flex flex-row space-x-4">
          <JoinDialog id={group.id}>
            <Button size="lg" variant="user">
              Join
            </Button>
          </JoinDialog>
          <Button size="lg" variant="outline">
            Report
          </Button>
        </div>
        <div className="md:hidden pt-5">
          <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="p-0">
                <Icon icon="charm:menu-kebab" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={(e) => {
                  e.preventDefault();
                  setDropdownOpen(false);
                  setTimeout(() => {
                    setDialogOpen(true);
                  }, 0);
                }}
              >
                Join
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  alert("Reported!");
                  setDropdownOpen(false);
                }}
              >
                Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <JoinDialog
            id={group.id}
            open={dialogOpen}
            onOpenChange={setDialogOpen}
          />
        </div>
      </div>
    </section>
  );
}
