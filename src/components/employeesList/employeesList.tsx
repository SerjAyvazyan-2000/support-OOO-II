import ChatSearch from "../../UI/search/search";
import EmployeeItem from "./employeeItem";
import type { Employee } from "./employeeList.types";
import { Link } from "react-router-dom";
import './employeesList.scss'

 type Props = {
    backLink?:boolean
 }

const EmployeesList = ({ backLink }: Props) => {
  const employees: Employee[] = [
    {
      id: 1,
      name: "Зиновьева Мария",
      avatar: "/avatar.webp",
      timeText: "Начало смены 08:03",
      status: "active",
      statusLabel: "Активен",
    },
    {
      id: 2,
      name: "Мурина Елена",
      avatar: "/avatar2.webp",
      timeText: "Начало смены 08:03",
      status: "active",
      statusLabel: "Активен",
    },
    {
      id: 3,
      name: "Леонова Карина",
      avatar: "/avatar3.webp",
      timeText: "Начало смены 08:01",
      status: "active",
      statusLabel: "Активен",
    },
    {
      id: 4,
      name: "Григоренко Григорий",
      avatar: "/avatar4.png",
      timeText: "Начало смены 08:00",
      status: "break",
      statusLabel: "Перерыв",
    },
    {
      id: 5,
      name: "Николов Олег",
      avatar: "/avatar5.png",
      timeText: "Начало смены 08:00",
      status: "dinner",
      statusLabel: "Обед",
    },
    {
      id: 6,
      name: "Проценко Яна",
      avatar: "/avatar6.webp",
      timeText: "Начало смены 08:00",
      status: "dinner",
      statusLabel: "Обед",
    },
    {
      id: 7,
      name: "Макаров Денис",
      avatar: "/avatar8.webp",
      timeText: "Конец смены 02:01",
      status: "inactive",
      statusLabel: "Неактив",
    },


       {
      id: 8,
      name: "Григоренко Григорий",
      avatar: "/avatar4.png",
      timeText: "Начало смены 08:00",
      status: "break",
      statusLabel: "Перерыв",
    },
    {
      id: 9,
      name: "Николов Олег",
      avatar: "/avatar5.png",
      timeText: "Начало смены 08:00",
      status: "dinner",
      statusLabel: "Обед",
    },
    {
      id: 10,
      name: "Проценко Яна",
      avatar: "/avatar6.webp",
      timeText: "Начало смены 08:00",
      status: "dinner",
      statusLabel: "Обед",
    },
    {
      id: 11,
      name: "Макаров Денис",
      avatar: "/avatar8.webp",
      timeText: "Конец смены 02:01",
      status: "inactive",
      statusLabel: "Неактив",
    },


  ];

  return (
    <div className="list-employees-block">
      <p className="list-employees-title">Список сотрудников</p>

      <div className="list-employees-search">
        <ChatSearch />
      </div>

      <div className={`list-employees-items ${backLink ? 'back-link-here' : ''}  G-flex-column`}>
        {employees.map((employee) => (
          <EmployeeItem key={employee.id} employee={employee} />
        ))}
      </div>
      {backLink &&  

      <div className="e-back-link-wrapper">
        <Link className="employees-back-link G-align-center" to={'/totalTraffic'}>
          <i className="icon icon-arrowLeft"></i> 
          <p>К главной панели</p>
        </Link>
      </div>
      }

    </div>
  );
};

export default EmployeesList;
