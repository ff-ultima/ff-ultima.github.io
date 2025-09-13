import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import React, {useEffect, useState} from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="./img/preview.gif"></img>
        <p className="hero__subtitle">{siteConfig.tagline}..</p>
        <div className={styles.buttonRow}>
          <DocButton /><LatestReleaseButton /> <NeedHelpButton />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for the FF Ultima Firefox theme">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

function LatestReleaseButton() {
  const [version, setVersion] = useState('Latest Version ->');

  useEffect(() => {
    fetch('https://api.github.com/repos/soulhotel/FF-CSS-ULTIMA/releases/latest')
      .then(res => res.json())
      .then(data => setVersion(data.tag_name))
      .catch(() => {});
  }, []);

  return (
    <a
      className={styles.latestReleaseButton}
      href="https://github.com/soulhotel/FF-CSS-ULTIMA/releases/latest"
      target="_blank"
      rel="noopener noreferrer"
    >
      Download Version {version} ->
    </a>
  );
}

function NeedHelpButton() {
  return (
    <a
      className={styles.IssueButton}
      href="https://github.com/soulhotel/FF-ULTIMA/issues/new/choose"
      target="_blank"
      rel="noopener noreferrer"
    >
      Need More Help? ->
    </a>
  );
}

function DocButton() {
  return (
    <Link className={styles.DocButton} to="/docs/getting-started">
      View Help Docs ->
    </Link>
  );
}