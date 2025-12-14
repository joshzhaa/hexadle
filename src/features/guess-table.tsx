import { ColorBlock } from "@/components/color-block";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

interface GuessTableProps extends ComponentProps<"table"> {
  colors: string[];
}

function GuessTable({ colors, className, ...props }: GuessTableProps) {
  const populateRow = (color: string, i: number) => (
    <GuessRow color={color} key={i} />
  );
  return (
    <Table className={className} {...props}>
      <TableBody>{colors.map(populateRow)}</TableBody>
    </Table>
  );
}

interface GuessRowProps extends ComponentProps<"tr"> {
  color: string;
}

function GuessRow({ color, className, ...props }: GuessRowProps) {
  const chars = color.split("");
  while (chars.length < 6) {
    chars.push("");
  }
  const populateCell = (char: string, i: number) => (
    <GuessCell char={char as HexChar} key={i} />
  );
  return (
    <TableRow className={cn("flex", className)} {...props}>
      <TableCell className="size-16 text-center">#</TableCell>
      {chars.map(populateCell)}
      <TableCell className="size-16">
        <ColorBlock
          color={color.length == 6 ? color : "FFFFFF"}
          className="size-16"
        />
      </TableCell>
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
}

function GuessCell({ char, ...props }: GuessCellProps) {
  return (
    <TableCell className="" {...props}>
      <Card className="size-16 text-center">{char}</Card>
    </TableCell>
  );
}

export { GuessTable, GuessRow, GuessCell };
