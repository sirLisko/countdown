import { memo } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputForm } from "./Form";

export const DialogCloseButton = memo(() => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create your countdown</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create your countdown</DialogTitle>
          <DialogDescription hidden>
            Make your personalised countdown
          </DialogDescription>
        </DialogHeader>
        <InputForm />
      </DialogContent>
    </Dialog>
  );
});
