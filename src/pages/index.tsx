import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

type Card = {
  key: string;
  to?: string;
  href?: string;
  title: ReactNode;
  text: ReactNode;
};

const cards: Card[] = [
  {
    key: 'radar',
    href: 'https://techradar.db1.com.br',
    title: (
      <Translate id="home.card.radar.title">Radar de tecnologia</Translate>
    ),
    text: (
      <Translate id="home.card.radar.text">
        Aproveite e confira nosso radar de tecnologia, com nossas opiniões sobre
        o linguagem, frameworks e ferramentas
      </Translate>
    ),
  },
  {
    key: 'easy-monitor',
    to: '/dgs-components/easy-monitor/introduction',
    title: 'Easy Monitor',
    text: (
      <Translate id="home.card.easyMonitor.text">
        Um Acelerador que com poucos comandos, você consegue subir uma stack
        completa de observabilidade
      </Translate>
    ),
  },
  {
    key: 'easy-docs',
    to: '/dgs-components/easy-docs/introduction',
    title: 'Easy Docs',
    text: (
      <Translate id="home.card.easyDocs.text">
        Um Acelerador para facilitar a criação de PDFs com base em templates
        React.
      </Translate>
    ),
  },
];

function Hero(): ReactNode {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.name}>
          DB1 Itênex
        </Heading>
        <p className={styles.text}>
          <Translate id="home.hero.text">Guia de engenharia</Translate>
        </p>
        <p className={styles.tagline}>
          <Translate id="home.hero.tagline">
            para compartilhar e, além disso, expressar nossa forte opinião sobre
            como o software deve ser feito
          </Translate>
        </p>
        <div className={styles.actions}>
          <Link
            className={styles.brandButton}
            to="/docs/engineering/db1-way">
            <Translate id="home.hero.guide">O Guia</Translate>
          </Link>
          <Link
            className={styles.altButton}
            to="/dgs-components/easy-monitor/introduction">
            <Translate id="home.hero.accelerators">
              Nossos Aceleradores
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Hero />
      <main className={styles.features}>
        {cards.map((card) => (
          <Link
            key={card.key}
            className={styles.card}
            {...(card.href
              ? {href: card.href, target: '_blank', rel: 'noopener noreferrer'}
              : {to: card.to})}>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardText}>{card.text}</p>
          </Link>
        ))}
      </main>
    </Layout>
  );
}
