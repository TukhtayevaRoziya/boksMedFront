import React from "react";

import logo from '../../assets/icons/logo.webp'

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_distributed}>
      <div className={styles.footer_left}>
        <h3>
          <img src={logo} alt=''/>
        </h3>

        <p className={styles.footer_links}>
          <a href="/" className={styles.link_1}>
            Home
          </a>

          <a href="/">Blog</a>

          <a href="/">Pricing</a>

          <a href="/">About</a>

          <a href="/">Faq</a>

          <a href="/">Contact</a>
        </p>

        <p className={styles.footer_company_name}>Company Name © 2015</p>
      </div>

      <div className={styles.footer_center}>
        <div>
          <i className={styles.fa + ' ' +  styles.fa_map_marker}></i>
          <p>
            <span>444 S. Cedros Ave</span> Solana Beach, California
          </p>
        </div>

        <div>
          <i className={styles.fa +' ' + styles.fa_phone}></i>
          <p>+1.555.555.5555</p>
        </div>

        <div>
          <i className={styles.fa + ' ' + styles.fa_envelope}></i>
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
            <i className={styles.fa + ' ' + styles.fa_facebook}></i>
          </a>
          <a href="/">
            <i className={styles.fa + ' ' + styles.fa_twitter}></i>
          </a>
          <a href="/">
            <i className={styles.fa + ' ' + styles.fa_linkedin}></i>
          </a>
          <a href="/">
            <i className={styles.fa + ' ' + styles.fa_github}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
