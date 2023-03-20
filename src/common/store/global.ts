import create from 'zustand';

interface WindowSize {
  width: number;
  height: number;
}

interface GlobalState {
  windowSize?: WindowSize;
  setWindowSize: (size: WindowSize) => void;
}

export const useGlobalStore = create<GlobalState>()((set) => ({
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  setWindowSize: (size: WindowSize) => {
    return set(() => ({
      windowSize: size
    }));
  }
}));
