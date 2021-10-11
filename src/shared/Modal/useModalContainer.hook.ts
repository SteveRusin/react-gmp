import { useEffect, useState } from 'react';

const portalRoot = document.getElementById('portal-root');

export const useModalContainer = () => {
  const [modalContainer] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    portalRoot!.appendChild(modalContainer);

    return () => {
      document.body.style.overflow = 'unset';
      portalRoot!.removeChild(modalContainer);
    };
  }, []);

  return modalContainer;
}
