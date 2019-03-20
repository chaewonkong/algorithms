// Variance Algorithm in JavaScript

const data = [1, 2, 3, 4, 5];
const stats = data.reduce(
  (a, x) => {
    //   N은 0부터 시작하며 각 data의 element를 순회할때마다 1씩 증가.
    // 최종적으로는 data.length와 동일하게 됨.
    a.N++;

    // mean은 0에서 시작
    let delta = x - a.mean;

    // delta/N은 (x-mean)/N을 의미하므로 분산의 계산식
    a.mean += delta / a.N;
    a.M2 += delta * (x - a.mean);
    return a;
  },
  { N: 0, mean: 0, M2: 0 }
);
if (stats.N > 2) {
  stats.variance = stats.M2 / (stats.N - 1);
  stats.stdev = Math.sqrt(stats.variance);
}

console.log(stats);
