import type { Employee } from "./employeeList.types";
import {Link} from 'react-router-dom'
type Props = {
  employee: Employee;
};

const EmployeeItem = ({ employee }: Props) => {
  return (
    <Link to={"/employeeStatistics"} className="list-employee-item G-align-start">
      <div className="employee-item-main G-align-center">
        <div className="employee-item-img G-flex">
          <img
            width={48}
            height={48}
            src={employee.avatar}
            alt={employee.name}
          />
        </div>

        <div className="employee-item-info">
          <p>{employee.name}</p>
          <span>{employee.timeText}</span>
        </div>
      </div>

      <div className={`employee-item-status ${employee.status}`}>
        <span></span>
        <p>{employee.statusLabel}</p>
      </div>
    </Link>
  );
};

export default EmployeeItem;