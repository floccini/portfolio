export interface GearItem {
  category: string;
  items: {
    name: string;
    description?: string;
    link: string;
    image: string;
  }[];
}
