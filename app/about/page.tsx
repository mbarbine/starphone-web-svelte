import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Starphone | Mission, Team & Vision',
  description: 'Learn about Starphone\'s mission to revolutionize public communication in extreme environments. Meet our team of innovators building the future of secure, reliable connectivity.',
  openGraph: {
    title: 'About Starphone | Mission, Team & Vision',
    description: 'Discover the team and vision behind Starphone\'s innovative communication solutions.',
    url: 'https://www.thestarphone.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>About Starphone</h1>
          <p className={styles.heroSubtitle}>
            Revolutionizing communication in extreme environments
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.missionContent}>
              <h2>Our Mission</h2>
              <p>
                Starphone is on a mission to provide secure, reliable communication in environments where traditional systems fail. From remote locations on Earth to the challenging conditions of space, we&apos;re building the next generation of public communication infrastructure.
              </p>
              <p>
                We believe that connectivity is a fundamental need, especially in critical situations. Whether it&apos;s during natural disasters, in remote wilderness areas, or even in future space settlements, Starphone ensures you can always reach who you need to reach.
              </p>
              <p className={styles.ph3arMention}>
                Starphone is a <a href="https://www.ph3ar.com/about" target="_blank" rel="noopener noreferrer"><strong>PH3AR</strong></a> project, part of our mission to build resilient technology for extreme environments and emerging frontiers.
              </p>
            </div>
            <div className={styles.missionImage}>
              <Image
                src="/images/starphone-big-black.png"
                alt="Starphone logo"
                width={500}
                height={400}
                className={styles.logoImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <div className={styles.container}>
          <h2>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Innovation</h3>
              <p>Pushing the boundaries of communication technology to solve real-world challenges.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Reliability</h3>
              <p>Building systems you can depend on when it matters most.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🛡️</div>
              <h3>Security</h3>
              <p>Protecting your privacy with industry-leading encryption and security practices.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌍</div>
              <h3>Accessibility</h3>
              <p>Making communication available to everyone, everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <h2>Meet the Founders</h2>
          <p className={styles.teamIntro}>
            The visionaries leading Starphone&apos;s mission
          </p>
          <div className={styles.foundersGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image
                  src="/images/team/michael-barbine.jpg"
                  alt="Michael Barbine"
                  width={300}
                  height={300}
                  className={styles.profilePhoto}
                  sizes="(max-width: 768px) 150px, 300px"
                />
              </div>
              <h3>Michael Barbine</h3>
              <p className={styles.memberRole}>Co-Founder & CEO</p>
              <p className={styles.memberBio}>
                Visionary leader driving innovation in communication technology with a passion for solving connectivity challenges in extreme environments.
              </p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image
                  src="/images/team/patrick-modin.jpg"
                  alt="Patrick Modin"
                  width={300}
                  height={300}
                  className={styles.profilePhoto}
                  sizes="(max-width: 768px) 150px, 300px"
                />
              </div>
              <h3>Patrick Modin</h3>
              <p className={styles.memberRole}>Co-Founder & CTO</p>
              <p className={styles.memberBio}>
                Technical expert ensuring reliability and security across all Starphone systems with deep expertise in communication infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className={styles.contributors}>
        <div className={styles.container}>
          <h2>Core Contributors</h2>
          <p className={styles.contributorsIntro}>
            Talented individuals who help make Starphone possible
          </p>
          <div className={styles.contributorsList}>
            <div className={styles.contributor}>
              <h4>Aurora Borealis</h4>
              <p>Lead Engineer</p>
            </div>
            <div className={styles.contributor}>
              <h4>Thundercat 1</h4>
              <p>Creative Director</p>
            </div>
            <div className={styles.contributor}>
              <h4>Thundercat 2</h4>
              <p>UX Designer</p>
            </div>
            <div className={styles.contributor}>
              <h4>Grannie May</h4>
              <p>Operations Manager</p>
            </div>
            <div className={styles.contributor}>
              <h4>Kelly</h4>
              <p>Marketing Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Want to Learn More?</h2>
          <p>Explore our journey, technology, and vision for the future of communication.</p>
          <div className={styles.ctaActions}>
            <Link href="/history" className={styles.ctaButton}>
              Our History
            </Link>
            <Link href="/how-it-works" className={styles.ctaButton}>
              How It Works
            </Link>
            <Link href="/contact" className={styles.ctaButtonSecondary}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

