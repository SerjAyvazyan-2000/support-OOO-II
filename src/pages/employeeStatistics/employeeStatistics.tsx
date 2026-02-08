import ChatsCalendar from "../../components/chatsCalendar/chatsCalendar";
import EmployeesList from "../../components/employeesList/employeesList";
import EmployeeTable from "../../components/employeeTable/employeeTable";
import Button from "../../UI/button/button";
import Modal from "../../UI/modal/modal";
import "./employeeStatistics.scss";
import { useState } from "react";

const EmployeeStatistics = () => {
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  return (
    <>
      <section className="employee-statistics-section">
        <div className="container">
          <div className="employee-statistics-body G-flex">
            <div className="employee-statistics-main">
              <div className="e-statistic-items G-flex-column">
                <div className="e-statistic-item G-align-center">
                  <div className="e-item-description G-align-center">
                    <div className="e-item-image G-flex">
                      <img
                        width={68}
                        height={68}
                        src={"/avatar.webp"}
                        alt={"avatar"}
                      />
                    </div>
                    <div className="e-item-info">
                      <p>Зиновьева Мария</p>
                      <span>Начало смены 08:03</span>
                    </div>
                  </div>

                  <div className="e-item-actions G-align-center">
                    <div className="e-item-action active-actiion G-align-start">
                      <div className="e-item-action-icon G-center">
                        <i className="icon icon-check"></i>
                      </div>
                      <div className="e-item-action-info">
                        <p>Активен:</p>
                        <span>4 ч. 32 мин.</span>
                      </div>
                    </div>

                    <div className="e-item-action dinner-actiion G-align-start">
                      <div className="e-item-action-icon G-center">
                        <i className="icon icon-dinner"></i>
                      </div>
                      <div className="e-item-action-info">
                        <p>Обед:</p>
                        <span>58 мин.</span>
                      </div>
                    </div>

                    <div className="e-item-action break-actiion G-align-start">
                      <div className="e-item-action-icon G-center">
                        <i className="icon icon-break"></i>
                      </div>
                      <div className="e-item-action-info">
                        <p>Перерыв:</p>
                        <span>27 мин.</span>
                      </div>
                    </div>
                  </div>

                  <div onClick={() => setIsRemoveOpen(!isRemoveOpen)} className="e-item-remove G-center">
                    <i className="icon icon-basket2"></i>
                  </div>
                </div>
              </div>

              <div className="e-statistics-cnt">
                <div className="e-statistics-header G-align-center">
                  <p className="e-statistics-title">Статистика сотрудника</p>

                  <ChatsCalendar />
                </div>

                <div className="e-statistics-table">
                  <EmployeeTable />
                </div>
              </div>
            </div>
            <EmployeesList backLink={true} />
          </div>
        </div>
      </section>

      <Modal
        className={"modal-remove-tag-cnt"}
        isOpen={isRemoveOpen}
        onClose={() => setIsRemoveOpen(false)}
      >
        <h3 className="modal-cnt-title">Вы уверены,что хотите <span className="text-wrap">удалить сотрудника?</span></h3>

        <div className="e-modal-remove-actions G-align-center">
          <Button variant="gray" onClick={() => setIsRemoveOpen(false)}>
            Нет, я передумал
          </Button>

          <Button variant="black">Да, удалить сотрудника</Button>
        </div>
     
      </Modal>
    </>
  );
};

export default EmployeeStatistics;
