import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// FORWARD-DEP(001-migracao-vitepress-docusaurus/FD-1): página inicial provisória, que existe
// porque a marca da navbar e as trilhas de navegação apontam para `/` e o build falha com link
// quebrado sem ela; substituir pela home definitiva entregue em T18. Ver forward-deps.md.
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className="container margin-vert--lg">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </main>
    </Layout>
  );
}
