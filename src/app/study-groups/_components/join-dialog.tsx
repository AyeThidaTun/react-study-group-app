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
  children?: React.ReactNode;
  id: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export default function JoinDialog({
  children,
  id,
  open,
  onOpenChange,
}: Props) {
  const group = allGroups.find((group) => group.id === id);
  if (!group) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="text-sm font-medium text-black">
            Would you like to request to join {group.name}?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="pt-6">
          <DialogClose asChild>
            <Button variant="outline" size="sm" className="md:py-0 py-5">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" variant="user" size="sm" className="md:py-0 py-5">
            Request to join
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
