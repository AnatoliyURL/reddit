import React from 'react';
import styles from './preview.css';
import { IPost } from '../../../../hooks/usePostsData'

export function Preview({postPreviewSrc}: IPost) {
  return (
      <div className={styles.preview}>
        <img
            className={styles.previewImg}
            src={postPreviewSrc}
        />
      </div>
  );
}
