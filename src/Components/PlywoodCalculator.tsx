import React, { useState } from 'react';

interface PlywoodData {
  dimension: string;
  quantity: number;
  thickness: string;
}

interface FurnitureVariant {
  [key: string]: PlywoodData[];
}

interface FurnitureData {
  variants: FurnitureVariant;
  image: string;
}

const furnitureData: { [key: string]: FurnitureData } = {
  'TV CABINET': {
    variants: {
      '243.84cm x 91.44cm': [
        { dimension: '243.84cm x 91.44cm', quantity: 2, thickness: '19mm' },
        { dimension: '243.84cm x 91.44cm', quantity: 3, thickness: '12mm' },
        { dimension: '243.84cm x 91.44cm', quantity: 2, thickness: '6mm' },
      ],
    },
    image: 'https://placehold.co/600x400',
  },
  Wardrobes: {
    variants: {
      '7Ft X 3Ft': [
        { dimension: '7Ft X 3Ft', quantity: 1, thickness: '19mm' },
        { dimension: '7Ft X 3Ft', quantity: 3, thickness: '12mm' },
        { dimension: '7Ft X 3Ft', quantity: 2, thickness: '6mm' },
      ],
    },
    image: 'https://placehold.co/600x400',
  },
};

const PlywoodCalculator: React.FC = () => {
  const [selectedFurniture, setSelectedFurniture] = useState<keyof typeof furnitureData | ''>('');
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [plywoodData, setPlywoodData] = useState<PlywoodData[]>([]);
  const [image, setImage] = useState<string>('');

  const handleFurnitureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const furniture = e.target.value as keyof typeof furnitureData;
    setSelectedFurniture(furniture);
    setSelectedVariant('');
    setPlywoodData([]);
    setImage('');
  };

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const variant = e.target.value;
    setSelectedVariant(variant);

    if (selectedFurniture && furnitureData[selectedFurniture]?.variants[variant]) {
      setPlywoodData(furnitureData[selectedFurniture].variants[variant]);
      setImage(furnitureData[selectedFurniture].image);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-fit flex flex-col items-center justify-center p-4 text-gray-900 dark:text-white">
      <div className="w-full max-w-4xl rounded-lg shadow-lg p-6 bg-gray-100 dark:bg-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800 dark:text-green-400">Plywood Requirement Calculator</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <select
            value={selectedFurniture}
            onChange={handleFurnitureChange}
            className="flex-1 p-2 border border-gray-300 rounded bg-white dark:bg-gray-600 dark:text-white"
          >
            <option value="">Select Furniture</option>
            {Object.keys(furnitureData).map((furniture) => (
              <option key={furniture} value={furniture}>
                {furniture}
              </option>
            ))}
          </select>

          <select
            value={selectedVariant}
            onChange={handleVariantChange}
            disabled={!selectedFurniture}
            className="flex-1 p-2 border border-gray-300 rounded bg-white dark:bg-gray-600 dark:text-white disabled:opacity-50"
          >
            <option value="">Select Variant</option>
            {selectedFurniture &&
              Object.keys(furnitureData[selectedFurniture].variants).map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
          </select>
        </div>

        {image && (
          <div className="mb-6">
            <img src={image} alt={`${selectedFurniture} ${selectedVariant}`} className="w-full h-auto rounded-lg" />
          </div>
        )}

        {plywoodData.length > 0 && (
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-green-100 dark:bg-green-700">
                <th className="p-2 border border-gray-300 dark:border-gray-500">Dimension</th>
                <th className="p-2 border border-gray-300 dark:border-gray-500">Quantity</th>
                <th className="p-2 border border-gray-300 dark:border-gray-500">Thickness</th>
              </tr>
            </thead>
            <tbody>
              {plywoodData.map((item, index) => (
                <tr key={index} className="bg-white dark:bg-gray-600">
                  <td className="p-2 border border-gray-300 dark:border-gray-500 text-center">{item.dimension}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-500 text-center">{item.quantity}</td>
                  <td className="p-2 border border-gray-300 dark:border-gray-500 text-center">{item.thickness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PlywoodCalculator;