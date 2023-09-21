import { config } from "@/app/_config"

export type CompanyTableProps = {
  isHeader?:boolean,
}
export function CompanyTable({isHeader=false}:CompanyTableProps){
  return (
    <table>
      <tbody>
        {Object.keys(config.company).map((key, i) => (
          <tr key={i}>
            {isHeader && <th className='text-right py-2 pr-5'>{config?.company?.[key]?.label}</th>}
            <td className=' py-2'>{config?.company?.[key]?.value+''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}