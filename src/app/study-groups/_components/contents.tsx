import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import CreateDialog from "./create-dialog";
import { Input } from "@/components/ui/input";

export default function Contents() {
  return (
    <section className="md:pt-10 md:py-10 md:p-0 px-3 py-5">
      <div className="flex md:justify-between gap-2">
        <div className="relative w-80">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">
            <Icon icon="material-symbols-light:search-rounded" />
          </span>
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-3 py-2"
          />
        </div>
        <CreateDialog>
          <Button variant="user" size="lg">
            <Icon icon="ic:round-plus" />
            <span className="hidden md:inline">Create New Group</span>
          </Button>
        </CreateDialog>
      </div>
    </section>
  );
}
