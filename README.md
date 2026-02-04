# Remotion Scenes

🎬 **201+ professional motion graphics scenes** for [Remotion](https://www.remotion.dev/).

Ready-to-use animation components inspired by After Effects and professional video editing.

[![Live Preview](https://img.shields.io/badge/Live-Preview-6366f1?style=for-the-badge)](https://lifeprompt-team.github.io/remotion-scenes/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/lifeprompt-team/remotion-scenes?style=for-the-badge)](https://github.com/lifeprompt-team/remotion-scenes)

## ✨ Live Demo

** [https://lifeprompt-team.github.io/remotion-scenes/](https://lifeprompt-team.github.io/remotion-scenes/)**

Browse all 201 scenes with live preview player. Try before you use!

## 🎥 Preview

https://github.com/user-attachments/assets/d4c49d0e-71d7-4628-8de1-cbfa5c86c294

<p align="center"><em>Theme Animations - Cyberpunk, Y2K, Glassmorphism, and 30+ more styles</em></p>

## 🚀 Quick Start

### Option 1: Clone entire project

```bash
# Clone and run
npx degit lifeprompt-team/remotion-scenes my-video
cd my-video
npm install
npm run dev
```

### Option 2: Get specific category

```bash
# Get text animations only
npx degit lifeprompt-team/remotion-scenes/src/scenes/TextAnimations my-text-animations

# Get particle effects only
npx degit lifeprompt-team/remotion-scenes/src/scenes/ParticleAnimations my-particles
```

## 📦 Categories

| Category | Count | Description |
|----------|-------|-------------|
| [TextAnimations](./src/scenes/TextAnimations) | 12 | Kinetic typography, glitch, neon, typewriter |
| [ShapeAnimations](./src/scenes/ShapeAnimations) | 10 | Geometric animations, morphing, 3D cube |
| [TransitionAnimations](./src/scenes/TransitionAnimations) | 10 | Blinds, circle wipe, liquid morph |
| [DataAnimations](./src/scenes/DataAnimations) | 8 | Charts, gauges, stats cards |
| [EffectAnimations](./src/scenes/EffectAnimations) | 10 | Film grain, VHS, chromatic aberration |
| [UIAnimations](./src/scenes/UIAnimations) | 10 | Buttons, modals, toasts, forms |
| [LogoAnimations](./src/scenes/LogoAnimations) | 10 | Logo reveals, stroke, 3D rotate |
| [BackgroundAnimations](./src/scenes/BackgroundAnimations) | 10 | Gradients, aurora, mesh, grid |
| [ParticleAnimations](./src/scenes/ParticleAnimations) | 10 | Confetti, snow, fireworks, sakura |
| [CinematicAnimations](./src/scenes/CinematicAnimations) | 10 | Epic, horror, romance, sci-fi titles |
| [LayoutAnimations](./src/scenes/LayoutAnimations) | 12 | Asymmetric, split, off-grid layouts |
| [DemoAnimations](./src/scenes/DemoAnimations) | 12 | UI interactions, cursor, scroll |
| [ListAnimations](./src/scenes/ListAnimations) | 12 | Feature lists, timelines, comparisons |
| [ThemeAnimations](./src/scenes/ThemeAnimations) | 33 | Design themes: cyberpunk, minimalist, Y2K, etc. |
| [RollerAnimations](./src/scenes/RollerAnimations) | 22 | Text rollers, slot machines, countdowns |
| [LiquidAnimations](./src/scenes/LiquidAnimations) | 10 | Ink splash, blob, fluid waves |

**Total: 201 scenes**

## 🎥 Usage

### 1. Import individual components

```tsx
import { TextKinetic, TextGlitch } from "./scenes/TextAnimations";

export const MyVideo = () => (
  <AbsoluteFill>
    <Sequence from={0} durationInFrames={90}>
      <TextKinetic />
    </Sequence>
    <Sequence from={90} durationInFrames={90}>
      <TextGlitch />
    </Sequence>
  </AbsoluteFill>
);
```

### 2. Use the showcase component

Each category exports a Showcase component with all animations in sequence:

```tsx
import { TextShowcase, TEXT_SHOWCASE_DURATION } from "./scenes/TextAnimations";

// In Root.tsx
<Composition
  id="TextShowcase"
  component={TextShowcase}
  durationInFrames={TEXT_SHOWCASE_DURATION}
  fps={30}
  width={1920}
  height={1080}
/>
```

### 3. Run Remotion Studio

```bash
npm run dev
```

## 📁 Project Structure

```
remotion-scenes/
├── src/
│   ├── common/                    # Shared utilities
│   │   ├── colors.ts              # Color palette
│   │   ├── easing.ts              # Easing functions
│   │   ├── fonts.ts               # Font loading
│   │   ├── utils.ts               # Utility functions (lerp, etc.)
│   │   └── index.ts               # Re-exports
│   ├── scenes/
│   │   ├── TextAnimations/
│   │   │   ├── TextKinetic.tsx
│   │   │   ├── TextScramble.tsx
│   │   │   ├── ... (12 files)
│   │   │   └── index.ts           # Exports + Showcase
│   │   ├── ShapeAnimations/
│   │   ├── ... (16 categories)
│   │   └── ThemeAnimations/
│   ├── Root.tsx                   # All compositions registered
│   └── index.ts                   # Entry point
├── preview/                       # GitHub Pages preview site
├── remotion.config.ts
├── package.json
└── tsconfig.json
```

## ⚙️ Requirements

- Node.js 18+
- React 18+
- Remotion 4+

## 🎨 Customization

Each component uses shared utilities from `src/common/`:

```tsx
import { C, EASE, lerp, font } from "../../common";

// C = Colors
// EASE = Easing functions
// lerp = Linear interpolation
// font = Font family
```

For deeper customization, copy the component and modify directly.

## 🛠️ Scripts

```bash
npm run dev      # Start Remotion Studio
npm run build    # Bundle for production
npm run upgrade  # Upgrade Remotion
npm run lint     # Run linter
```

## 📄 License

MIT - Feel free to use in personal and commercial projects.

## 🤝 Contributing

PRs welcome! Please ensure new scenes follow the existing patterns:

1. One component per file
2. Import utilities from `../../common`
3. Export from category `index.ts`
4. Add to showcase

## 🙏 Credits

Built with [Remotion](https://www.remotion.dev/) by [Jonny Burger](https://twitter.com/JNYBGR).
