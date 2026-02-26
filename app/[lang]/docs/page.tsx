import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './docs.module.css';

export const metadata: Metadata = {
  title: 'Starphone API Documentation',
  description: 'Developer documentation for the Starphone API, including health checks, parrot mode, and sensor data ingest.',
};

export default function DocsPage() {
  return (
    <div className={styles.docsPage}>
      <div className={styles.container}>
        <h1>Starphone API Documentation</h1>
        <p className={styles.intro}>
          Welcome to the developer hub for Starphone. Access our public endpoints,
          integrate with our sensor network, or just play with the parrot.
        </p>

        <section className={styles.section}>
          <h2>Base URL</h2>
          <code className={styles.codeBlock}>https://www.thestarphone.com/api</code>
        </section>

        <section className={styles.section}>
          <h2>Endpoints</h2>

          <div className={styles.endpoint}>
            <h3>Health Check</h3>
            <span className={styles.method}>GET</span> <span className={styles.path}>/health</span>
            <p>Returns the current status, uptime, and version of the API.</p>
            <pre className={styles.responseBlock}>
{JSON.stringify({
  status: 'ok',
  uptime: 1234.56,
  timestamp: '2023-10-27T10:00:00Z',
  version: '2.0.0',
  message: 'Starphone API is operational'
}, null, 2)}
            </pre>
          </div>

          <div className={styles.endpoint}>
            <h3>Party Parrot</h3>
            <span className={styles.method}>GET</span> <span className={styles.path}>/parrot</span>
            <p>Returns a frame of the party parrot animation or signal strength visualization.</p>
            <h4>Parameters:</h4>
            <ul>
              <li><code>frame</code> (optional): Index of the frame (0-9).</li>
              <li><code>mode</code> (optional): Set to <code>signal</code> for signal strength bars.</li>
            </ul>
            <h4>Example:</h4>
            <code className={styles.codeBlock}>GET /api/parrot?mode=signal</code>
          </div>

          <div className={styles.endpoint}>
            <h3>Sensor Data (Internal)</h3>
            <span className={styles.method}>POST</span> <span className={styles.path}>/sensor-data</span>
            <p>Ingests telemetry from Starphone booths. Requires authentication.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>SEO & Metadata</h2>
          <p>We provide standard files for bots and LLMs:</p>
          <ul>
            <li><Link href="/robots.txt">robots.txt</Link></li>
            <li><Link href="/sitemap.xml">sitemap.xml</Link></li>
            <li><Link href="/llms.txt">llms.txt</Link> (Project Context)</li>
            <li><Link href="/llms-full.txt">llms-full.txt</Link> (Full Documentation)</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>JSON-LD Schema</h2>
          <p>
            All pages include structured data for <code>Organization</code>, <code>WebSite</code>,
            and <code>BreadcrumbList</code> to enhance search visibility.
          </p>
        </section>
      </div>
    </div>
  );
}
