import {IPhoto, Photo} from './photo';

export interface IProduct {
  id: string;
  isActive: boolean;
  name: string;
  description: string;
  tags?: string[];
  displayPicture?: IPhoto;
  discountPercentage?: number;
  products?: string[];
}

export class Product implements IProduct {
  id: string;
  isActive: boolean;
  name: string;
  description: string;
  tags?: string[];
  displayPicture?: IPhoto;
  discountPercentage?: number;
  products?: string[];
}
