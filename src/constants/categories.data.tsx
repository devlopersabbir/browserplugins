import { Zap, Sparkles, Globe, Code, GamepadIcon, Wrench } from "lucide-react";

export const categories = [
  {
    value: "all",
    label: "All Categories",
    icon: <Sparkles className="w-4 h-4" />,
    color: "#8B5CF6",
  },
  {
    value: "productivity",
    label: "Productivity",
    icon: <Zap className="w-4 h-4" />,
    color: "#8B5CF6",
  },
  {
    value: "security",
    label: "Security",
    icon: <Globe className="w-4 h-4" />,
    color: "#10B981",
  },
  {
    value: "developer",
    label: "Developer Tools",
    icon: <Code className="w-4 h-4" />,
    color: "#3B82F6",
  },
  {
    value: "social",
    label: "Social Media",
    icon: <Globe className="w-4 h-4" />,
    color: "#F59E0B",
  },
  {
    value: "entertainment",
    label: "Entertainment",
    icon: <GamepadIcon className="w-4 h-4" />,
    color: "#DC2626",
  },
  {
    value: "utility",
    label: "Utilities",
    icon: <Wrench className="w-4 h-4" />,
    color: "#8B5A2B",
  },
];

export type Categories = (typeof categories)[number];
