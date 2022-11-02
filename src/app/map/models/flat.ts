import { PoolsTableRow } from "src/app/core/models/pool";

export interface Flat {
  lat: number;
  lng: number;
  addr: string;
  price: number;
  current_floor: number;
  total_area: number;
  kitchen_area: number;
  balcony: string;
  renovation: string;
  year: number;
  metro: string;
  id: string;
}



export interface Analog extends PoolsTableRow {
}


export interface EtalonWithAnalogs {
  etalon: PoolsTableRow;
  analogs: Analog[];
}
