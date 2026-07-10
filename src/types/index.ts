export interface Calligrapher {
  id: number;
  name: string;
  enName?: string;
  dynasty: string;
  biography?: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Work {
  id: number;
  title: string;
  author: string;
  calligrapherId: number;
  dynasty: string;
  scriptId: number;
  words: string;
  width?: number;
  height?: number;
  description?: string;
  museum?: string;
  imageUrls: string[];
  isFavorite: boolean;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ScriptStyle {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Dynasty {
  id: number;
  name: string;
  startYear?: number;
  endYear?: number;
  createdAt: Date;
  updatedAt: Date;
}
