export interface DataContent {
  name: string;
  anchor: string;
  anchorID: string;
  cards: [
    {
      id: number;
      title: string;
      src: {
        image_1: string;
        image_2: string;
        image_3: string;
      };
      descr: string;
      weight: string;
      count: number;
      price: number;
      priceTotal: number;
    }
  ];
}
