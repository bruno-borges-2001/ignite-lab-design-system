import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react';

export interface ButtonProps {
  children: string | ReactNode;
}

export function Button({ children }: ButtonProps) {
  const Comp = typeof children === 'string' ? 'button' : Slot;

  return <Comp className="py-4 px-3 bg-cyan-500 rounded font-semibold text-black w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white">
    {children}
  </Comp>
}