import "./infoTooltip.scss";

export interface InfoTooltipProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="info-tooltip ">
      <div className="info-tooltip-header G-align-center">
        <i className="icon icon-info"></i>
        <h4 className="info-tooltip-title">Пока нет клиентов в очереди</h4>
      </div>

            <p className="info-tooltip-text">
          Все текущие клиенты обработаны. Как только поступят новые обращения,
          они сразу появятся в этом списке.
        </p>

      <i  onClick={onClose} className="icon info-tooltip-close icon-close"></i>
    </div>
  );
};

export default InfoTooltip;
