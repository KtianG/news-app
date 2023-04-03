import css from "./SideMenu.module.css";
import countries from "../../../data/countries.json";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function SideMenu() {
  return (
    <nav className={css.nav}>
      <h2 className={css.title} data-testid="countries">
        Countries
      </h2>
      <ul className={css.list}>{countries.map(generateCountryListItem)}</ul>
    </nav>
  );
}

const StyledLink = styled(NavLink)`
  color: #020826;
  text-decoration: none;
  padding: 0;
  margin: 0;

  &.active {
    color: #f25042;
  }

  &.active > img {
    box-shadow: 1px 1px 5px #f25042, -1px -1px 5px #f25042;
  }
`;

function generateCountryListItem(country: { name: string; id: string }) {
  const { name, id } = country;
  const image = require(`../../../images/flags/${id}.svg`);
  return (
    <li className={css.item} key={id}>
      <StyledLink className={css.link} to={`/country/${name}`}>
        <img className={css.flag} src={image} alt={name} />
        <p className={css.name}>{name}</p>
      </StyledLink>
    </li>
  );
}
