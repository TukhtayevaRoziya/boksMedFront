import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import { FaViber } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoStatsChart } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";

import logo from "../../assets/icons/logo.webp";

import styles from "./TopHeader.module.css";

const TopHeader: FC = () => {
  const data = [
    { id: 1, to: "/about", name: "О компании" },
    { id: 2, to: "/delivery", name: "Доставка" },
    { id: 3, to: "/delivery", name: "Оплата" },
    { id: 4, to: "/news", name: "Новости" },
    { id: 5, to: "/delivery", name: "Реквизиты" },
    { id: 6, to: "/contact", name: "Контакты" },
  ];

  const dataMap = data.map((d) => (
    <NavLink key={d.id} to={d.to}>
      {d.name}
    </NavLink>
  ));

  return (
    <>
      <div className={styles.body}>
        <img className={styles.img} src={logo} alt="" />
        <div className={styles.catalog}>
          <HiMenuAlt3 /> КАТАЛОГ
        </div>
        <div className={styles.search}>
          <BsSearch />
          <input type="search" placeholder="Поиск медицинского оборудования" />
        </div>
        <div className={styles.call}>
          <FiPhoneCall /> Заказать обратный звонок
        </div>
        <div className={styles.phone}>8 (3412) 65-08-77</div>
        <div className={styles.socialNetwork}>
          <h1>
            <FaViber />
          </h1>
          <h1>
            <BsTelegram />
          </h1>
          <h1>
            <BsWhatsapp />
          </h1>
        </div>
      </div>
      <div className={styles.navbar}>
        <div className={styles.navbar__main}>{dataMap}</div>
        <div className={styles.navbar__other}>
          <div className={styles.navbar__other__block}>
            <IoStatsChart />
            <h1>Сравнения</h1>
          </div>
          <div className={styles.navbar__other__block}>
            <FaShoppingCart />
            <h1>Корзина</h1>
          </div>
          <div className={styles.navbar__other__block}>
            <BsFillPersonLinesFill />
            <h1>Личный кабинет</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
