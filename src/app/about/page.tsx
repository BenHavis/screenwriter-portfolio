"use client";
import { Typography, Space } from "antd";
import styles from "./about.module.css";

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Space direction="vertical" size="large" className={styles.content}>
          <Title level={2} className={styles.heading}>
            About Me:
          </Title>
          <Paragraph className={styles.text}>
            I write short-form narrative scripts with a focus on structure,
            pacing, and scene construction. My work tends toward contained
            premises—single locations, limited casts, compressed timeframes—where
            the writing has to carry the story.
          </Paragraph>
          <Paragraph className={styles.text}>
            Two scripts have reached finalist status: 12 Minutes at Indie Short
            Fest and Rostam at Oniros Film Awards. I'm currently preparing to
            produce the first as a short film.
          </Paragraph>
          <Paragraph className={styles.text}>
            Scripts available on request.
          </Paragraph>
        </Space>
      </main>
    </div>
  );
}