import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// 1. Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
);
