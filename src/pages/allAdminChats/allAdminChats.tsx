import ChatsCalendar from "../../components/chatsCalendar/chatsCalendar.tsx";
import AllChats from "../../components/allChats/allChats.tsx";
import PrimaryAction from "../../UI/primaryAction/primaryAction.tsx";
import ChatSearch from "../../UI/search/search.tsx";
import "./allAdminChats.scss";
import { useState } from "react";
import Pagination from "../../components/pagination/pagination.tsx";
import AdminSortTags from "../../components/adminSortTags/adminSortTags.tsx";

const AllAdminChats = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <section className="all-admin-chats-section ">
        <div className="container">
          <div className="all-admin-chats-body G-flex">
            <div className="admin-chats-left-column">
              <div className="admin-chats-wrapper">
                <ChatSearch
                  placeholder="Поиск по чатам..."
                  value={search}
                  onChange={setSearch}
                />
                <div className="admin-chats-tools G-justify-between">
                  <div className="admin-chats-categories-items G-align-center">
                    <button className="admin-chat-category-item active">Slidy</button>
                    <button className="admin-chat-category-item active">Nexa</button>
                    <button className="admin-chat-category-item inactive">
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
            

            <AdminSortTags/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllAdminChats;
