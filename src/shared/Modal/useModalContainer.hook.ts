import { useEffect, useState } from 'react';

export const useModalContainer = () => {
  const [modalContainer] = useState(() => document.createElement('div'));

  useEffect(() => {
    const portalRoot = document.getElementById('portal-root');
    document.body.style.overflow = 'hidden';
    portalRoot!.appendChild(modalContainer);

    return () => {
      document.body.style.overflow = 'unset';
      portalRoot!.removeChild(modalContainer);
    };
  }, []);

  return modalContainer;
}
