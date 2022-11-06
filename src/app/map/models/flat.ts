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

export interface Row extends PoolsTableRow {
  ap?: number;
  lat: number;
  lng: number;
  good?: number;
  id: number;
}


export interface EtalonWithAnalogs {
  pattern: Row;
  analogs: Row[];
  coefs: CorrectCoefs[];
}

export interface Table {
  id: number;
  path: string;
  rows: Row[];
}

export interface CorrectCoefs {
  sale: number;
  floor: number;
  total: number;
  kitchen: number;
  balcony: number;
  metro: number;
  state: number;
}


export interface PatternAnalogs {
  pattern: Row;
  analogs: Row[];
  coefs: CorrectCoefs[];
}


export interface ArchivePool {
  id: number;
  path: string;
  table: Row[];
  count?: number;
  time: string;
  pa: EtalonWithAnalogs[];
}
