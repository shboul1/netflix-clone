// React
import { useState } from 'react';
// next
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
// styles
import styles from './navbar.module.css';

export default function Navbar(props) {
  const [DropDownOpened, setDropDownOpened] = useState(false);
  const { push } = useRouter();
  const handleSignOut = () => {
    console.log('Signed out');
    setDropDownOpened(false);
  };
  const { email } = props;
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Link href="/">
          <Image width={130} height={130} src="/static/netflix.svg" />
        </Link>
      </div>
      <ul className={styles.navbarLinks}>
        <li onClick={() => push('/')}>Home</li>
        <li onClick={() => push('/browse/my-list')}>My List</li>
      </ul>
      <p className={styles.email} onClick={() => setDropDownOpened(!DropDownOpened)}>
        {email}
        <Image width={15} height={15} src="/static/expand_more.svg" />
        {DropDownOpened && (
          <div className={styles.dropDownContainer} onClick={handleSignOut}>
            Sign Out
          </div>
        )}
      </p>
    </div>
  );
}
