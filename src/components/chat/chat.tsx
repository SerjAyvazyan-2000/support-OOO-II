import "./chat.scss";
import { useRef } from "react";


const Chat = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto"; 
    el.style.height = el.scrollHeight + "px"; 
  };

  return (
    <div className="chat-main-column G-flex-column">
      <div className="chat-messages-wrapper G-flex-column">
        <div className="chat-message chat-message--incoming">
          <div className="chat-message__meta G-align-center">
            <span className="chat-message__author">
              Пупкин Василий Васильевич
            </span>
            <span className="chat-message__time">10:11</span>
          </div>

          <div className="chat-message__bubble">
            <p>
              Добрый день я не понимаю я тупое ебло вонючее помотите мне
              пожалуйстаааааа
            </p>
          </div>
        </div>

        <div className="chat-message chat-message--outgoing">
          <div className="chat-message__meta G-align-center">
            <span className="chat-message__author">
              Егорик Рейхстагович (Я)
            </span>
            <span className="chat-message__time">10:11</span>
          </div>

          <div className="chat-message__bubble">Добрый день</div>
        </div>

        <div className="chat-message chat-message--incoming">
          <div className="chat-message__meta G-align-center">
            <span className="chat-message__author">
              Пупкин Василий Васильевич
            </span>
            <span className="chat-message__time">10:11</span>
          </div>

          <div className="chat-message__bubble">
            <p>НЕТ ТЫ</p>
          </div>
        </div>

        <div className="chat-message chat-message--incoming">
          <div className="chat-message__meta G-align-center">
            <span className="chat-message__author">
              Пупкин Василий Васильевич
            </span>
            <span className="chat-message__time">10:11</span>
          </div>

          <div className="chat-message__bubble">
            <p>Помогите</p>
          </div>
        </div>

        <div className="chat-message chat-message--incoming">
          <div className="chat-message__meta G-align-center">
            <span className="chat-message__author">
              Добрый день я нихуя не понимаю я тупое ебло вонючее
            </span>
            <span className="chat-message__time">10:11</span>
          </div>

          <div className="chat-message__bubble">
            <p>Помогите</p>
          </div>
        </div>
      </div>

      <div className="chat-message-input-wrapper ">

        <div className="select-image-wrapper G-align-center">
          <div className="select-image-cnt G-align-center">
            <div className="select-image-loader"></div>
            <div className="selected-image-info">
              <p>name-image-na.. .jpg</p>
              <span>JPEG · 123.3 КБ</span>
            </div>
            <i className="icon icon-close2"></i>
          </div>
          <div className="select-image-cnt G-align-center">
            <div className="select-image G-flex">
              <img width={38} height={38} src="/selectImage.jpg" alt="file" />
            </div>
            <div className="selected-image-info">
              <p>name-image-na.. .jpg</p>
              <span>JPEG · 123.3 КБ</span>
            </div>
            <i className="icon icon-close2"></i>
          </div>
        </div>

        <div className="chat-message-cnt G-align-end">
          <label className="chat-file-label">
            <input type="file" />
            <i className="icon icon-file"></i>
          </label>

          <label className="chat-message-label">
            <textarea
              ref={textareaRef}
              name="message"
              placeholder="Сообщение..."
              rows={1}
              onInput={handleInput}
            />
          </label>

          <div className="chat-message-tools G-align-center">
            <i className="icon icon-smiley"></i>
            <i className="icon icon-send"></i>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Chat;
