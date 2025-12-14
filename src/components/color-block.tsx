import { Card } from "@/components/ui/card";
import { AspectRatio, type AspectRatioProps } from "@radix-ui/react-aspect-ratio";

interface ColorBlockProps extends AspectRatioProps {
  color: string
}

function ColorBlock({ color, ratio = 1 / 1, ...props }: ColorBlockProps) {
  // tailwind needs to know all classes at compile time, so it can't dynamically set color
  // return <AspectRatio ratio={ratio}>
  return <Card style={{ backgroundColor: "#" + color }} {...props} />;
  //</AspectRatio>
}

export { ColorBlock, type ColorBlockProps };
