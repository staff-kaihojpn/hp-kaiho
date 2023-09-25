import { company } from "@/app/_config"
import classNames from "classnames"

export type CompanyTableProps = JSX.IntrinsicElements['table'] & {
  isHeader?:boolean,
}
export function CompanyTable({isHeader=false, ...props}:CompanyTableProps){
  return (
    <table className={classNames(props.className)}>
      <tbody>
        {Object.keys(company).map((key, i) => {
          const Icon = company[key].icon
          return (
            <tr key={i}>
              <th className='py-2 pr-5 w-8'>{Icon && <Icon />}</th>
              {isHeader && <th className='text-right py-2 pr-5'>{company[key].label}</th>}
              <td className=' py-2'>{company[key].value+''}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}