import React, { useState, useMemo } from "react";
import { Player } from "@remotion/player";

// Import all showcase components
import {
  TextShowcase,
  TEXT_SHOWCASE_DURATION,
} from "../../src/scenes/TextAnimations";
import {
  ShapeShowcase,
  SHAPE_SHOWCASE_DURATION,
} from "../../src/scenes/ShapeAnimations";
import {
  TransitionShowcase,
  TRANSITION_SHOWCASE_DURATION,
} from "../../src/scenes/TransitionAnimations";
import {
  DataShowcase,
  DATA_SHOWCASE_DURATION,
} from "../../src/scenes/DataAnimations";
import {
  EffectShowcase,
  EFFECT_SHOWCASE_DURATION,
} from "../../src/scenes/EffectAnimations";
import {
  UIShowcase,
  UI_SHOWCASE_DURATION,
} from "../../src/scenes/UIAnimations";
import {
  LogoShowcase,
  LOGO_SHOWCASE_DURATION,
} from "../../src/scenes/LogoAnimations";
import {
  BackgroundShowcase,
  BACKGROUND_SHOWCASE_DURATION,
} from "../../src/scenes/BackgroundAnimations";
import {
  ParticleShowcase,
  PARTICLE_SHOWCASE_DURATION,
} from "../../src/scenes/ParticleAnimations";
import {
  CinematicShowcase,
  CINEMATIC_SHOWCASE_DURATION,
} from "../../src/scenes/CinematicAnimations";
import {
  LayoutShowcase,
  LAYOUT_SHOWCASE_DURATION,
} from "../../src/scenes/LayoutAnimations";
import {
  DemoShowcase,
  DEMO_SHOWCASE_DURATION,
} from "../../src/scenes/DemoAnimations";
import {
  ListShowcase,
  LIST_SHOWCASE_DURATION,
} from "../../src/scenes/ListAnimations";
import {
  ThemeShowcase,
  THEME_SHOWCASE_DURATION,
} from "../../src/scenes/ThemeAnimations";
import {
  RollerShowcase,
  ROLLER_SHOWCASE_DURATION,
} from "../../src/scenes/RollerAnimations";
import {
  LiquidShowcase,
  LIQUID_SHOWCASE_DURATION,
} from "../../src/scenes/LiquidAnimations";

