import css from "./Footer.module.css";

import { useSelector } from "react-redux";
import type { RootState } from "../../reduxtkt/store";

import { Clock } from "./Clock/Clock";

export function Footer() {
  const quantity = useSelector((state: RootState) => state.quantity);

  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <div className={css.clock}>
          <Clock />
        </div>
        <div className={css.info}>Found {quantity.value} relevant news</div>
      </div>
    </footer>
  );
}
