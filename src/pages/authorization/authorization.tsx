import PrimaryAction from "../../UI/primaryAction/primaryAction";
import "./authorization.scss";
import { useState } from "react";

const Authorization = () => {
  const [remember, setRemember] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <>
      <section className="auth-section ">
        <div className="auth-contianer">
          <div className="auth-cnt">
            <div className="auth-cnt-titles">
              <h1>Авторизация в системе</h1>
              <p>Введите данные для входа</p>
            </div>

            <div className="auth-inputs-block">
              <label className="auth-label">
                <input
                  type="text"
                  name="login"
                  autoComplete="off"
                  placeholder="Логин"
                />
              </label>

              <label
                className={`auth-label auth-password-label ${
                  showPassword ? "active" : ""
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="off"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {password.length > 0 && (
                  <>
                    {!showPassword ? (
                      <i
                        className="icon icon-eye"
                        onClick={() => setShowPassword(true)}
                      ></i>
                    ) : (
                      <i
                        className="icon icon-eye2"
                        onClick={() => setShowPassword(false)}
                      ></i>
                    )}
                  </>
                )}
              </label>
            </div>

            <div
              className={`remember-block ${remember ? "active" : ""}`}
              onClick={() => setRemember((prev) => !prev)}
            >
              <div className="remember-icon-bg">
                <i className="icon icon-check"></i>
              </div>
              <p>Запомнить меня</p>
            </div>
            <PrimaryAction
              className="primary-link auth-link "
              to={"/allEmployeeChats"}
            >
              <span>Продолжить</span>
              <i className="icon icon-arrowRight"></i>
            </PrimaryAction>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authorization;
