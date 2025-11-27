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
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

function GuessTable() {
  // return <Table>
  //   <TableBody>
  //     <TableRow>
  //       <TableCell>
  //         Datum 1
  //       </TableCell>
  //       <TableCell>
  //         Datum 2
  //       </TableCell>
  //     </TableRow>
  //   </TableBody>
  // </Table>;

  return <div className="grid grid-cols-6 grid-rows-5 gap-4">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
    <div>17</div>
    <div>18</div>
</div>
}

function GuessRow() {
  const [count, setCount] = useState(0);
  const handleKey = (event: any) => {
    console.log("key handler")
  }
  return (
    <>
      <div onKeyPress={handleKey}>
        #123456
      </div>
    </>
  );
}

function GuessChar() {
  return <div></div>
}

export { GuessTable, GuessRow, GuessChar };
