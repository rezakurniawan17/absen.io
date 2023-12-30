"use client";
import { Absence } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteAbsence } from "@/actions/user/deleteAbsence";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Absences = Absence;

export const columns: ColumnDef<Absences>[] = [
  {
    accessorKey: "subject",
    header: "Mata Pelajaran",
  },
  {
    accessorKey: "grade",
    header: "Tingkat Sekolah",
  },
  {
    accessorKey: "class",
    header: "Kelas",
  },
  {
    accessorKey: "className",
    header: "Nama Kelas",
  },
  {
    accessorKey: "attendance",
    header: "Kehadiran",
  },
  {
    accessorKey: "date",
    header: "Tanggal",
  },
  {
    accessorKey: "time",
    header: "Waktu",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const absence = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                deleteAbsence(absence.id);
                window.location.reload();
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
