import { useState } from "react";
import "./styles/App.scss";
import {Routes, Route, Link} from "react-router-dom";

import ThemeToggle from "./components/ThemeToggle";

import { CanvasRevealEffectDemo } from "./components/aceternity/demos/CanvasRevealEffectDemo";
import { WavyBackgroundDemo } from "./components/aceternity/demos/WavyBackgroundDemo";
import { EvervaultCardDemo } from "./components/aceternity/demos/EvervaultCardDemo";
import { SignupFormDemo } from "./components/aceternity/demos/SignupFormDemo";
import { VortexDemo } from "./components/aceternity/demos/VortexDemo";
import { TextGenerateEffectDemo } from "./components/aceternity/demos/TextGenerateEffectDemo";
import { TypewriterEffectSmoothDemo } from "./components/aceternity/demos/TypewriterEffectSmoothDemo";
import { LampDemo } from "./components/aceternity/demos/LampDemo";
import { InfiniteMovingCardsDemo } from "./components/aceternity/demos/InfiniteMovingCardsDemo";
import { SparklesPreview } from "./components/aceternity/demos/SparklesPreview";
import { SparklesPreview2 } from "./components/aceternity/demos/SparklesPreview2";
import { HoverBorderGradientDemo } from "./components/aceternity/demos/HoverBorderGradientDemo";
import { HeroHighlightDemo } from "./components/aceternity/demos/HeroHighlightDemo";
import { AuroraBackgroundDemo } from "./components/aceternity/demos/AuroraBackgroundDemo";
import { BackgroundGradientAnimationDemo } from "./components/aceternity/demos/BackgroundGradientAnimationDemo";
import { BackgroundGradientDemo } from "./components/aceternity/demos/BackgroundGradientDemo";

function App() {


  const pages = [
    { name: "Canvas Reveal Effect", path: "/canvas-reveal-effect", 
      element: <CanvasRevealEffectDemo />
     },
    { name: "Wavy Background", path: "/wavy-background", 
      element: <WavyBackgroundDemo />
     },
    { name: "Evervault Card", path: "/evervault-card", 
      element: <EvervaultCardDemo />
     },
    { name: "Signup Form", path: "/signup-form", 
      element: <SignupFormDemo />
     },
    { name: "Vortex", path: "/vortex", 
      element: <VortexDemo />
     },
    { name: "Text Generate Effect", path: "/text-generate-effect", 
      element: <TextGenerateEffectDemo />
     },
    { name: "Typewriter Effect Smooth", path: "/typewriter-effect-smooth", 
      element: <TypewriterEffectSmoothDemo />
     },
    { name: "Lamp", path: "/lamp", 
      element: <LampDemo />
     },
    { name: "Infinite Moving Cards", path: "/infinite-moving-cards", 
      element: <InfiniteMovingCardsDemo />
     },
    { name: "Sparkles Preview", path: "/sparkles-preview", 
      element: <SparklesPreview />
     },
    { name: "Sparkles Preview 2", path: "/sparkles-preview-2", 
      element: <SparklesPreview2 />
     },
    { name: "Hover Border Gradient", path: "/hover-border-gradient", 
      element: <HoverBorderGradientDemo />
     },
    { name: "Hero Highlight", path: "/hero-highlight", 
      element: <HeroHighlightDemo />
     },
    { name: "Aurora Background", path: "/aurora-background", 
      element: <AuroraBackgroundDemo />
     },
    { name: "Background Gradient Animation", path: "/background-gradient-animation", 
      element: <BackgroundGradientAnimationDemo />
     },
    { name: "Background Gradient", path: "/background-gradient", 
      element: <BackgroundGradientDemo />
     },
  ];


  return (
    <div className="App">
      <div className="header-links flex gap-2 fixed z-100 top-0 left-0">
        <ThemeToggle />

        <div className="nav-list flex flex-wrap gap-2">
          {pages.map((page: any) => (
            <Link
              key={page.name}
              to={page.path}
              className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page.name}
            </Link>
          ))}
        </div>
      </div>

      <main className="pt-20">
        <Routes>
          {
            pages.map((page: any) => (
              <Route key={page.name} path={page.path} element={page.element} />
            ))
          }
        
        </Routes>
      </main>
    </div>
  );
}

export default App;
