import { company } from "@/app/_config"
import classNames from "classnames"

export type CompanyTableProps = JSX.IntrinsicElements['table'] & {
  isHeader?:boolean,
}
export function CompanyTable({isHeader=false, ...props}:CompanyTableProps){
  return (
    <table className={classNames(props.className)}>
      <tbody>
        {Object.keys(company).map((key, i) => (
          <tr key={i}>
            {isHeader && <th className='text-right py-2 pr-5'>{company[key].label}</th>}
            <td className=' py-2'>{company[key].value+''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}