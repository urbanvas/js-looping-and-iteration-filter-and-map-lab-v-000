// Code your solution here:

function driversWithRevenueOver(dri, rev) {
  return dri.filter(el => {return el.revenue > rev})
}

function driversWithRevenueOver(dri, rev) {
  return dri.filter(el => {return el.revenue > rev}).map(el => el.name)
}

//
// const drivers = [];
// drivers.push(
//   { name: 'Sally',   revenue: 400 },
//   { name: 'Annette', revenue: 200 },
//   { name: 'Jim',     revenue: 150 }
// );
