import React from 'react';
import styles from './menublock.css';
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "./MenuItemsList";
import {EColor, Text} from "../../../Text";
import {EIcon, Icon} from "../../../Icon";

export function MenuBlock() {
  return (
      <div className={styles.menu}>
          <Dropdown button={<button className={styles.menuButton}>
              <Icon name={EIcon.menu} size={[5, 20]}/>
          </button>} >
              <div className={styles.dropdown}>
                  <MenuItemsList postId={'123'}/>
                  <button className={styles.closeButton}>
                      <Text mobileSize={12} size={14} color={EColor.grey66}>
                          Закрыть
                      </Text>
                  </button>
              </div>
          </Dropdown>

      </div>
  );
}
