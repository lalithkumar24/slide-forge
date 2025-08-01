"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

function Switch({
  className,
  ref,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-color duration-300 ease-in-out foucs-visibile:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disable:cursor-not-allowed disable:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input relative",
        className,
      )}
      {...props}
      ref={ref}
    >
      {/* Moon Icon (left) */}
      <Moon
        className={cn(
          "h-4 w-4 absolute z-[1000] top-[10px] left-[10px] stroke-gray-600 fill-white transition-opacity duration-300 ease-in-out",
          "data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-0",
        )}
      />

      {/* Sun Icon (right) */}
      <Sun
        className={cn(
          "h-4 w-4 absolute z-[1000] top-[10px] right-[19px] stroke-gray-600 fill-black transition-opacity duration-300 ease-in-out",
          "data-[state=checked]:opacity-0 data-[state=unchecked]:opacity-100",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
