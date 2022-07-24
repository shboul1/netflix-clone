// React
import { useState } from 'react';
// next
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// styles
import styles from './navbar.module.css';
import { magic } from '../../lib/magic-links';
export default function Navbar({ email, login }) {
  const [DropDownOpened, setDropDownOpened] = useState(false);
  const { push } = useRouter();
  const handleSignOut = async () => {
    const response = await magic.user.logout();
    if (response) {
      push('/login');
      setDropDownOpened(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link href="/" passHref>
          <a>
            <Image width={130} height={130} src="/static/netflix.svg" />
          </a>
        </Link>
      </div>
      {!login && (
        <>
          <ul className={styles.navbarLinks}>
            <li onClick={() => push('/')}>Home</li>
            <li onClick={() => push('/browse/my-list')}>My List</li>
          </ul>
          <div className={styles.email} onClick={() => setDropDownOpened(!DropDownOpened)}>
            {email ? email : 'Loading...'}
            <Image width={15} height={15} src="/static/expand_more.svg" />
            {DropDownOpened && (
              <div className={styles.dropDownContainer} onClick={handleSignOut}>
                Sign Out
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
