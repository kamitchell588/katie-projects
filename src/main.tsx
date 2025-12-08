import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@fontsource/urbanist/400.css";
import "@fontsource/urbanist/500.css";
import "@fontsource/urbanist/600.css";
import "@fontsource/urbanist/700.css";

createRoot(document.getElementById("root")!).render(<App />);
