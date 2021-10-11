import React from 'react';
import styles from './card.css';
import {MenuBlock} from "./MenuBlock";
import {Controls} from "./Controls";
import {Preview} from "./Preview";
import {ContentBlock} from "./ContentBlock";
import { IPost } from '../../../hooks/usePostsData'

export function Card({userUrl, userScrAva, userName, dateCreate, postHref, postTitle, postPreviewSrc}: IPost) {
  return (
    <li className={styles.card}>
        <ContentBlock userUrl={userUrl} userScrAva={userScrAva} userName={userName} dateCreate={dateCreate} postHref={postHref} postTitle={postTitle}/>
        <Preview postPreviewSrc={postPreviewSrc} />
        <MenuBlock />
        <Controls />
    </li>
  );
}
