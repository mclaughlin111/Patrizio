"use client";

import dynamic from "next/dynamic";
import {
  Component,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const LazyViolinScene = dynamic(() => import("./ViolinScene"), {
  ssr: false,
  loading: () => null,
});

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

// Outline fallback shown if WebGL or the model fails.
function StaticViolin() {
  return (
    <svg
      viewBox="0 0 200 320"
      className="absolute inset-x-0 top-1/2 mx-auto h-1/2 w-auto -translate-y-1/2"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="var(--fg)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      >
        <path d="M100 18c14 0 22 10 22 22 0 9-5 15-11 19 10 6 16 15 16 27 0 20-12 32-27 32s-27-12-27-32c0-12 6-21 16-27-6-4-11-10-11-19 0-12 8-22 22-22z" />
        <path d="M62 118c-10 14-14 30-14 48 0 46 24 84 52 84s52-38 52-84c0-18-4-34-14-48" />
        <path d="M78 150c0 30 2 62 22 96M122 150c0 30-2 62-22 96" />
        <path d="M100 18v216" stroke="var(--barber-red)" />
      </g>
    </svg>
  );
}

class ModelErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("3D model failed to render, using static fallback.", error);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/**
 * Atmospheric violin layer behind the hero title.
 * Fills its positioned parent; rotation is driven by how far the parent has scrolled.
 */
export default function ModelCanvas({
  className = "",
}: {
  className?: string;
}) {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const ref = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [ready, setReady] = useState(false);
  const markReady = useCallback(() => setReady(true), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      progress.current = Math.min(
        Math.max(-rect.top / Math.max(rect.height, 1), 0),
        1,
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none blur-[0.75px] transition-opacity duration-[1800ms] ease-out ${
        ready ? "opacity-30" : "opacity-0"
      } ${className}`}
    >
      <ModelErrorBoundary fallback={<StaticViolin />} onError={markReady}>
        <LazyViolinScene
          animated={!reducedMotion}
          progress={progress}
          onReady={markReady}
        />
      </ModelErrorBoundary>
    </div>
  );
}
