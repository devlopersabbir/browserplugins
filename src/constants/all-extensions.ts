export const allExtensions = [
  {
    id: 1,
    name: "ProductivityPro Max",
    browser: "chrome",
    purchaseDate: "2024-12-15",
    licenseKey: "PROD-ABC123DEF456",
    downloadUrl: "/download/1",
    status: "active",
    price: 39.99,
    description:
      "Ultimate productivity suite with AI-powered task management and focus tools",
  },
  {
    id: 2,
    name: "SecureVault",
    browser: "firefox",
    purchaseDate: "2024-12-10",
    licenseKey: "SECURE-XYZ789GHI012",
    downloadUrl: "/download/2",
    status: "active",
    price: 29.99,
    description:
      "Military-grade password manager with biometric authentication",
  },
  {
    id: 3,
    name: "DevTools Master",
    browser: "chrome",
    purchaseDate: "2024-12-12",
    licenseKey: "DEV-ABC123DEF456",
    downloadUrl: "/download/3",
    status: "active",
    price: 24.99,
    description: "Advanced developer tools with code snippets and API testing",
  },
] as const;

export type AllExtension = (typeof allExtensions)[number];
