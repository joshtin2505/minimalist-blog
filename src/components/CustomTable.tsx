import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"

function CustomTable({
  theads,
  rows,
}: {
  theads: string[]
  rows: (React.JSX.Element | string)[][]
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {theads.map((thead, index) => {
            if (index !== 0 && index !== theads.length - 1) {
              return (
                <TableHead key={index} className="hidden sm:table-cell">
                  {thead}
                </TableHead>
              )
            } else if (index === theads.length - 1) {
              return (
                <TableHead key={index} className="text-right">
                  {thead}
                </TableHead>
              )
            }
            return <TableHead key={index}>{thead}</TableHead>
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index}>
            {row.map((cell, index) => {
              if (index !== 0 && index !== row.length - 1) {
                return (
                  <TableCell key={index} className="hidden sm:table-cell">
                    {cell}
                  </TableCell>
                )
              } else if (index === row.length - 1) {
                return (
                  <TableCell key={index} className="text-right">
                    {cell}
                  </TableCell>
                )
              }
              return <TableCell key={index}>{cell}</TableCell>
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable
