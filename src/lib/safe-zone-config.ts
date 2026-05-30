// src/lib/safe-zone-config.ts

export interface SafeZoneConfig {
    name: string;
    slug: string;
    banner: {
      width: number;
      height: number;
      safeWidth: number; // Mobile 
      safeHeight: number;
      mobileDangerZones: { top?: number; bottom?: number; left?: number; right?: number; width?: number; height?: number; type: 'circle' | 'rect' }[];
    };
    profile: {
      width: number;
      height: number;
      isCircular: boolean;
    };
  }
  
  export const PLATFORMS: SafeZoneConfig[] = [
    {
      name: "LinkedIn",
      slug: "linkedin",
      banner: {
        width: 1584,
        height: 396,
        safeWidth: 1100, // Central safe area
        safeHeight: 396,
        mobileDangerZones: [
          { left: 40, bottom: 0, width: 250, height: 150, type: 'rect' } // Mobile profile pic
        ]
      },
      profile: { width: 400, height: 400, isCircular: true }
    },
    {
      name: "X (Twitter)",
      slug: "twitter",
      banner: {
        width: 1500,
        height: 500,
        safeWidth: 1200,
        safeHeight: 500,
        mobileDangerZones: [
          { left: 20, bottom: 0, width: 300, height: 200, type: 'rect' }
        ]
      },
      profile: { width: 400, height: 400, isCircular: true }
    },
    {
      name: "Facebook",
      slug: "facebook",
      banner: {
        width: 820,
        height: 312,
        safeWidth: 640,
        safeHeight: 312,
        mobileDangerZones: []
      },
      profile: { width: 170, height: 170, isCircular: true }
    },
    {
      name: "YouTube",
      slug: "youtube",
      banner: {
        width: 2560,
        height: 1440,
        safeWidth: 1546, // 'Safe area for all devices'
        safeHeight: 423,
        mobileDangerZones: []
      },
      profile: { width: 800, height: 800, isCircular: true }
    },
    {
      name: "Instagram",
      slug: "instagram",
      banner: { width: 0, height: 0, safeWidth: 0, safeHeight: 0, mobileDangerZones: [] }, // No banner in IG
      profile: { width: 320, height: 320, isCircular: true }
    }
  ];