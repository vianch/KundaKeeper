import React, { ReactElement } from "react";

import avatarStyles from "../../styles/components/avatar.scss";
import componentStyles from "../../styles/components/box-card.scss";
import responsiveStyles from "../../styles/layout/_responsive.scss";
import styles from "./users.scss";

const UsersComponent = (): ReactElement => (
  <div className={`${responsiveStyles["column-3"]} ${styles.usersComponent}`}>
    <div className={`${componentStyles.boxCard} ${styles.userListTitle}`}>
      <figure
        className={`${avatarStyles.avatar} ${
          avatarStyles.avatarContainerSmall
        }`}
      >
        <img
          src="https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb"
          alt="avatar"
          className={avatarStyles.userAvatar}
        />
      </figure>

      <i className={`${styles.settings} material-icons`}>settings</i>
    </div>

    <ul className={styles.userList}>
      <li className={`${styles.user} ${styles.userActive}`}>
        <figure
          className={`${avatarStyles.avatar} ${
            avatarStyles.avatarContainerBig
          }`}
        >
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
            alt="avatar"
            className={avatarStyles.userAvatar}
          />
        </figure>

        <div className={styles.userInformation}>
          <div className={styles.userName}>Minka pay</div>
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
            src="https://randomuser.me/api/portraits/men/32.jpg"
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

export { UsersComponent };
