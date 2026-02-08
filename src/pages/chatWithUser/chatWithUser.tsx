import Chat from "../../components/chat/chat";
import ChatSearch from "../../UI/search/search";
import "./chatWithUser.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PrimaryAction from "../../UI/primaryAction/primaryAction";
import Modal from "../../UI/modal/modal";
import Button from "../../UI/button/button";

const ChatWithUser = () => {
  const [search, setSearch] = useState("");
  const [isNewScriptOpen, setIsNewScriptOpen] = useState(false);
  const [isEditScriptOpen, setIsEditScriptOpen] = useState(false);

  const { state } = useLocation();

  return (
    <>
      <section className="chatWith-user-section">
        <div className="chat-left-column">
          <div className="subscription-status-wrapper ">
            <p className="subscription-status-title">Статус подписки</p>

            <div className="subscription-status-main G-align-center">
              <p className="s-chat-category-name">Wace</p>
              <div className="subscription-status-info G-align-center">
                <i className="icon icon-check2"></i>
                <p>Подписка активна</p>
              </div>
            </div>
          </div>

          <div className="general-information-wrapper">
            <p className="general-information-title">Общая информация</p>
            <div className="general-information-items G-flex-column">
              <div className="general-information-item">
                <p className="general-info-title">ID Пользователя</p>
                <label>
                  <input
                    autoComplete="off"
                    name="id"
                    value={"111111111111"}
                    type="text"
                  />
                </label>
              </div>

              <div className="general-information-item">
                <p className="general-info-title">Почта</p>
                <label>
                  <input
                    autoComplete="off"
                    name="email"
                    value={"example@email.com"}
                    type="text"
                  />
                </label>
              </div>

              <div className="general-information-item">
                <p className="general-info-title">Тип обращения</p>
                <label>
                  <input
                    autoComplete="off"
                    name="type"
                    value={"Возврат"}
                    type="text"
                  />
                </label>
              </div>

              <div className="general-information-item">
                <p className="general-info-title">Номер транзакции</p>
                <label>
                  <input
                    autoComplete="off"
                    name="type"
                    value={"111111111111"}
                    type="text"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="cmments-wrapper">
            <p className="cmments-block-title">Комментарии</p>
            <div className="cmments-inputs-items G-flex-column">
              <div className="cmments-input-item">
                <label className="G-align-start">
                  <i className="icon icon-checkMark"></i>
                  <textarea
                    name="cmment1"
                    placeholder="| Введите комментарий"
                    autoComplete="off"
                    value={
                      "Какой-то коммент про пользователя, чем закончился диалог и т.д."
                    }
                  />
                </label>
              </div>

              <div className="cmments-input-item">
                <label className="comment-input G-align-center">
                  <i className="icon icon-checkMark"></i>

                  <span className="comment-caret">|</span>
                  <input
                    name="comment2"
                    type="text"
                    placeholder="Введите комментарий"
                    autoComplete="off"
                  />
                </label>
              </div>
              <button
                onClick={() => setIsNewScriptOpen(!isNewScriptOpen)}
                className="new-comment-btn G-align-center"
              >
                <span>Новый комментарий</span>
                <i className="icon icon-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <Chat />

        <div className="chat-right-column">
          <div className="response-scripts-block">
            <p className="response-scripts-title">Скрипты ответов</p>

            <div className="response-scripts-cnt">
              <ul className="response-scripts-items G-flex-column">
                <li className="response-script-item ">
                  <span>Приветствие</span>
                </li>
                <li className="response-script-item active G-align-center">
                  <span>Отмена подписки</span>
                  <i className="icon icon-dots"></i>
                  <ul className="r-script-sub-list">
                    <li
                      onClick={() => setIsEditScriptOpen(!isEditScriptOpen)}
                      className="r-script-sub-item G-align-center"
                    >
                      <i className="icon icon-edit"></i>
                      <p>Изменить</p>
                    </li>

                    <li className="r-script-sub-item G-align-center">
                      <i className="icon icon-basket"></i>
                      <p>Удалить</p>
                    </li>
                  </ul>
                </li>
                <li className="response-script-item">
                  <span>Документы</span>
                </li>
                <li className="response-script-item">
                  <span>Доки Wace</span>
                </li>
                <li className="response-script-item">
                  <span>Баги с редактором</span>
                </li>
                <li className="response-script-item">
                  <span>Помощь</span>
                </li>
                <li className="response-script-item">
                  <span>Отзывы</span>
                </li>
                <li className="response-script-item">
                  <span>Первый чат с клиентом</span>
                </li>
                <li className="response-script-item">
                  <span>Первый чат с клиентом</span>
                </li>
                <li className="response-script-item">
                  <span>Первый чат с клиентом</span>
                </li>
                <li className="response-script-item">
                  <span>Первый чат с клиентом</span>
                </li>
                <li className="response-script-item">
                  <span>Первый чат с клиентом</span>
                </li>
                <li className="response-script-item">
                  <span>Первый чат с клиентом</span>
                </li>
              </ul>
              <div className="response-scripts-search">
                <ChatSearch
                  placeholder="Поиск по скрипту"
                  value={search}
                  onChange={setSearch}
                />
              </div>
            </div>
          </div>

          <div className="dialogue-tags">
            <p className="dialogue-tags-title">Метки диалога</p>
            <div className="dialogue-tags-items G-align-center">
              <div className="dialogue-tag-item dialogue-tag-return G-align-center">
                <i className="icon icon-close"></i>
                <p>Возврат</p>
              </div>
              <div className="dialogue-tag-item dialogue-tag-later G-align-center">
                <i className="icon icon-time"></i>
                <p>Позже</p>
              </div>
            </div>
          </div>

          <div className="next-chat-link-wrapper">
            <PrimaryAction className="primary-link " to={"/authorization"}>
              <span>Следующий чат</span>
              <i className="icon icon-arrowRight"></i>
            </PrimaryAction>

            <p className="sort-available">Доступно: 23</p>
          </div>
        </div>
      </section>

      <Modal
        className={"modal-new-tag-cnt"}
        isOpen={isNewScriptOpen}
        onClose={() => setIsNewScriptOpen(false)}
      >
        <h3 className="modal-cnt-title">Добавить новый скрипт ответа</h3>

        <div className="new-script-modal-tools G-flex-column">
          <div className="script-name-input">
            <label>
              <i className="icon icon-checkMark"></i>
              <input type="text" placeholder="Название скрипта" />
            </label>
          </div>
          <div className="script-content-textarea">
            <label>
              <i className="icon icon-scriptCnt"></i>
              <textarea
                placeholder="Содержание скрипта"
                name="script"
              ></textarea>
            </label>
          </div>
        </div>

        <div className="new-script-modal-actions G-align-center">
          <Button variant="black">Добавить скрипт</Button>
        </div>
        <i
          onClick={() => setIsNewScriptOpen(false)}
          className="icon icon-close modal-close"
        ></i>
      </Modal>

      <Modal
        className={"modal-new-tag-cnt"}
        isOpen={isEditScriptOpen}
        onClose={() => setIsEditScriptOpen(false)}
      >
        <h3 className="modal-cnt-title">Редактировать скрипт</h3>

        <div className="new-script-modal-tools G-flex-column">
          <div className="script-name-input">
            <label>
              <i className="icon icon-checkMark"></i>
              <input
                value={"Приветствие"}
                type="text"
                placeholder="Название скрипта"
              />
            </label>
          </div>
          <div className="script-content-textarea">
            <label>
              <i className="icon icon-scriptCnt"></i>
              <textarea
                value={
                  "Тут будет содержание скрипта, которое можно изменить, удалить, добавить и т.д."
                }
                placeholder="Содержание скрипта"
                name="script"
              ></textarea>
            </label>
          </div>
        </div>

        <div className="modal-edit-actions G-align-center">
          <Button variant="gray" onClick={() => setIsEditScriptOpen(false)}>
            Отмена
          </Button>

          <Button variant="black">Создать</Button>
        </div>

        <i
          onClick={() => setIsEditScriptOpen(false)}
          className="icon icon-close modal-close"
        ></i>
      </Modal>
    </>
  );
};

export default ChatWithUser;
