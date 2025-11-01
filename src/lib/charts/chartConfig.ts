export const CHART_COLORS = {
  primary: "#10b981",
  secondary: "#3b82f6",
  muted: "#666",
} as const;

export const CHART_GRADIENTS = {
  green: {
    id: "colorGradient",
    stops: [
      { offset: "0%", color: "#10b981", opacity: 0.3 },
      { offset: "100%", color: "#10b981", opacity: 0 },
    ],
  },
} as const;
