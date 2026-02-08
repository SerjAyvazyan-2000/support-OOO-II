import './search.scss'

type ChatSearchProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

const ChatSearch: React.FC<ChatSearchProps> = ({
  placeholder = "Поиск...",
  value,
  onChange,
}) => {
  return (
    <div className="employee-chats-search">
      <label>
        <i className="icon icon-search"></i>
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </label>
    </div>
  );
};

export default ChatSearch;