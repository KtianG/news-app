import * as React from "react";
import { Link } from "react-router-dom";

import type { RootState } from "../../../reduxtkt/store";
import { useSelector, useDispatch } from "react-redux";
import { changeView } from "../../../reduxtkt/view/viewSlice";

import css from "./Header.module.css";
import list from "../../../images/icons/list.png";
import tile from "../../../images/icons/tile.png";

export const Header: React.FC = () => {
  const view = useSelector((state: RootState) => state.view);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link className={css.link} to={`/Home`}>
          <div className={css.logo} data-testid="logo">
            <h2>
              gn<span className={css.accent}>News</span>
            </h2>
          </div>
        </Link>
        <ul className={css.menu}>
          <li className={view.value === "list" ? css.active : css.item}>
            <img
              src={list}
              className={css.icon}
              alt="change view to list"
              onClick={() => dispatch(changeView("list"))}
            />
          </li>
          <li className={view.value === "grid" ? css.active : css.item}>
            <img
              src={tile}
              className={css.icon}
              alt="change view to grid"
              onClick={() => dispatch(changeView("grid"))}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};
