import "./allChats.scss";

import type { ChatItem } from "./allChats";
import { Link } from "react-router-dom";

const chats: ChatItem[] = [
  {
    id: 1,
    link: "/",
    category: "Slidy",
    name: "Григоренко Григорий Григорьевич",
    email: "djrrogfk@yandex.ru",
    message:
      "Я к вам пишу чего же боле что я могу еще сказать ваш сервис снял с меня сто миллионов рублей но это то самое",
    date: "29.02.2026",
    time: "19:23",
    status: "new",
  },
  {
    id: 2,
    link: "/",
    category: "Nexa",
    name: "Григоренко Григорий Григорьевич",
    email: "djrrogfk@yandex.ru",
    message:
      "Я к вам пишу чего же боле что я могу еще сказать ваш сервис снял с меня сто миллионов рублей но это то самое",
    date: "29.02.2026",
    time: "19:23",
    status: "new",
  },
  {
    id: 3,
    link: "/",
    category: "Slidy",
    name: "Григоренко Григорий Григорьевич",
    email: "djrrogfk@yandex.ru",
    message:
      "Я к вам пишу чего же боле что я могу еще сказать ваш сервис снял с меня сто миллионов рублей но это то самое",
    date: "29.02.2026",
    time: "19:23",
    status: "read-in-work",
  },
  {
    id: 4,
    link: "/",
    category: "Slidy",
    name: "Григоренко Григорий Григорьевич",
    email: "djrrogfk@yandex.ru",
    message:
      "Я к вам пишу чего же боле что я могу еще сказать ваш сервис снял с меня сто миллионов рублей но это то самое",
    date: "29.02.2026",
    time: "19:23",
    status: "dialogue-read",
  },
  {
    id: 5,
    link: "/",
    category: "Nexa",
    name: "Григоренко Григорий Григорьевич",
    email: "djrrogfk@yandex.ru",
    message:
      "Я к вам пишу чего же боле что я могу еще сказать ваш сервис снял с меня сто миллионов рублей но это то самое",
    date: "29.02.2026",
    time: "19:23",
    status: "dialogue-read-return",
  },

  {
    id: 6,
    link: "/",
    category: "Slidy",
    name: "Григоренко Григорий Григорьевич",
    email: "djrrogfk@yandex.ru",
    message:
      "Я к вам пишу чего же боле что я могу еще сказать ваш сервис снял с меня сто миллионов рублей но это то самое",
    date: "29.02.2026",
    time: "19:23",
    status: "dialogue-read",
  },
];

const statusClassMap: Record<ChatItem["status"], string> = {
  new: "new-message",
  "read-in-work": "read-in-wrok-message",
  "dialogue-read": "dialogue-read-message",
  "dialogue-read-return": "dialogue-read-return-message",
};

const AllChats = () => {
  return (
    <div className="employee-chats-messages">
      {chats.map((chat) => (
        <Link
          state={{
            category: chat.category,
            name: chat.name,
          }}
          to={`/chatWithUser/${chat.id}`}
          className={`employee-chat-message ${statusClassMap[chat.status]} G-align-end`}
        >
          <div className="chat-message-description">
            <div className="chat-message-header G-align-center">
              {!["dialogue-read", "dialogue-read-return"].includes(
                chat.status,
              ) && <div className="chat-message-status"></div>}

              <div className="chat-message-category">{chat.category}</div>

              {chat.status === "read-in-work" && (
                <i className="icon icon-time"></i>
              )}

              {chat.status === "dialogue-read-return" && (
                <i className="icon icon-close"></i>
              )}

              <p className="message-author-name">{chat.name}</p>

              <a className="message-author-info" href="#">
                {chat.email}
              </a>
            </div>

            <p className="message-author-text">{chat.message}</p>
          </div>

          <div className="chat-message-data">
            <p className="message-data">{chat.date}</p>
            <p className="message-time">{chat.time}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AllChats;
