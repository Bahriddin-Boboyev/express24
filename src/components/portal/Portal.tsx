import { appStore } from '@/store';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
const mountElement = document.getElementById('portal')!;

type Props = {
  children: ReactNode;
};

export const Portal = ({ children }: Props) => {
  const { isOverlay } = appStore();
  // console.log('portal', store.isOverlay);

  return createPortal(
    isOverlay && (
      <div className="portal-overlay-container">
        <div className={`portal-overlay-bg ${'active'}`} />
        <div className={`portal-overlay-content ${'active'}`}>{children}</div>
      </div>
    ),
    mountElement,
  );
};
