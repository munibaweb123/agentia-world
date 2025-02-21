export interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  capabilities: string[];
  pricing?: {
    free: boolean;
    price?: number;
  };
} 