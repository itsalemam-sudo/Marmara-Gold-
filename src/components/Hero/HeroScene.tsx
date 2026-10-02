import styles from "./HeroScene.module.css";

/**
 * Hero visual — the client's Fine Silver 1 oz coin photograph,
 * cleanly background-removed with a neural matting model (rembg
 * isnet-general-use), rendered directly against the navy hero
 * with a soft gold glow behind it and a gentle levitation loop.
 *
 * Previous attempts stumbled on the plastic capsule the coin
 * sits inside — threshold-based alpha removal couldn't tell
 * reflections from backdrop, leaving jagged artefacts. The
 * neural pass preserves the capsule rim and the subtle shadow
 * under the coin while cleanly killing the studio white.
 */
export function HeroScene() {
  return (
    <div className={styles.wrap} aria-hidden>
      <ConstellationBackdrop />
      <div className={styles.coinGlow} />
      <img
        src="/products/marmara-silver-1oz.webp"
        alt=""
        width="913"
        height="897"
        decoding="async"
        fetchPriority="high"
        className={styles.coin}
      />
    </div>
  );
}

/** 24 deterministic star positions across the hero backdrop. */
function ConstellationBackdrop() {
  const stars = [
    { l: "8%",  t: "18%", d: "0.4s"  }, { l: "18%", t: "72%", d: "1.2s" },
    { l: "24%", t: "35%", d: "2.1s"  }, { l: "31%", t: "88%", d: "0.9s" },
    { l: "38%", t: "22%", d: "1.8s"  }, { l: "44%", t: "58%", d: "2.6s" },
    { l: "52%", t: "12%", d: "0.7s"  }, { l: "58%", t: "80%", d: "1.5s" },
    { l: "65%", t: "28%", d: "2.3s"  }, { l: "72%", t: "64%", d: "1.0s" },
    { l: "78%", t: "16%", d: "2.0s"  }, { l: "84%", t: "84%", d: "0.5s" },
    { l: "90%", t: "44%", d: "1.7s"  }, { l: "6%",  t: "46%", d: "2.4s" },
    { l: "14%", t: "88%", d: "0.6s"  }, { l: "42%", t: "82%", d: "1.9s" },
    { l: "50%", t: "40%", d: "2.5s"  }, { l: "60%", t: "48%", d: "1.1s" },
    { l: "68%", t: "40%", d: "0.8s"  }, { l: "76%", t: "52%", d: "2.2s" },
    { l: "88%", t: "24%", d: "1.4s"  }, { l: "92%", t: "72%", d: "1.3s" },
    { l: "12%", t: "60%", d: "1.6s"  }, { l: "20%", t: "10%", d: "2.7s" },
  ];
  return (
    <div className={styles.constellation}>
      {stars.map((s, i) => (
        <span
          key={i}
          className={styles.star}
          style={{ left: s.l, top: s.t, animationDelay: s.d }}
        />
      ))}
    </div>
  );
}
