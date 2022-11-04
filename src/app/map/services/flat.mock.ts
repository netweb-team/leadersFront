import { EtalonWithAnalogs, Flat } from "../models/flat";

export const flatMock: Flat[] = [{
  lat: 55.6573,
  lng: 37.5676,
  addr: 'Москва, ЮЗАО, р-н Черемушки, ул. Каховка, 31',
  price: 20500000,
  current_floor: 15,
  total_area: 61.7,
  kitchen_area: 10,
  balcony: '1 лоджия',
  renovation: 'Евроремонт',
  year: 2010,
  metro: 'Зюзино ⋅  4 мин. пешком',
  id: 'flat-1'
},
{
  lat: 55.6575,
  lng: 37.5677,
  addr: 'Москва, ЮЗАО, р-н Черемушки, ул. Каховка, 33',
  price: 20550000,
  current_floor: 15,
  total_area: 61.7,
  kitchen_area: 10,
  balcony: '1 лоджия',
  renovation: 'нет ремонта',
  year: 2010,
  metro: 'Зюзино ⋅  10 мин. пешком',
  id: 'flat-2'
},

]





export const analogs = [
  {
    a: 'Address 6',
    r: 10,
    s: 'Segment',
    f: 5,
    w: 'walls',
    cf: 5,
    t: 4,
    k: 3,
    b: 'balkony',
    m: 'metro',
    st: 'state',
    p: 150,
    lat: 55.5532434,
    lng: 37.67324234,
    id: '12135'
  },
  {
    a: 'Address 5',
    r: 1,
    s: 'Segment',
    f: 2,
    w: 'walls',
    cf: 3,
    t: 4,
    k: 5,
    b: 'balkony',
    m: 'metro',
    st: 'state',
    p: 158,
    lat: 55.55234,
    lng: 37.6712312,
    id: '12134'
  },
]

export const EtalonMock: EtalonWithAnalogs = {
  etalon: {
    a: 'Address 1',
    r: 2,
    s: 'Segment',
    f: 3,
    w: 'walls',
    cf: 2,
    t: 1,
    k: 1,
    b: 'balkony',
    m: 'metro',
    st: 'state',
    p: 150,
    lat: 55.55,
    lng: 37.67,
    id: '1213'
  },
  analogs: analogs
}
