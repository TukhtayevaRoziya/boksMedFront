import React from "react";

import { FaViber } from "react-icons/fa";
import { BsTelegram, BsWhatsapp } from "react-icons/bs";

import logo from "../../assets/icons/logo.webp";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_distributed}>
      <div className={styles.footer_left}>
        <h3>
          <img src={logo} alt="" />
        </h3>

        <p className={styles.footer_links}>
          <a href="/" className={styles.link_1}>
            О компании
          </a>

          <a href="/">Доставка</a>

          <a href="/">Оплата</a>

          <a href="/">Новости</a>

          <a href="/">Реквизиты</a>

          <a href="/">Контакты</a>
        </p>

        <p className={styles.footer_company_name}>Company Name © 2015</p>
      </div>

      <div className={styles.footer_center}>
        <div>
          <i className={styles.fa + " " + styles.fa_map_marker}></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className={styles.fa + " " + styles.fa_phone}></i>
          <p>+8 (3412) 65-08-77</p>
        </div>

        <div>
          <i className={styles.fa + " " + styles.fa_envelope}></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div className={styles.footer_right}>
        <p className={styles.footer_company_about}>
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className={styles.footer_icons}>
          <a href="/">
            <FaViber />
          </a>
          <a href="/">
            <BsTelegram />
          </a>
          <a href="/">
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
