/**
 * OGP Video - LiquidMorphBlobを参考にしたOGP用動画
 */

import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, random } from "remotion";
import { font } from "./common";

// カラーパレット
const palette = {
  bg: "#0c0a1d",           // 深い紫がかった黒
  glow: "#4f46e5",          // 深いインディゴ（背景グロー用）
  highlight: "#e0e7ff",     // ほぼ白の青（テキスト用）
  textSub: "#c4b5fd",       // ペールバイオレット（サブテキスト用）
  // カラフルなパーティクル用
  indigo: "#6366f1",
  pink: "#ec4899",
  cyan: "#06b6d4",
  orange: "#f97316",
  emerald: "#10b981",
  violet: "#8b5cf6",
};

export const OgpVideo = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const time = frame * 0.03;

  // 動的なブロブパス生成
  const generateMorphingBlob = (seed: number, t: number, baseRadius: number, points: number = 10) => {
    const angleStep = (Math.PI * 2) / points;
    const pathPoints: { x: number; y: number }[] = [];

    for (let i = 0; i < points; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const noise1 = Math.sin(t * 2 + i * 1.5 + seed) * 40;
      const noise2 = Math.cos(t * 1.5 + i * 2 + seed * 0.5) * 30;
      const noise3 = Math.sin(t * 3 + i * 0.8 + seed * 2) * 20;
      const r = baseRadius + noise1 + noise2 + noise3;
      pathPoints.push({
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
      });
    }

    let path = `M ${pathPoints[0].x} ${pathPoints[0].y}`;
    for (let i = 0; i < points; i++) {
      const curr = pathPoints[i];
      const next = pathPoints[(i + 1) % points];
      const prev = pathPoints[(i - 1 + points) % points];
      const nextNext = pathPoints[(i + 2) % points];

      const cp1x = curr.x + (next.x - prev.x) * 0.35;
      const cp1y = curr.y + (next.y - prev.y) * 0.35;
      const cp2x = next.x - (nextNext.x - curr.x) * 0.35;
      const cp2y = next.y - (nextNext.y - curr.y) * 0.35;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }
    return path + " Z";
  };

  // ブロブレイヤー（紫系で統一 - 背景のグロー用、暗め）
  const blobLayers = [
    { scale: 4, seed: 0, color: palette.glow, opacity: 0.15, blur: 100, delay: 0 },
    { scale: 3.5, seed: 10, color: palette.glow, opacity: 0.2, blur: 70, delay: 3 },
    { scale: 3, seed: 20, color: palette.indigo, opacity: 0.25, blur: 50, delay: 6 },
    { scale: 2.5, seed: 30, color: palette.violet, opacity: 0.3, blur: 30, delay: 9 },
    { scale: 2, seed: 40, color: palette.indigo, opacity: 0.4, blur: 15, delay: 12 },
    { scale: 1.8, seed: 50, color: palette.indigo, opacity: 0.9, blur: 0, delay: 15 },
  ];

  // 浮遊する小ブロブ（カラフル）
  const floatingBlobs = React.useMemo(() => {
    const colors = [palette.indigo, palette.pink, palette.cyan, palette.orange, palette.emerald, palette.violet];
    return Array.from({ length: 24 }).map((_, i) => ({
      id: `float-${i}`,
      x: (random(`fb-x-${i}`) - 0.5) * width * 1.4,
      y: (random(`fb-y-${i}`) - 0.5) * height * 1.4,
      size: random(`fb-sz-${i}`) * 70 + 35,
      speed: random(`fb-sp-${i}`) * 2 + 1,
      seed: random(`fb-seed-${i}`) * 100,
      color: colors[i % colors.length],
    }));
  }, [width, height]);

  return (
    <AbsoluteFill style={{ background: palette.bg }}>
      {/* 背景グロー（単色系） */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: width * 2,
          height: height * 2,
          background: `radial-gradient(circle, ${palette.glow}25 0%, ${palette.bg} 60%)`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* メインブロブレイヤー */}
      {blobLayers.map((layer) => {
        const layerProgress = spring({
          frame: frame - layer.delay,
          fps,
          config: { damping: 12, stiffness: 40 },
        });

        return (
          <div
            key={`morph-layer-${layer.color}-${layer.scale}`}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${layerProgress * layer.scale})`,
              filter: layer.blur > 0 ? `blur(${layer.blur}px)` : undefined,
            }}
          >
            <svg width="400" height="400" viewBox="-200 -200 400 400" aria-hidden="true">
              <path
                d={generateMorphingBlob(layer.seed, time, 100, 12)}
                fill={layer.color}
                opacity={layer.opacity}
              />
            </svg>
          </div>
        );
      })}

      {/* 浮遊する小ブロブ */}
      {floatingBlobs.map((blob) => {
        const blobProgress = spring({
          frame: frame - 20,
          fps,
          config: { damping: 15, stiffness: 50 },
        });

        const floatX = blob.x + Math.sin(time * blob.speed) * 50;
        const floatY = blob.y + Math.cos(time * blob.speed * 0.8) * 40;

        return (
          <div
            key={blob.id}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${floatX}px, ${floatY}px) scale(${blobProgress})`,
            }}
          >
            <svg width={blob.size * 2} height={blob.size * 2} viewBox="-100 -100 200 200" aria-hidden="true">
              <path
                d={generateMorphingBlob(blob.seed, time * blob.speed, 60, 8)}
                fill={blob.color}
                opacity={0.6}
              />
            </svg>
          </div>
        );
      })}

      {/* タイトル */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: font,
            fontSize: 100,
            fontWeight: 900,
            color: palette.highlight,
            textShadow: `0 0 40px ${palette.primary}, 0 0 80px ${palette.glow}`,
            opacity: spring({
              frame: frame - 25,
              fps,
              config: { damping: 12, stiffness: 80 },
            }),
          }}
        >
          Remotion Scenes
        </div>
        <div
          style={{
            fontFamily: font,
            fontSize: 34,
            fontWeight: 500,
            color: palette.textSub,
            marginTop: 20,
            opacity: spring({
              frame: frame - 35,
              fps,
              config: { damping: 12, stiffness: 80 },
            }),
          }}
        >
          201+ Motion Graphics for Remotion
        </div>
      </div>
    </AbsoluteFill>
  );
};
