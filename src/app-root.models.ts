import type { EnhancedStore } from '@reduxjs/toolkit';
import type { BrowserRouter, StaticRouter } from 'react-router-dom';

export interface RootAppProps {
  Router: new (...args: any[]) => BrowserRouter | StaticRouter;
  location?: string;
  store: EnhancedStore;
}
