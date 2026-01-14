"use client";

import { Typography, Space } from "antd";
import styles from "./scripts.module.css";

const { Title, Text, Paragraph } = Typography;

type Script = {
  title: string;
  description: string;
  recognition: string;
};

const scripts: Script[] = [
  {
    title: "12 Minutes",
    description: `A short script following Viktor Brandt, a once-feared actor whose
    carefully cultivated eruptions no longer command attention. Set across a
    rehearsal space, his apartment, and a theater dressing room, the script
    observes Viktor as he continues to perform authority and volatility in
    environments that now respond with indifference. As his outbursts fail to
    produce fear, apology, or correction, Viktor is forced to confront a quieter
    reality in which restraint offers no redemption, only the slow end of damage.`,
    recognition:
      "Finalist / Award Nominee — Indie Short Fest (January 2026)",
  },
  {
    title: "Rostam",
    description: `Rostam is a short dramatic adaptation that follows the parallel paths of Rostam, a seasoned warrior defined by 
    reputation and restraint, and Sohrab, the son he does not know he has. The script moves between a battlefield aftermath, Rostam’s
     brief encounter with Tahmineh years earlier, and Sohrab’s upbringing and training under her guidance, tracing how knowledge, absence,
      and legend shape both men toward an inevitable meeting. Their eventual confrontation unfolds as a prolonged duel marked by 
      recognition deferred too long, as habits, strength, and shared instincts surface without explanation. The revelation of their 
      relationship arrives only after the fatal blow has been struck, leaving Rostam to confront the consequence of a life spent
       separating action from acknowledgment.`,
    recognition:
      "Finalist — Oniros Film Awards (December 2025)",
  },
];

export default function Scripts() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Space orientation="vertical" size="large" className={styles.content}>
          <Title level={2} className={styles.heading}>
            Scripts
          </Title>

          {scripts.map((script) => (
            <section key={script.title} className={styles.script}>
              <Title level={4} className={styles.title}>
                {script.title}
              </Title>

              <Paragraph className={styles.description}>
                {script.description}
              </Paragraph>

              <Text className={styles.recognition}>
                {script.recognition}
              </Text>
            </section>
          ))}
        </Space>
      </main>
    </div>
  );
}
