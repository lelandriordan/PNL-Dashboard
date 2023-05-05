import clsx from "clsx"
import { createColumnHelper, ColumnDef, CellContext } from "@tanstack/react-table"
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline"
import { Holding } from "@/types/holding"
import useHoldings from "@/hooks/useHoldings"
import DataTable from "@/components/ds/DataTable"
import Label from "@/components/ds/Label"
import SparklineChart from "@/components/SparklineChart"
import LoadingSpinner from "./ds/LoadingSpinner"

export interface HoldingsWidgetProps {
  className?: string
}

function HoldingsWidget({className}: HoldingsWidgetProps) {
  const {data, error, isLoading} = useHoldings()

  const columnHelper = createColumnHelper<Holding>()
  const columns: ColumnDef<Holding, any>[] = [
    columnHelper.accessor('name', {
      header: 'Asset',
      cell: (cell) => AssetCell(cell)
    }),
    columnHelper.accessor(
      // Use accessorFn to format fake data values
      row => (row.total_volume * 0.0000000005).toLocaleString(),
      {
        header: 'Balance',
        meta: {
          align: 'right'
        },
      }
    ),
    columnHelper.accessor(
      // Use accessorFn to format fake data values
      row => (row.current_price * 0.9).toLocaleString(),
      {
        header: 'Avg Price Paid',
        id: 'AvgPrice',
        meta: {
          align: 'right'
        },
      }
    ),
    columnHelper.accessor('current_price', {
      header: 'Current Price',
      meta: {
        align: 'right'
      },
    }),
    columnHelper.accessor(
      // Use accessorFn to format fake data values
      row => (
        ((row.current_price - (row.current_price * 0.9)) * (row.total_volume * 0.000000001)).toLocaleString()
      ),
      {
        header: 'PNL',
        id: 'PNL',
        meta: {
          align: 'right'
        },
      }
    ),
    columnHelper.accessor('high_24h', {
      header: '24hr High',
      meta: {
        align: 'right'
      },
    }),
    columnHelper.accessor('low_24h', {
      header: '24hr Low',
      meta: {
        align: 'right'
      },
    }),
    columnHelper.accessor('price_change_24h', {
      header: '24hr Change',
      meta: {
        align: 'right'
      },
    }),
    columnHelper.display({
      header: '7D Price',
      meta: {
        align: 'right'
      },
      cell: cell => SparklineCell(cell)
    }),    
    columnHelper.display({
      header: '',
      id: 'actions',
      meta: {
        align: 'right'
      },
      cell: cell => ActionCell(cell)
    }),
  ]

  const tradeTableProps = {
    data: data,
    columns: columns
  }

  if (isLoading) return <LoadingSpinner className="block w-full col-span-3" />
  if (error) return <p>Error</p>
  return  (
    <div className={clsx(
      'h-auto bg-white rounded shadow dark:bg-slate-800/50 p-0 overflow-visible pb-10',
      className && className
    )}>
      <Label className="px-3 py-2">Holdings</Label>
      <DataTable
        columns={tradeTableProps.columns}
        data={tradeTableProps.data}
      />
    </div>
  )
}

export default HoldingsWidget

function AssetCell(cell: CellContext<Holding,any>) {
  const value = cell.getValue()
  const rowValues = cell.row.original
  return (
    <div
      className='flex flex-row items-center gap-4 relative'
    >
      {/* TODO: next/Image isn't working without whitelisting coingecko domain. */}
      <img src={rowValues.image} alt={`${rowValues.symbol} Logo`} className="w-[32px] h-[32px]" />
      <div className="flex flex-col">
        <span className="text-base">{value}</span>
        <div className="text-xs font-semibold text-slate-400 uppercase">{rowValues.symbol}</div>
      </div>
    </div>
  )
}

function SparklineCell(cell: CellContext<Holding,any>) {
  const rowValues = cell.row.original
  return (
    <div className="block">
      <SparklineChart data={rowValues.sparkline_in_7d.price}></SparklineChart>
    </div>
  )
}

function ActionCell(cell: CellContext<Holding,any>) {
  return (
    <div className="rounded-full p-1 hover:bg-blue-10 ">
      <EllipsisVerticalIcon className="text-slate-400 w-[24px] h-[24px]" />
    </div>
  )
}
