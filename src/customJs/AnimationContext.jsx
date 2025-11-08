import { easeInOut } from 'motion/react';

export const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
       ease:easeInOut
    }
  }
};

export const item = {
  hidden: {y:'100%'},
  show: {y:"0%", transition:{duration: 0.5, ease:easeInOut}},
  exit: { 
    opacity: 0, 
    y: '-100%',
    transition: { duration: 0.35, ease:easeInOut } 
  }
};
export const item1 = {
  hidden: {x:'100%'},
  show: {x:"0%", transition:{duration: 0.5, ease:easeInOut}},
  exit: { 
    opacity: 0, 
    x: '-100%',
    transition: { duration: 0.35, ease:easeInOut } 
  }
};
export const item2 = {
  hidden: {x:'-80%'},
  show: {x:"0%", transition:{duration: 0.5, ease:easeInOut}},
  exit: { 
    opacity: 0, 
    x: '100%',
    transition: { duration: 0.35, ease:easeInOut } 
  }
};

