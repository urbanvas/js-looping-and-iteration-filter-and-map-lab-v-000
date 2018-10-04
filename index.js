// Code your solution here:

function driversWithRevenueOver(dri, rev) {
  const arr = []
  return dri.filter(el => {
    el.revenue > rev
  })
}

let drivers = (
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }
);
