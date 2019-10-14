export interface IPhoto {
  url: string;
  type: number;
  id: string;
}

export class Photo implements IPhoto {
  id: string;
  url: string;
  type: number;
}
