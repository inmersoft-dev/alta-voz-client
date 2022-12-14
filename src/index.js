import * as ReactDOMClient from "react-dom/client";
import "@fontsource/roboto";
import "@fontsource/poppins";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// context
import { ModeProvider } from "./context/ModeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import { NotificationProvider } from "./context/NotificationProvider";

// own components
import Notification from "./components/Notification/Notification";

// app
import App from "./App";

// styles
import "./index.css";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

root.render(
  <LanguageProvider>
    <ModeProvider>
      <NotificationProvider>
        <Notification />
        <App />
      </NotificationProvider>
    </ModeProvider>
  </LanguageProvider>
);
