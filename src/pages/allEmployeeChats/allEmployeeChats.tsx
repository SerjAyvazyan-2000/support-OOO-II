import ChatsCalendar from "../../components/chatsCalendar/chatsCalendar";
import AllChats from "../../components/allChats/allChats.tsx";
import PrimaryAction from "../../UI/primaryAction/primaryAction";
import ChatSearch from "../../UI/search/search";
import "./allEmployeeChats.scss";
import { useState } from "react";
import Pagination from "../../components/pagination/pagination.tsx";
import InfoTooltip from "../../components/infoTooltip/infoTooltip.tsx";

const AllEmployeeChats = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <>
      <section className="all-employee-chats-section ">
        <div className="container">
          <div className="all-employee-chats-body G-flex">
            <div className="employee-chats-left-column">
              <div className="employee-chats-wrapper">
                <ChatSearch
                  placeholder="Поиск по чатам..."
                  value={search}
                  onChange={setSearch}
                />
                <div className="employee-chats-tools G-justify-between">
                  <div className="chats-categories-items G-align-center">
                    <button className="chat-category-item active">Slidy</button>
                    <button className="chat-category-item active">Nexa</button>
                    <button className="chat-category-item inactive">
                      Wace
                    </button>
                  </div>

                  <ChatsCalendar />
                </div>

                <AllChats />

          
                <Pagination
                  currentPage={page}
                  totalPages={20}
                  onChange={setPage}
                />

              </div>
            </div>
            <div className="sort-tags-column">
              <p className="sort-tags-title">Сортировка по меткам</p>
              <div className="sort-tags-items G-flex-column">
                <div className="sort-tag-item incoming-messages-item active G-align-center">
                  <i className="icon icon-messages2"></i>
                  <p className="incoming-message-title">Входящие</p>
                  <div className="sort-tag-quantity incoming-quantity">
                    <p>2 / 1034</p>
                  </div>
                </div>

                <div className="sort-tag-item return-messages-item G-align-center">
                  <i className="icon icon-close"></i>
                  <p className="return-message-title">Возврат</p>
                  <div className="sort-tag-quantity incoming-quantity">
                    <p>2</p>
                  </div>
                </div>

                <div className="sort-tag-item later-messages-item G-align-center">
                  <i className="icon icon-time"></i>
                  <p className="later-message-title">Позже</p>
                  <div className="sort-tag-quantity incoming-quantity">
                    <p>1</p>
                  </div>
                </div>
              </div>

              <div className="sort-tags-tools">
                <PrimaryAction
                  className="primary-link auth-link "
                  to={`/chatWithUser/${1}`}
                >
                  <span>Перейти в чат</span>
                  <i className="icon icon-arrowRight"></i>
                </PrimaryAction>
              </div>
              <p className="sort-available">Доступно: 6</p>
            </div>
          </div>
        </div>
      </section>

         <InfoTooltip
        isOpen={showTooltip}
        onClose={() => setShowTooltip(false)}
      />


    </>
  );
};

export default AllEmployeeChats;
