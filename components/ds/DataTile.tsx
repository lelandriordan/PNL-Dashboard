import Label from "@/components/ds/Label"

export interface DataTileProps {
  title: string
  value: number | string
  percentChange?: number
}

function DataTile({title, value, percentChange}: DataTileProps) {
  return (
    <div className="flex flex-col text-right">
      <Label>{title}</Label>
      <div className="text-slate-600 text-2xl font-bold dark:text-slate-200">{value}</div>
      {percentChange && <div className="text-sm">{percentChange}%</div>}
    </div>
  )
}

export default DataTile