// Category definitions
const categories = [
  { id: "text", name: "Text", count: 12, component: TextShowcase, duration: TEXT_SHOWCASE_DURATION },
  { id: "shape", name: "Shape", count: 10, component: ShapeShowcase, duration: SHAPE_SHOWCASE_DURATION },
  { id: "transition", name: "Transition", count: 10, component: TransitionShowcase, duration: TRANSITION_SHOWCASE_DURATION },
  { id: "data", name: "Data", count: 8, component: DataShowcase, duration: DATA_SHOWCASE_DURATION },
  { id: "effect", name: "Effect", count: 10, component: EffectShowcase, duration: EFFECT_SHOWCASE_DURATION },
  { id: "ui", name: "UI", count: 10, component: UIShowcase, duration: UI_SHOWCASE_DURATION },
  { id: "logo", name: "Logo", count: 10, component: LogoShowcase, duration: LOGO_SHOWCASE_DURATION },
  { id: "background", name: "Background", count: 10, component: BackgroundShowcase, duration: BACKGROUND_SHOWCASE_DURATION },
  { id: "particle", name: "Particle", count: 10, component: ParticleShowcase, duration: PARTICLE_SHOWCASE_DURATION },
  { id: "cinematic", name: "Cinematic", count: 10, component: CinematicShowcase, duration: CINEMATIC_SHOWCASE_DURATION },
  { id: "layout", name: "Layout", count: 12, component: LayoutShowcase, duration: LAYOUT_SHOWCASE_DURATION },
  { id: "demo", name: "Demo", count: 12, component: DemoShowcase, duration: DEMO_SHOWCASE_DURATION },
  { id: "list", name: "List", count: 12, component: ListShowcase, duration: LIST_SHOWCASE_DURATION },
  { id: "theme", name: "Theme", count: 33, component: ThemeShowcase, duration: THEME_SHOWCASE_DURATION },
  { id: "roller", name: "Roller", count: 22, component: RollerShowcase, duration: ROLLER_SHOWCASE_DURATION },
  { id: "liquid", name: "Liquid", count: 10, component: LiquidShowcase, duration: LIQUID_SHOWCASE_DURATION },
];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const totalScenes = useMemo(
    () => categories.reduce((sum, cat) => sum + cat.count, 0),
    []
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>
          <span style={styles.titleAccent}>Remotion</span> Scenes
        </h1>
        <p style={styles.subtitle}>
          {totalScenes}+ professional motion graphics scenes
        </p>
        <div style={styles.links}>
          <a
            href="https://github.com/lifeprompt-team/remotion-scenes"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            ⭐ GitHub
          </a>
          <a
            href="https://www.remotion.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Built with Remotion
          </a>
        </div>
      </header>

      <div style={styles.main}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Categories</h2>
          <nav style={styles.nav}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                style={{
                  ...styles.navButton,
                  ...(selectedCategory.id === category.id
                    ? styles.navButtonActive
                    : {}),
                }}
              >
                <span>{category.name}</span>
                <span style={styles.badge}>{category.count}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Player */}
        <main style={styles.content}>
          <div style={styles.playerHeader}>
            <h2 style={styles.categoryTitle}>{selectedCategory.name} Animations</h2>
            <p style={styles.categoryDescription}>
              {selectedCategory.count} scenes • {Math.round(selectedCategory.duration / 30)}s total
            </p>
          </div>

          <div style={styles.playerWrapper}>
            <Player
              key={selectedCategory.id}
              component={selectedCategory.component}
              durationInFrames={selectedCategory.duration}
              compositionWidth={1280}
              compositionHeight={720}
              fps={30}
              style={styles.player}
              controls
              loop
              autoPlay
            />
          </div>

          <div style={styles.usage}>
            <h3 style={styles.usageTitle}>Quick Start</h3>
            <pre style={styles.code}>
{`# Get this category
npx degit lifeprompt-team/remotion-scenes/src/scenes/${selectedCategory.name}Animations my-${selectedCategory.id}-animations

# Import in your project
import { ${selectedCategory.name}Showcase } from "./${selectedCategory.name}Animations";`}
            </pre>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          MIT License • Made with ❤️ using{" "}
          <a href="https://www.remotion.dev" style={styles.footerLink}>
            Remotion
          </a>
        </p>
      </footer>
    </div>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    padding: "24px 32px",
    borderBottom: "1px solid #222",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  titleAccent: {
    color: "#6366f1",
  },
  subtitle: {
    color: "#888",
    fontSize: "14px",
    marginBottom: "12px",
  },
  links: {
    display: "flex",
    gap: "16px",
    justifyContent: "center",
  },
  link: {
    color: "#6366f1",
    textDecoration: "none",
    fontSize: "14px",
  },
  main: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: "220px",
    borderRight: "1px solid #222",
    padding: "20px",
    flexShrink: 0,
  },
  sidebarTitle: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: "#666",
    marginBottom: "12px",
    letterSpacing: "0.5px",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  navButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 12px",
    background: "transparent",
    border: "none",
    borderRadius: "6px",
    color: "#ccc",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "left",
    transition: "all 0.15s",
  },
  navButtonActive: {
    background: "#6366f1",
    color: "#fff",
  },
  badge: {
    fontSize: "12px",
    opacity: 0.7,
  },
  content: {
    flex: 1,
    padding: "24px 32px",
    overflow: "auto",
  },
  playerHeader: {
    marginBottom: "20px",
  },
  categoryTitle: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "4px",
  },
  categoryDescription: {
    color: "#888",
    fontSize: "14px",
  },
  playerWrapper: {
    background: "#111",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "24px",
    border: "2px solid #333",
  },
  player: {
    width: "100%",
    aspectRatio: "16/9",
  },
  usage: {
    background: "#111",
    borderRadius: "8px",
    padding: "16px",
  },
  usageTitle: {
    fontSize: "14px",
    color: "#888",
    marginBottom: "12px",
  },
  code: {
    background: "#0a0a0a",
    padding: "12px",
    borderRadius: "6px",
    fontSize: "13px",
    color: "#6366f1",
    overflow: "auto",
    whiteSpace: "pre-wrap",
    fontFamily: "'SF Mono', Monaco, monospace",
  },
  footer: {
    padding: "16px",
    borderTop: "1px solid #222",
    textAlign: "center",
    color: "#666",
    fontSize: "13px",
  },
  footerLink: {
    color: "#6366f1",
    textDecoration: "none",
  },
};

export default App;
