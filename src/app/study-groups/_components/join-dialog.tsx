import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { allGroups } from "./dummy-data";

type Props = {
  children: React.ReactNode;
  id: string;
};

export default function JoinDialog({ children, id }: Props) {
  const group = allGroups.filter((group) => group.id === id);
  return (
    <section className="">
      <Dialog>
        <form>
          <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent className="max-w-3">
            <DialogHeader>
              <DialogTitle></DialogTitle>
              <DialogDescription className="text-sm font-medium text-black">
                Would you like to request to join {group[0].name}?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="pt-6">
              <DialogClose asChild>
                <Button variant="outline" size="sm">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="user" size="sm">
                Request to join
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </section>
  );
}
