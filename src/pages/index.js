import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, {useEffect, useState} from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="./img/preview.gif" alt="Preview"></img>
        <p className="hero__subtitle">{siteConfig.tagline}..</p>
        <div className={styles.buttonRow}>
          <DocButton />
          <LatestReleaseButton />
          <NeedHelpButton />
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
      description="The Firefox theme with too many options">
      <HomepageHeader />
      <ExpandableReleaseNotes />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

function ExpandableReleaseNotes() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [releaseNotes, setReleaseNotes] = useState(null);
  const [loading, setLoading] = useState(false);
  const contentRef = React.useRef(null);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Fetch release notes
    if (!isExpanded && !releaseNotes) {
      setLoading(true);
      fetch('https://api.github.com/repos/soulhotel/FF-CSS-ULTIMA/releases/latest')
        .then(res => res.json())
        .then(data => {
          setReleaseNotes(data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    // Scroll
    if (!isExpanded) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
        setTimeout(() => {
          window.scrollBy({ top: -210, behavior: 'smooth' });
        }, 300);
      }, 100);
    }
  };
  return (
    <>
      {/* Expanded Release Notes */}
      <div 
        className={clsx(styles.expandTrigger, isExpanded && styles.expanded)}
        onClick={toggleExpand}
        onKeyDown={(e) => e.key === 'Enter' && toggleExpand()}
        role="button"
        tabIndex={0}
        aria-label={isExpanded ? "Hide release notes" : "Show release notes"}
      >
        <svg 
          className={styles.arrowIcon}
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      {/* Release Notes Section */}
      <div 
        ref={contentRef}
        className={clsx(styles.releaseNotesContainer, isExpanded && styles.show)}
      >
        <div className={styles.releaseNotesContent}>
          {loading ? (
            <div className={styles.loading}>Loading release notes...</div>
          ) : releaseNotes ? (
            <>
              <h2 className={styles.releaseTitle}>
                Latest Release: {releaseNotes.tag_name}
              </h2>
              <div className={styles.releaseDate}>
                Released on {new Date(releaseNotes.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className={styles.releaseBody}>
                <Markdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    a: ({node, children, href, ...props}) => {
                      // Check if link is a video file or GitHub asset
                      const isVideo = href && (
                        /\.(mp4|webm|ogg|mov)$/i.test(href) ||
                        href.includes('github.com/user-attachments/assets')
                      );
                      
                      if (isVideo) {
                        return (
                          <video 
                            controls 
                            style={{maxWidth: '100%', borderRadius: '8px', marginTop: '1rem', marginBottom: '1rem'}}
                            src={href}
                          >
                            Your browser does not support the video tag.
                          </video>
                        );
                      }
                      // Regular link
                      return <a href={href} {...props}>{children}</a>;
                    }
                  }}
                >
                  {releaseNotes.body 
                    ? releaseNotes.body
                        .replace(/<!--[\s\S]*?-->/g, '')
                        .replace(/\*\*\s*\n\s*/g, '** ')
                        .replace(
                          /(https:\/\/github\.com\/user-attachments\/assets\/[a-zA-Z0-9-]+)/g,
                          '<video controls style="max-width: 100%; border-radius: 8px; margin: 1rem 0;" src="$1">Your browser does not support the video tag.</video>'
                        )
                    : '...'
                  }
                </Markdown>
              </div>
              <a 
                href={releaseNotes.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.viewOnGithub}
              >
                View on GitHub →
              </a>
            </>
          ) : (
            <div>...</div>
          )}
        </div>
      </div>
    </>
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