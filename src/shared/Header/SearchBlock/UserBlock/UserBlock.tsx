import React from 'react';
import styles from './userblock.css';
import {EColor, Text} from "../../../Text";
import {EIcon, Icon} from "../../../Icon";

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
      <a
        href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_stringG&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`}
        className={styles.userBox}
      >
          <div className={styles.avatarBox}>
            {avatarSrc
                ? <img src={avatarSrc} alt="user avatar" />
                : <Icon name={EIcon.avatarNone} size={[50,50]} />
            }
          </div>

          <div className={styles.username}>
            <Text size={20} color={EColor.black}>{username || 'Аноним'}</Text>
          </div>
      </a>
  );
}
