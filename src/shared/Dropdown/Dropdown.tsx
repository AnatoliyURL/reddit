import React from 'react';
import styles from './dropdown.css';

interface IDropsdownProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

const NOOP = () => {}

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropsdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen? onOpen() : onClose() , [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
      <div className={styles.container}>
        <div onClick={handleOpen}>
          {button}
        </div>
        {isDropdownOpen && (
            <div className={styles.listContainer}>
              <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                {children}
              </div>
            </div>
        )}
      </div>
  );
}
