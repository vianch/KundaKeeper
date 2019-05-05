import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

import avatarStyles from "../../styles/components/avatar.scss";
import componentStyles from "../../styles/components/box-card.scss";
import menuStyles from "../../styles/components/menu.scss";
import responsiveStyles from "../../styles/layout/_responsive.scss";
import styles from "./users.scss";

const UsersComponent = (): ReactElement => {
  const [showMenu, setShowMenu] = useState("");

  const toggleMenu = () => {
    setShowMenu(showMenu.length > 0 ? "" : styles.showMenu);
  };

  return (
    <div className={`${responsiveStyles["column-3"]} ${styles.usersComponent}`}>
      <div className={`${componentStyles.boxCard} ${styles.userListTitle}`}>
        <figure
          className={`${avatarStyles.avatar} ${
            avatarStyles.avatarContainerSmall
          }`}
        >
          <img
            src="https://media.licdn.com/dms/image/C5103AQFgahLA9_pHdg/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=xtzf1-Pehj5t4AxnN4aXmm1hPShCcFGKqQzHmBhc_U0"
            alt="avatar"
            className={avatarStyles.userAvatar}
          />
        </figure>

        <div className={styles.menuContainer}>
          <i
            className={`${styles.settings} material-icons`}
            onClick={toggleMenu}
          >
            settings
          </i>
          <div className={`${menuStyles.menu} ${showMenu}`}>
            <ul className={menuStyles.menuItems}>
              <li className={menuStyles.menuItem}>
                <Link to="/">Wallet</Link>
              </li>
              <li className={menuStyles.menuItem}>
                <a
                  href="https://www.facebook.com/indigo.dreamer47/"
                  target="_blank"
                >
                  Pagar en Messenger
                </a>
              </li>
              <li className={menuStyles.menuItem}>
                <a href="/dashboard" target="_blank">
                  Dashboard
                </a>
              </li>
              <li className={menuStyles.menuItem}>
                <Link to="/">Salir</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ul className={styles.userList}>
        <li className={`${styles.user} ${styles.userActive}`}>
          <figure
            className={`${avatarStyles.avatar} ${
              avatarStyles.avatarContainerBig
            }`}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/kundalini-agent.appspot.com/o/minkalogo.jpg?alt=media&token=907b1a91-b400-496f-b9cb-bd9ce58afe2d"
              alt="avatar"
              className={avatarStyles.userAvatar}
            />
          </figure>

          <div className={styles.userInformation}>
            <div className={styles.userName}>Kunda pay</div>
            <div className={`${styles.userStatus} ${styles.online}`}>
              <i className={styles.dot}> </i> online
            </div>
          </div>
        </li>

        <li className={styles.user}>
          <figure
            className={`${avatarStyles.avatar} ${
              avatarStyles.avatarContainerBig
            }`}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/vianch-web.appspot.com/o/Screen%20Shot%202019-05-05%20at%202.09.40%20PM.png?alt=media&token=3837780e-6645-42ab-88e8-55329bf908ae"
              className={avatarStyles.userAvatar}
            />
          </figure>

          <div className={styles.userInformation}>
            <div className={styles.userName}>Minka Support</div>
            <div className={`${styles.userStatus} ${styles.offline}`}>
              <i className={styles.dot}> </i> offline
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { UsersComponent };
