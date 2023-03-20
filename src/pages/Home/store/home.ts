import create from 'zustand';

interface HomeState {
  foo?: string;
  setFoo?: (value: string) => void;
}

export const useHomeStore = create<HomeState>()((set) => ({
  foo: 'bar',
  setFoo(foo) {
    set({
      foo
    });
  }
}));
