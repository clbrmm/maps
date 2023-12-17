// Layout.js

import React from 'react';
import Link from 'next/link';
import styles from './Layout.module.css'; // Importa os estilos específicos do layout

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
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
