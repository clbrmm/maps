// Layout.js

import React from 'react';
import Link from 'next/link';
import styles from 'src/styles/Layout.module.css'; // Importa os estilos específicos do layout

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href='/about'>
                About
              </Link>
            </li>
            <li>
              <Link href='/maps'>
                Maps
              </Link>
              </li>
            {/* Adicione mais itens de navegação conforme necessário */}
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        {/* Rodapé com informações adicionais */}
      </footer>
    </div>
  );
};

export default Layout;
