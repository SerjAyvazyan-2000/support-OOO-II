import Button from "../../UI/button/button";
import Modal from "../../UI/modal/modal";
import "./header.scss";
import { useState, useEffect } from "react";
import { Link, useLocation, useMatches } from "react-router-dom";

type RouteHandle = {
  hideHeader?: boolean;
  showChatInfo?: boolean;
};
type ChatHeaderState = {
  category?: string;
  name?: string;
};

const Header = () => {
  const matches = useMatches();
  const location = useLocation();
  const { category, name } = (location.state as ChatHeaderState) || {};
  const [isShiftModalOpen, setIsShiftModalOpen] = useState<boolean>(false);
  const [isShiftStarted, setIsShiftStarted] = useState<boolean>(false);
  const [isDinner, setIsDinner] = useState<boolean>(false);
  const [dinnerTime, setDinnerTime] = useState<string>("14:00");
  const [isBreak, setIsBreak] = useState<boolean>(false);
  const [breakTime, setBreakTime] = useState<string>("14:00");

  const hideHeader = matches.some(
    (match) => (match.handle as RouteHandle)?.hideHeader,
  );
  const showChatInfo = matches.some(
    (match) => (match.handle as RouteHandle)?.showChatInfo,
  );

  if (hideHeader) return null;

  return (
    <>
      <header className={`header`}>
        <div className="header-body G-align-center">
          <Link
            to={"/allEmployeeChats"}
            className="header-messages-link G-center"
          >
            <i className="icon icon-messages"></i>
          </Link>

          {showChatInfo && category && name && (
            <div className="h-chat-category-wrapper G-align-center">
              <p className="h-chat-category">{category}</p>
              <p className="h-chat-author-name">{name}</p>
            </div>
          )}

          <div className="header-actions G-align-center">
            <button
              className={`break-btn G-center ${isBreak ? "active" : ""}`}
              onClick={() => {
                if (isBreak) {
                  setIsBreak(false);
                  setBreakTime("14:00");
                } else {
                  setIsBreak(true);
                }
              }}
            >
              {isBreak ? `Перерыв ${breakTime}` : "  На перерыв"}
            </button>

            <button
              className={`dinner-btn G-center ${isDinner ? "active" : ""}`}
              onClick={() => {
                if (isDinner) {
                  setIsDinner(false);
                  setDinnerTime("14:00");
                } else {
                  setIsDinner(true);
                }
              }}
            >
              {isDinner ? `Обед ${dinnerTime}` : "На обед"}
            </button>

            <button
              className="finish-btn G-center"
              onClick={() => setIsShiftModalOpen(true)}
            >
              {isShiftStarted ? "Завершить смену" : "Начать смену"}
            </button>

            <Link
              className="admin-panel-link G-align-center"
              to={"/totalTraffic"}
            >
              <i className="icon icon-adminPanel"></i>
              <span>Панель администратора</span>
            </Link>
            <div className="header-admin-info G-align-center">
              <Link
                to={"/allAdminChats"}
                className="header-admin-avatar G-flex"
              >
                <img
                  loading="eager"
                  width={32}
                  height={32}
                  src="/avatar.webp"
                  alt="avatar"
                />
              </Link>
              <div className="header-admin-time">13:33</div>
              <Link
                className="header-exit-link icon icon-exit"
                to={"/authorization"}
              ></Link>
            </div>
          </div>
        </div>
      </header>

      <Modal
        className={"modal-start-shift-cnt"}
        isOpen={isShiftModalOpen}
        onClose={() => setIsShiftModalOpen(!isShiftModalOpen)}
      >
        <h3 className="modal-cnt-title">
          {isShiftStarted ? (
            <>
              Вы уверены, что хотите{" "}
              <span className="text-wrap">завершить смену?</span>
            </>
          ) : (
            <>
              Вы уверены, что хотите{" "}
              <span className="text-wrap">начать смену?</span>
            </>
          )}
        </h3>
        <div className="modal-edit-actions G-align-center">
          <Button variant="gray" onClick={() => setIsShiftModalOpen(false)}>
            Нет, я передумал
          </Button>

          <Button
            variant="black"
            onClick={() => {
              setIsShiftStarted((prev) => !prev);
              setIsShiftModalOpen(false);
            }}
          >
            {isShiftStarted ? "Да, завершить смену" : "Да, начать смену"}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
