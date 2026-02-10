// copied from @bryc on stack overflow
const sfc32 = (a: number, b: number, c: number, d: number): (() => number) => {
  return function () {
    a |= 0;
    b |= 0;
    c |= 0;
    d |= 0;
    const t = (((a + b) | 0) + d) | 0;
    d = (d + 1) | 0;
    a = b ^ (b >>> 9);
    b = (c + (c << 3)) | 0;
    c = (c << 21) | (c >>> 11);
    c = (c + t) | 0;
    return (t >>> 0) / 4294967296;
  };
};

const getRNG = (): (() => number) => {
  // seeding the random numbers with the date so that everyone getting this website
  // will have the same sequence of colors presented to them
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const century = year.toString().slice(0, 2);
  const yy = year.toString().slice(2);

  const newRNG = sfc32(Number(century), Number(yy), month, day);

  for (let i = 0; i < 32; ++i) {
    newRNG(); // throw away the value
  }

  return newRNG;
};

const rng = getRNG();

const randomHex = (): string =>
  Math.floor(rng() * 0xffffff)
    .toString(16)
    .padStart(6, "")
    .toUpperCase();

export { randomHex };
