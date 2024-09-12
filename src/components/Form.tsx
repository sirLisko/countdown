import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { CopyIcon } from "@radix-ui/react-icons";
import { createQueryString } from "@/utils/queryString";
import { useState } from "react";
import { Countdown } from "@/types";
import type { Countdown as CountdownType } from "@/types";
import { DialogClose } from "./ui/dialog";

const filters = [
  {
    id: "h",
    label: "Hours",
  },
  {
    id: "m",
    label: "Minutes",
  },
  {
    id: "s",
    label: "Seconds",
  },
] as const;

export function InputForm() {
  const [link, setLink] = useState<string | undefined>("");
  const form = useForm<CountdownType>({
    mode: "onTouched",
    resolver: zodResolver(Countdown),
    defaultValues: {
      message: "",
      filters: [],
      time: "00:00",
    },
  });
  const { toast } = useToast();
  const { isValid } = form.formState;

  function onSubmit(data: CountdownType) {
    if (isValid && data.date) {
      const qs = createQueryString(data as Countdown);
      setLink(`${window.location.origin}/?${qs}`);
    } else {
      setLink(undefined);
    }
  }

  function onCopy() {
    if (!link) return;
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      toast({
        description: "Countdown copied to clipboard",
      });
    }, 0);
  }

  return (
    <Form {...form}>
      <form onChange={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Enter your message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="date"
                  className="flex flex-col justify-center"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="time"
                  className="flex flex-col justify-center"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="filters"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">
                  Add extra countdowns
                </FormLabel>
                <FormDescription>
                  Optional, they will be displayed below the main countdown.
                </FormDescription>
              </div>
              {filters.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="filters"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              console.log(field.value, item.id);
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      {link && (
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" value={link} readOnly />
          </div>
          <DialogClose asChild>
            <Button type="submit" size="sm" className="px-3" onClick={onCopy}>
              <span className="sr-only">Copy</span>
              <CopyIcon className="h-4 w-4" />
            </Button>
          </DialogClose>
        </div>
      )}
    </Form>
  );
}
