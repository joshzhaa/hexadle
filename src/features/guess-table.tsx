import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { type ComponentProps } from "react";

interface GuessTableProps extends ComponentProps<"table"> {
  colors: string[];
}

function GuessTable({ colors, className, ...props }: GuessTableProps) {
  const populateRow = (color: string) => <GuessRow color={color} />;
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
  const populateCell = (char: string) => <GuessCell char={char as HexChar} />;
  return (
    <TableRow className={className} {...props}>
      {color.split("").map(populateCell)}
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
  return <TableCell>{char}</TableCell>;
}

export { GuessTable, GuessRow, GuessCell };
