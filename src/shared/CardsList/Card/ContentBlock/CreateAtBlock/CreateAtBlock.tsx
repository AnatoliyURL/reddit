import React from 'react';
import styles from './createatblock.css';
import { IPost } from '../../../../../hooks/usePostsData'

export function CreateAtBlock({dateCreate}:IPost) {
  return (
      <span className={styles.createAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
          {dateCreate}
      </span>
  );
}
