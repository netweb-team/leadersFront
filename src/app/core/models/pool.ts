export interface ApiResponse<T> {
  status: number;
  body: T;
}

export interface PoolsResponse {
  path: string;
  table: PoolsTableRow[];
}

export interface PoolsTableRow {
  a: string; // Address
  r: number; // Rooms
  s: string; // Segment
  f: number; // Floors
  w: string; // walls
  cf: number; // CFloor
  t: number; //total
  k: number; //kitchen
  b: string; // balkony
  m: string; //metro
  st: string; //state
  p: number;//cost
}
