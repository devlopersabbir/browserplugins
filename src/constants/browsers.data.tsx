import { Chrome, Compass, Earth, EarthLock, Sparkles } from "lucide-react";

export const browsers = [
  {
    value: "all",
    label: "All Extensions",
    icon: <Sparkles className="w-4 h-4" />,
    color: "#8B5CF6",
  },
  {
    value: "chrome",
    label: "Chrome",
    icon: <Chrome className="w-4 h-4" />,
    color: "#8B5CF6",
  },
  {
    value: "firefox",
    label: "FireFox",
    icon: <EarthLock className="w-4 h-4" />,
    color: "#10B981",
  },
  {
    value: "microsoft-edge",
    label: "Microsoft Edge",
    icon: <Earth className="w-4 h-4" />,
    color: "#3B82F6",
  },
  {
    value: "safary",
    label: "Safary",
    icon: <Compass className="w-4 h-4" />,
    color: "#F59E0B",
  },
];
export type Browsers = (typeof browsers)[number];
