import { useRef, useState } from 'react'
import clsx from 'clsx'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  RowData,
  SortingState,
  getSortedRowModel
} from '@tanstack/react-table'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

export interface ColumnMeta<TData extends RowData, TValue> {
  align: string
  hideMobile: boolean
}

export interface DataTableProps<Data, T = any> {
  data: Data[]
  columns: Array<ColumnDef<Data, any>>
  className?: string
  hideHeader?: boolean
}

function DataTable<Data, T>({
  data,
  columns,
  className,
  hideHeader
}: DataTableProps<Data, T>) {
  const tableContainerRef = useRef<HTMLTableElement>(null)
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting
    }
  })
  const { rows } = table.getRowModel()

  return (
    <table
      className={clsx('border-collapse w-full max-w-full text-sm', className && className)}
      ref={tableContainerRef}
    >
      {hideHeader ??
      // TODO: Fix empty space in sticky header and add back these classes.
      // bg-slate-100 dark:bg-slate-800/50 sticky
      <thead className="z-10 top-0">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    minWidth: header.column.columnDef.minSize,
                    maxWidth: header.column.columnDef.maxSize
                  }}
                  align={(header.column.columnDef.meta as any)?.align ?? 'left'}
                  className={
                    ((header.column.columnDef.meta as any)?.hideMobile ? 'hidden md:table-cell ' : '') +
                    'font-bold text-xs p-3 text-slate-400 uppercase shadow-[inset_0px_-1px_0px_0px] shadow-slate-700'
                  }
                >

                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}

                  {header.column.getIsSorted() ? (
                    header.column.getIsSorted() === 'desc' ? (
                      <span className="w-3 h-3 ml-3 text-brand inline-block">
                        <ArrowDownIcon />
                      </span>
                    ) : (
                      <span className="w-3 h-3 ml-3 text-brand inline-block">
                        <ArrowUpIcon />
                      </span>
                    )
                  ) : null}
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      }
      <tbody>
        {rows.map((virtualRow) => {
          const row = rows[virtualRow?.index]
          if(!row) return null
          return (
            <tr key={row?.id} className="hover:cursor-pointer hover:bg-slate-800/50">
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    align={(cell.column.columnDef.meta as any)?.align ?? 'left'}
                    key={cell.id}
                    style={{
                      minWidth: cell.column.columnDef.minSize,
                      maxWidth: cell.column.columnDef.maxSize
                    }}
                    className={
                      ((cell.column.columnDef.meta as any)?.hideMobile ? 'hidden md:table-cell ' : '') +
                      'border-b border-slate-100 p-3 text-slate-500 dark:text-slate-200 dark:border-slate-700'
                    }
                  >
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DataTable
