// import Image from "next/image"
//
// import {
//   Item,
//   ItemContent,
//   ItemDescription,
//   ItemGroup,
//   ItemHeader,
//   ItemTitle,
// } from "@/components/ui/item"
//
// const models = [
//   {
//     name: "v0-1.5-sm",
//     description: "Everyday tasks and UI generation.",
//     image:
//       "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
//     credit: "Valeria Reverdo on Unsplash",
//   },
//   {
//     name: "v0-1.5-lg",
//     description: "Advanced thinking or reasoning.",
//     image:
//       "https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop",
//     credit: "Michael Oeser on Unsplash",
//   },
//   {
//     name: "v0-2.0-mini",
//     description: "Open Source model for everyone.",
//     image:
//       "https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop",
//     credit: "Cherry Laithang on Unsplash",
//   },
// ]
//
// export function ItemHeaderDemo() {
//   return (
//     <div className="flex w-full max-w-xl flex-col gap-6">
//       <ItemGroup className="grid grid-cols-3 gap-4">
//         {models.map((model) => (
//           <Item key={model.name} variant="outline">
//             <ItemHeader>
//               <Image
//                 src={model.image}
//                 alt={model.name}
//                 width={128}
//                 height={128}
//                 className="aspect-square w-full rounded-sm object-cover"
//               />
//             </ItemHeader>
//             <ItemContent>
//               <ItemTitle>{model.name}</ItemTitle>
//               <ItemDescription>{model.description}</ItemDescription>
//             </ItemContent>
//           </Item>
//         ))}
//       </ItemGroup>
//     </div>
//   )
// }

import { useState } from "react";
import { Table, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { type ComponentProps } from "react";

function GuessTable({ className, ...props }: ComponentProps<"table">) {
  return (
    <Table
      className={className}
      {...props}
    >
      <TableBody>
        <GuessRow color="123456"/>
        <GuessRow color="123456"/>
        <GuessRow color="654321"/>
      </TableBody>
    </Table>
  );
}

interface GuessRowProps extends ComponentProps<"tr"> {
  color: string
}

function GuessRow({ color, className, ...props }: GuessRowProps) {
  const populateCell = (char: string) => <GuessCell char={char as HexChar}/>
  return (
    <TableRow className={className} {...props}>
      { color.split("").map(populateCell) }
    </TableRow>
  );
}

type HexChar = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F"

interface GuessCellProps extends ComponentProps<"td"> {
  char: HexChar
}

function GuessCell({char, ...props}: GuessCellProps) {
  return <TableCell>{char}</TableCell>
}

export { GuessTable, GuessRow, GuessCell };
