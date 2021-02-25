import { TweenMax } from 'gsap';

function select(s: string) {
  return document.querySelector(s);
}

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const start = (): void => {
  TweenMax.set('#lava', {
    visibility: 'visible',
  });

  const tl = new TimelineMax();

  for (let i = 0; i < 5; i++) {
    const t = TweenMax.to(select('.blob' + i), randomBetween(14, 50), {
      y: 260,
      repeat: -1,
      repeatDelay: randomBetween(1, 3),
      yoyo: true,
      ease: Linear.easeNone,
    });

    tl.add(t, (i + 1) / 0.6);
  }

  tl.seek(100);
};

export default {
  start,
};
