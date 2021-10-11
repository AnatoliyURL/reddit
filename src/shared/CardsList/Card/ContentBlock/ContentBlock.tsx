import React from 'react';
import styles from './contentblock.css';
import {TitleBlock} from "./TitleBlock";
import {MetaDate} from "./MetaDate";
import { IPost } from '../../../../hooks/usePostsData'

export function ContentBlock({userUrl, userScrAva, userName, dateCreate, postHref, postTitle}: IPost) {
  return (
      <div className={styles.textContent}>
        <MetaDate userUrl={userUrl} userScrAva={userScrAva} userName={userName} dateCreate={dateCreate}/>
        <TitleBlock postTitle={postTitle} postHref={postHref}/>
      </div>
  );
}
