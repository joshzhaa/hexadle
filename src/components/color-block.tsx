import { Card } from "@/components/ui/card";
import {
  AspectRatio,
  type AspectRatioProps,
} from "@radix-ui/react-aspect-ratio";

interface ColorBlockProps extends AspectRatioProps {
  color: string;
}

function ColorBlock({
  color,
  ratio = 1 / 1,
  className,
  ...props
}: ColorBlockProps) {
  // tailwind needs to know all classes at compile time (can't dynamically set color), so we use "style="
  return (
    <div className={className} {...props}>
      <AspectRatio ratio={ratio}>
        <Card
          className="h-full w-full"
          style={{ backgroundColor: "#" + color }}
        />
      </AspectRatio>
    </div>
  );
}

export { ColorBlock, type ColorBlockProps };
