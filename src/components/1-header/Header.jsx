import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);

  /*  التلاعب بالخلفيه عن طريق تغير اسم الكلاس */
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark" /* قيمة احتياطيه */
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const onChangeThemeHandler = () => {
    localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
    setTheme(localStorage.getItem("currentMode"));
  };
  /*-------------------------------------------- */
  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Speaking</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex" onClick={onChangeThemeHandler}>
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Speaking</a>
            </li>
            <li>
              <a href="#">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
