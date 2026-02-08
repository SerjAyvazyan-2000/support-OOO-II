import Button from "../../UI/button/button";
import Modal from "../../UI/modal/modal";
import "./adminSortTags.scss";
import { useState } from "react";

type SortTagType = "incoming" | "return" | "later";
type SortTag = {
  id: number;
  type: SortTagType;
  title: string;
  icon: string;
  quantity: string;
  active?: boolean;
  actions?: boolean;
};
const AdminSortTags = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [isEditLabelOpen, setIsEditLabelOpen] = useState(false);
  const [isNewLabelOpen, setIsNewLabelOpen] = useState(false);

  const sortTags: SortTag[] = [
    {
      id: 1,
      type: "incoming",
      title: "Входящие",
      icon: "icon-messages2",
      quantity: "2 / 1034",
      active: true,
      actions: false,
    },
    {
      id: 2,
      type: "return",
      title: "Возврат",
      icon: "icon-close",
      quantity: "2",
      actions: true,
    },
    {
      id: 3,
      type: "later",
      title: "Позже",
      icon: "icon-time",
      quantity: "1",
      actions: true,
    },
  ];

  return (
    <>
      <div className="admin-sort-tags-wrapper">
        <div className="admin-sort-tags-titles G-align-center">
          <p>{isEditMode ? "Редактирование списка" : "Сортировка по меткам"}</p>

          <i
            className={`icon ${isEditMode ? "icon-close" : "icon-edit"}`}
            onClick={() => setIsEditMode((prev) => !prev)}
          ></i>
        </div>

        <div className="a-sort-tags-items G-flex-column">
          {sortTags.map((tag) => (
            <div
              className={`a-sort-tag-item a-${tag.type}-messages-item ${
                tag.active ? "active" : ""
              } G-align-center`}
            >
              <i className={`icon ${tag.icon}`}></i>

              <p className={`a-${tag.type}-message-title`}>{tag.title}</p>

              {!isEditMode || !tag.actions ? (
                <div className={`a-sort-tag-quantity a-${tag.type}-quantity`}>
                  <p>{tag.quantity}</p>
                </div>
              ) : null}

              {isEditMode && tag.actions && (
                <div className="a-sort-tag-actions G-align-center">
                  <i
                    onClick={() => setIsEditLabelOpen(!isEditLabelOpen)}
                    className="icon icon-edit"
                  ></i>
                  <i
                    onClick={() => setIsRemoveOpen(!isRemoveOpen)}
                    className="icon icon-basket"
                  ></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          onClick={() => setIsNewLabelOpen(!isNewLabelOpen)}
          className="admin-add-tag G-align-center"
        >
          <i className="icon icon-plus"></i>
          <p>Добавить метку</p>
        </div>
      </div>

      <Modal
        className={"modal-remove-tag-cnt"}
        isOpen={isRemoveOpen}
        onClose={() => setIsRemoveOpen(false)}
      >
        <h3 className="modal-cnt-title">
          Вы уверены,что хотите{" "}
          <span className="text-wrap">удалить метку?</span>
        </h3>
        <p className="modal-cnt-text">
          При удалении метка автоматически исчезнет из всех диалогов, в которых
          она была проставлена
        </p>

        <div className="modal-remove-actions G-align-center">
          <Button variant="gray" onClick={() => setIsRemoveOpen(false)}>
            Нет, я передумал
          </Button>

          <Button variant="black">Да, удалить метку</Button>
        </div>
      </Modal>

      <Modal
        className={"modal-edit-tag-cnt"}
        isOpen={isEditLabelOpen}
        onClose={() => setIsEditLabelOpen(false)}
      >
        <h3 className="modal-cnt-title">Редактирование метки</h3>
        <div className="edit-label-tools">
          <div className="edit-label-input">
            <label>
              <i className="icon icon-time rose-color-icon"></i>
              <input
                value={"Позже"}
                name="text"
                type="text"
                autoComplete="off"
              />
            </label>
          </div>
          <div className="color-selection-block">
            <p className="color-selection-title">Выбор цвета</p>
            <div className="color-selection-items G-align-center">
              <div className="color-selection-item green-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item aqua-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item blue-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item active blueviolet-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item rose-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item red-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item orangered-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item gold-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-edit-actions G-align-center">
          <Button variant="gray" onClick={() => setIsEditLabelOpen(false)}>
            Отмена
          </Button>

          <Button variant="black">Сохранить</Button>
        </div>
        <i
          onClick={() => setIsEditLabelOpen(false)}
          className="icon icon-close modal-close"
        ></i>
      </Modal>

      <Modal
        className={"modal-new-tag-cnt"}
        isOpen={isNewLabelOpen}
        onClose={() => setIsNewLabelOpen(false)}
      >
        <h3 className="modal-cnt-title">Новая метка</h3>
        <div className="edit-label-tools">
          <div className="new-label-input">
            <label>
              <i className="icon icon-scriptSearch rose-color-icon"></i>
              <input
                placeholder={"Название метки"}
                name="text"
                type="text"
                autoComplete="off"
              />
            </label>
          </div>
          <div className="color-selection-block">
            <p className="color-selection-title">Выбор цвета</p>
            <div className="color-selection-items G-align-center">
              <div className="color-selection-item green-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item aqua-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item blue-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item active blueviolet-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item rose-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item red-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item orangered-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
              <div className="color-selection-item gold-color-item G-center">
                <i className="icon icon-check"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-edit-actions G-align-center">
          <Button variant="gray" onClick={() => setIsNewLabelOpen(false)}>
            Отмена
          </Button>

          <Button variant="black">Создать</Button>
        </div>
        <i
          onClick={() => setIsNewLabelOpen(false)}
          className="icon icon-close modal-close"
        ></i>
      </Modal>
    </>
  );
};

export default AdminSortTags;
