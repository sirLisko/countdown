import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputForm from "./InputForm";
import { Countdown } from "@/types";

const DialogNew = memo(({ defaultValues }: { defaultValues?: Countdown }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild className="block mx-auto">
        <Button variant="outline" onClick={() => setIsEdit(false)}>
          Create your countdown
        </Button>
      </DialogTrigger>
      {defaultValues && (
        <DialogTrigger asChild className="block mx-auto mt-3">
          <Button variant="link" onClick={() => setIsEdit(true)}>
            Edit countdown
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create your countdown</DialogTitle>
          <DialogDescription hidden>
            Make your personalised countdown
          </DialogDescription>
        </DialogHeader>
        <InputForm defaultValues={isEdit ? defaultValues : undefined} />
      </DialogContent>
    </Dialog>
  );
});

export default DialogNew;
