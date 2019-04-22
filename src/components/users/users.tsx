import React, { ReactElement } from "react";

import responsiveStyles from "../../styles/layout/_responsive.scss";
import styles from "./users.scss";

const UserComponent = (): ReactElement => (
  <div className={`${responsiveStyles["column-3"]} ${styles.usersComponent}`}>
    <div className={styles.userTitle}>
      <div className={`${styles.avatar} ${styles.avatarContainerSmall}`}>
        <img
          src="https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?h=350&auto=compress&cs=tinysrgb"
          alt="avatar"
          className={styles.userAvatar}
        />
      </div>

      <i className={`${styles.settings} material-icons`}>settings</i>
    </div>

    <ul className={styles.userList}>
      <li className={styles.user}>
        <div className={`${styles.avatar} ${styles.avatarContainerBig}`}>
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
            alt="avatar"
            className={styles.userAvatar}
          />
        </div>

        <div className={styles.userInformation}>
          <div className={styles.userName}>Chat Bot</div>
          <div className={`${styles.userStatus} ${styles.online}`}>
            <i className={styles.dot}> </i> online
          </div>
        </div>
      </li>

      <li className={styles.user}>
        <div className={`${styles.avatar} ${styles.avatarContainerBig}`}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className={styles.userAvatar}
          />
        </div>

        <div className={styles.userInformation}>
          <div className={styles.userName}>Victor Bot</div>
          <div className={`${styles.userStatus} ${styles.offline}`}>
            <i className={styles.dot}> </i> offline
          </div>
        </div>
      </li>
    </ul>
  </div>
);

export { UserComponent };
