import { ColorBlock } from "@/components/color-block";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";
import { Hash, ChevronsRight } from "lucide-react";
import { evaluate, emptyBackgrounds } from "@/lib/evaluate-guess";

interface GuessTableProps extends ComponentProps<"table"> {
  colors: string[];
  target: string;
}

const WHITE = "FFFFFF";

function GuessTable({ colors, target, className, ...props }: GuessTableProps) {
  const populateRow = (color: string, i: number) => (
    <GuessRow color={color} target={target} key={i} />
  );
  return (
    <Table className={className} {...props}>
      <TableBody>{colors.map(populateRow)}</TableBody>
    </Table>
  );
}

interface GuessRowProps extends ComponentProps<"tr"> {
  color: string;
  target: string;
}

function GuessRow({ color, target, className, ...props }: GuessRowProps) {
  const chars = color.split("");
  const backgrounds =
    chars.length == 6 ? evaluate(chars, target.split("")) : emptyBackgrounds();

  // extend chars to get "blank" cards
  while (chars.length < 6) {
    chars.push("");
  }

  const populateCell = (char: string, i: number) => (
    <GuessCell char={char as HexChar} background={backgrounds[i]} key={i} />
  );

  return (
    <TableRow className={cn("flex", className)} {...props}>
      <TableCell className="flex-1"></TableCell>

      <TableCell className="size-20 flex items-center justify-center">
        <Hash />
      </TableCell>

      {chars.map(populateCell)}

      <TableCell className="size-20 flex items-center justify-center">
        <ChevronsRight />
      </TableCell>

      <TableCell className="size-20">
        <ColorBlock
          color={color.length == 6 ? color : WHITE}
          className="size-16"
        />
      </TableCell>

      <TableCell className="flex-1"></TableCell>
    </TableRow>
  );
}

type HexChar =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";

interface GuessCellProps extends ComponentProps<"td"> {
  char: HexChar;
  background: string;
}

function GuessCell({ char, background, ...props }: GuessCellProps) {
  return (
    <TableCell className="" {...props}>
      <Card
        className="size-16 text-center text-xl flex items-center justify-center"
        style={{ backgroundColor: "#" + background }}
      >
        {char}
      </Card>
    </TableCell>
  );
}

export { GuessTable, GuessRow, GuessCell };
