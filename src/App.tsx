
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NewsEvents from "./pages/NewsEvents";
import NewsArticle from "./pages/NewsArticle";
import CropProduction from "./pages/CropProduction";
import LivestockProduction from "./pages/LivestockProduction";
import Catering from "./pages/Catering";
import Outreach from "./pages/Outreach";
import Administration from "./pages/Administration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/crop-production" element={<CropProduction />} />
          <Route path="/livestock-production" element={<LivestockProduction />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/outreach" element={<Outreach />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news/:id" element={<NewsArticle />} />
          <Route path="/administration" element={<Administration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
