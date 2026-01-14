"use client";

import { Typography, Space, Button, Divider } from "antd";
import { InstagramOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./page.module.css";

const { Title, Text, Paragraph } = Typography;

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Space
          direction="vertical"
          align="center"
          size="middle"
          className={styles.content}
        >
          <Title level={1} className={styles.name}>
            Ben Havis
          </Title>

          <Text className={styles.bioLabel}>Screenwriter</Text>

          <Divider className={styles.divider} />

          <Paragraph className={styles.bio}>
            Ben Havis is a screenwriter whose work centers on character and
            situation. His scripts are built around clear, contained premises
            and progress through interaction, tension, and narrative momentum.
            He places emphasis on structure, pacing, and scene construction,
            developing stories that move deliberately. His approach prioritizes
            clarity on the page and precision in execution.
          </Paragraph>

          <section className={styles.preview} aria-label="Selected work">
            <Text className={styles.previewLabel}>Selected work</Text>

            <div className={styles.previewItem}>
              <Text className={styles.previewTitle}>12 Minutes</Text>
              <Text className={styles.previewMeta}>
                Finalist / Award Nominee, Indie Short Fest (January 2026)
              </Text>
            </div>

            <div className={styles.previewItem}>
              <Text className={styles.previewTitle}>Rostam</Text>
              <Text className={styles.previewMeta}>
                Finalist, Oniros Film Awards (December 2025)
              </Text>
            </div>
          </section>

          <Space size="middle" className={styles.ctas}>
            <Link href="/scripts">
              <Button type="primary">Scripts</Button>
            </Link>

            <Link href="mailto:ben.havis1@gmail.com">
              <Button>Contact</Button>
            </Link>
          </Space>

          <Link
            href="https://instagram.com/benxa20"
            target="_blank"
            className={styles.social}
          >
            <InstagramOutlined />
          </Link>
        </Space>
      </main>
    </div>
  );
}