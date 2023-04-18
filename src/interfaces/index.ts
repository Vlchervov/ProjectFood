export interface IDataContent {
  name: string;
  city: string;
  anchor: string;
  anchorID: string;
  cards: {
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
  }[];
}

export interface IModal {
  formIsVisible: boolean;
  setFormIsVisivle: any;
  cleanArray: () => void;
}

export interface ICartItem {
  id: number;
  src: {
    image_1?: string;
    image_2?: string;
    image_3?: string;
  };
  title: string;
  weight: string;
  descr: string;
  priceTotal: number;
  count: number;
}
