import Navbar from "@/components/navbar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns/format";

export default function TrophiesPage() {
  const placeholderTrophies =[...'👻👽👾🐭🦕']

  const thropies : any = [];
  for (let i = 0; i < placeholderTrophies.length; i++) {
    thropies.push(
      <TableRow className="hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" key={i}>
      <TableCell className="text-center font-medium">{i+1}</TableCell>
      <TableCell className="text-2xl flex justify-center text-center">{placeholderTrophies[i]}</TableCell>
      <TableCell className="text-center">
        {format(new Date(), "PPP")}
      </TableCell>
    </TableRow>
    )
  }

  return (
    <>
      <Navbar />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40px] text-center">#</TableHead>
              <TableHead className="w-[200px] text-center">Trophies</TableHead>
              <TableHead className="w-[100px] text-center">Acquied at: </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {thropies}
          </TableBody>
        </Table>
    </>
  )
}