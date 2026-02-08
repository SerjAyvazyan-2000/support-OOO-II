import ChatsCalendar from "../../components/chatsCalendar/chatsCalendar";
import EmployeesList from "../../components/employeesList/employeesList";
import TrafficTable from "../../components/trafficTable/trafficTable";
import "./totalTraffic.scss";

const TotalTraffic = () => {
  return (
    <>
      <section className="total-traffic-section">
        <div className="container">
          <div className="total-traffic-body G-flex">
            <div className="total-traffic-main-cnt">
              <div className="total-traffic-cnt">
                <div className="total-traffic-header G-align-center">
                  <p className="total-traffic-title">
                    Статистика общего трафика
                  </p>

                  <ChatsCalendar />
                </div>

                <div className="total-traffic-table">
                  <TrafficTable/>
                </div>
              </div>
            </div>

            <EmployeesList backLink={false}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default TotalTraffic;
