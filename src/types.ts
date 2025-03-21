export interface PlywoodItem {
    id: number;
    name: string;
    dimension: string; // e.g., "2x4"
    quantity: number;
    thickness: number; // in mm
  }
  
  export const defaultItems: PlywoodItem[] = [
    { id: 1, name: 'TV Cabinet', dimension: '', quantity: 0, thickness: 0 },
    { id: 2, name: 'Wardrobe', dimension: '', quantity: 0, thickness: 0 },
    { id: 3, name: 'Kitchen Cabinet', dimension: '', quantity: 0, thickness: 0 },
    { id: 4, name: 'Dressing Table', dimension: '', quantity: 0, thickness: 0 },
    { id: 5, name: 'Bed', dimension: '', quantity: 0, thickness: 0 },
    { id: 6, name: 'Computer Table', dimension: '', quantity: 0, thickness: 0 },
  ];