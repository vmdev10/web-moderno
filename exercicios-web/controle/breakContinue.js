//Break causa um desvio de fluxo
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${nums[x]}`);
}
// O continue também causa um desvio de fluxo, mas não interrompe o laço apenas a condição a qual ele foi definido
for (y in nums) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a},${b}`);
  }
}
