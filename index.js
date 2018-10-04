// Code your solution here:

function driversWithRevenueOver(dri, rev) {
  const arr = []
   arr.push(dri.filter(el => {
    return el.revenue > rev
  }))
  return arr
}
const drivers = [];
drivers.push(
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }
);