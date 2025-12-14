import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface ColorBlockProps extends ComponentProps<"div"> {
  color: string;
}

function ColorBlock({ color, className, ...props }: ColorBlockProps) {
  // tailwind needs to know all classes at compile time (can't dynamically set color), so we use "style="
  return (
    <div className={cn("w-full h-full", className)} {...props}>
      <Card
        className="w-full h-full"
        style={{ backgroundColor: "#" + color }}
      />
    </div>
  );
}

export { ColorBlock, type ColorBlockProps };
