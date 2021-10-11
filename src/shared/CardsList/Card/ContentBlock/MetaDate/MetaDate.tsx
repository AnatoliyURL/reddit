import React from 'react';
import styles from './metadate.css';
import {UserLink} from "../UserLink";
import {CreateAtBlock} from "../CreateAtBlock";
import { IPost } from '../../../../../hooks/usePostsData'

export function MetaDate({userUrl, userScrAva, userName, dateCreate}:IPost) {
  return (
      <div className={styles.metaDate}>
        <UserLink userUrl={userUrl} userScrAva={userScrAva} userName={userName}/>
        <CreateAtBlock dateCreate={dateCreate}/>
      </div>
  );
}
