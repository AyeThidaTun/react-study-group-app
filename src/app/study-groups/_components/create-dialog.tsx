import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  children: React.ReactNode;
};

export default function CreateDialog({ children }: Props) {
  return (
    <section className="">
      <Dialog>
        <form>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="pb-6">Create a New Group</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 space-y-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Group icon</Label>
                <Input
                  id="name-1"
                  name="groupIcon"
                  type="file"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name-1">Group name</Label>
                <Input
                  id="name-1"
                  name="groupName"
                  placeholder="Enter group name"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Max number of group members</Label>
                <Input
                  type="number"
                  id="username-1"
                  name="maxMember"
                  placeholder="Enter max number of group members"
                />
              </div>
            </div>
            <DialogFooter className="flex flex-row justify-end gap-2 pt-6">
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <Button type="submit" variant="user">Create</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </section>
  );
}
