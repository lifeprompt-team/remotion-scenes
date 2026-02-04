# Contributing to Remotion Scenes

Thank you for your interest in contributing! This project welcomes contributions from everyone.

## Ways to Contribute

- 🐛 **Bug Reports** - Found a bug? Open an issue
- ✨ **New Scenes** - Add new animation components
- 🎨 **Improvements** - Enhance existing scenes
- 📝 **Documentation** - Improve docs and examples
- 🌐 **Translations** - Help translate documentation

## Getting Started

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/remotion-scenes.git
   cd remotion-scenes
   pnpm install
   ```

2. **Start Development**
   ```bash
   pnpm dev
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Adding New Scenes

### File Structure

Place your scene in the appropriate category folder:

```
src/scenes/
├── TextAnimations/
│   ├── YourNewScene.tsx    # Your component
│   └── index.tsx           # Update exports
```

### Component Template

```tsx
/**
 * YourSceneName - Brief description
 */

import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { C, EASE, lerp, font } from "../../common";

export const YourSceneName = ({ startDelay = 0 }: {
  startDelay?: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Your animation logic here

  return (
    <AbsoluteFill style={{ background: C.black }}>
      {/* Your JSX here */}
    </AbsoluteFill>
  );
};
```

### Guidelines

- Use utilities from `src/common` (colors, easing, fonts)
- Keep components self-contained
- Support `startDelay` prop for sequencing
- Use TypeScript with proper types
- Add JSDoc comment describing the animation

## Code Style

- Run `pnpm lint` before committing
- Use meaningful variable names
- Keep animations smooth (use `spring()` or `interpolate()`)

## Pull Request Process

1. Update the category's `index.tsx` to export your component
2. Add your scene to the showcase array
3. Test in Remotion Studio (`pnpm dev`)
4. Submit PR with clear description

## Questions?

Feel free to open an issue for any questions!
