import "./employeeTable.scss";

const EmployeeTable = () => {
  const employeeData = [
    {
      time: "08:00–09:00",
      incoming: 20,
      outgoing: 20,
      deferred: 0,
      returned: 0,
      queue: 6,
      avgTime: "00:00:14",
    },
    {
      time: "09:00–10:00",
      incoming: 17,
      outgoing: 17,
      deferred: 1,
      returned: 1,
      queue: 8,
      avgTime: "00:00:14",
    },

    {
      time: "10:00–11:00",
      incoming: 6,
      outgoing: 6,
      deferred: 2,
      returned: 2,
      queue: 2,
      avgTime: "00:00:14",
    },

    {
      time: "11:00–12:00",
      incoming: 43,
      outgoing: 43,
      deferred: 0,
      returned: 0,
      queue: 0,
      avgTime: "00:00:14",
    },

    {
      time: "12:00–13:00",
      incoming: 43,
      outgoing: 43,
      deferred: 0,
      returned: 0,
      queue: 0,
      avgTime: "00:00:14",
    },

    {
      time: "13:00–14:00",
      incoming: 43,
      outgoing: 43,
      deferred: 0,
      returned: 0,
      queue: 0,
      avgTime: "00:00:14",
    },



    


  ];

  return (
    <div className="employee-table-wrapper">
      <table className="employee-table">
        <thead>
          <tr>
            <th>Часы</th>
            <th className="employee-table-incoming">
              <i className="icon icon-arrowDown2"></i>
              <span>Входящие</span>
            </th>

            <th className="employee-table-outgoing">
              <div className="G-center">
                <i className="icon icon-arrowDown2"></i>
                <span>Исходящие</span>
              </div>
            </th>

            <th className="employee-table-deferred">
              <div className="G-center">
                <i className="icon icon-time"></i>
                <span>Отложенные</span>
              </div>
            </th>

            <th className="employee-table-return">
              <div className="G-center">
                <i className="icon icon-close"></i>
                <span>Возврат</span>
              </div>
            </th>

            <th>Очередь</th>

            <th>
              Среднее <br /> время ответа
            </th>
          </tr>
        </thead>

        <tbody>
          {employeeData.map((row, i) => (
            <tr key={i}>
              <td className="employee-table-row-time">{row.time}</td>
              <td>{row.incoming}</td>
              <td>{row.outgoing}</td>
              <td>{row.deferred}</td>
              <td>{row.returned}</td>
              <td>{row.queue}</td>
              <td className="table-row-avg">{row.avgTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
