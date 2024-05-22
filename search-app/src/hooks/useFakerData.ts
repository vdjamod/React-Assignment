import { useEffect, useState } from "react";
// import { faker } from "@faker-js/faker";

export const useFakerData = (query: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const generateData = () => {
      const products = [];
      for (let i = 0; i < 10; i++) {
        products.push({
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          image: faker.image.fashion(),
          price: faker.commerce.price(),
        });
      }
      setData(products);
    };

    generateData();
  }, [query]);

  return data;
};
