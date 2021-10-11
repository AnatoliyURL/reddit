import React from 'react';
import styles from './userlink.css';
import { IPost } from '../../../../../hooks/usePostsData'

export function UserLink({userUrl, userScrAva, userName}:IPost) {
  return (
      <div className={styles.userLink}>
        <img
            className={styles.avatar}
            src={userScrAva}
            alt="avatar"
        />
        <a href={userUrl} className={styles.username}>{userName}</a>
      </div>
  );
}
