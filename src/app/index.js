import { lp, apc, pdp, adc, adp, app } from "../../public/asset";

export const Candidates = [
  {
    id: 1,
    logo: lp,
    name: "LP",
    count: "113343",
  },
  {
    id: 2,
    logo: apc,
    name: "APC",
    count: "122345",
  },
  {
    id: 3,
    logo: pdp,
    name: "PDP",
    count: "124325",
  },
  {
    id: 4,
    logo: adc,
    name: "ADC",
    count: "23345",
  },
  {
    id: 5,
    logo: adp,
    name: "ADP",
    count: "20343",
  },
  {
    id: 6,
    logo: app,
    name: "APP",
    count: "13345",
  },
];

let total = 0;
Candidates.map((candidate) => {
  total = total + Number(candidate.count);
});
export default total;
