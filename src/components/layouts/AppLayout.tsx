import React, { ReactNode, useEffect } from 'react';

import classNames from 'classnames';
import throttle from 'lodash/throttle';
import { useMediaQuery } from 'react-responsive';

import useAppContext from '../customHooks/useAppContext';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

import styles from '../../styles/AppLayout.module.css';

type Props = { children: ReactNode }

export default function AppLayout({ children }: Props) {
  const { isMenuCollapsed, handleIsMenuCollapsed } = useAppContext();
  const isDesktop = useMediaQuery({
    query: '(min-width: 576px)'
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth >= 1000 && isMenuCollapsed) {
        handleIsMenuCollapsed();
      }
      if (window.innerWidth < 1000 && !isMenuCollapsed) {
        handleIsMenuCollapsed();
      }
    });

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuCollapsed, handleIsMenuCollapsed]);

  return (
    <>
      <Sidebar isMenuCollapsed={true} />
      <div
        className={classNames(styles.MainLayout, {
          [styles.sidebarIsOpen]: !isMenuCollapsed
        })}
      >
        
        {isDesktop ? <Navbar  /> : <MobileNavbar />}
        <main id="AppWrapper" className={styles.MainContent}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
