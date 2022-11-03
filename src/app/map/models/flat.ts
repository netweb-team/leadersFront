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

export interface Etalon extends PoolsTableRow {
  lat: number;
  lng: number;
  id: string;
}

export interface Analog extends PoolsTableRow {
  lat: number;
  lng: number;
  id: string;
}


export interface EtalonWithAnalogs {
  etalon: Etalon;
  analogs: Analog[];
}
