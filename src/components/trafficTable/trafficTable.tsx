import "./trafficTable.scss";

const TrafficTable = () => {
  const trafficData = [
    
    {

      time: "08:00–09:00",
      incoming: { slidy: 20, nexa: 17, wace: 6, total: 43 },
      outgoing: { slidy: 20, nexa: 17, wace: 6, total: 43 },
      avgTime: "00:00:14",
    },
    {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
        {
      time: "09:00–10:00",
      incoming: { slidy: 18, nexa: 12, wace: 9, total: 39 },
      outgoing: { slidy: 19, nexa: 15, wace: 5, total: 39 },
      avgTime: "00:00:11",
    },
  ];

  return (
    <div className="traffic-table-wrapper">
      <table className="traffic-table">
        <thead>
          <tr>
            <th rowSpan={2}>Часы</th>
            <th colSpan={4} className="table-incoming">
              <i className="icon icon-arrowDown2"></i>
              <span>Входящие</span>
            </th>
            <th colSpan={4} className="table-outgoing">
                   <i className="icon icon-arrowDown2"></i>
              <span>Исходящие</span>
            </th>
            <th rowSpan={2}>
              Среднее
              <br />
              время ответа
            </th>
          </tr>
          <tr>
            <th>Slidy</th>
            <th>Nexa</th>
            <th>Wace</th>
            <th>Сумма</th>

            <th>Slidy</th>
            <th>Nexa</th>
            <th>Wace</th>
            <th>Сумма</th>
          </tr>
        </thead>

        <tbody>
          {trafficData.map((row, i) => (
            <tr key={i}>
              <td className="table-row-time">{row.time}</td>

              <td className="table-row-incoming">{row.incoming.slidy}</td>
              <td className="table-row-incoming">{row.incoming.nexa}</td>
              <td className="table-row-incoming">{row.incoming.wace}</td>
              <td className="table-total">{row.incoming.total}</td>

              <td className="table-row-outgoing">{row.outgoing.slidy}</td>
              <td className="table-row-outgoing">{row.outgoing.nexa}</td>
              <td className="table-row-outgoing">{row.outgoing.wace}</td>
              <td className="table-total">{row.outgoing.total}</td>

              <td className="table-row-avg">{row.avgTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrafficTable;

