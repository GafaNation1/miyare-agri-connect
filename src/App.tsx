
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
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
import Seminars from "./pages/Seminars";
import Accommodation from "./pages/Accommodation";
import Administration from "./pages/Administration";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import CookiePolicy from "./pages/CookiePolicy";
import MapView from "./pages/MapView";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public authentication routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            {/* Protected routes */}
            <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/programs" element={<ProtectedRoute><Programs /></ProtectedRoute>} />
            <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
            <Route path="/crop-production" element={<ProtectedRoute><CropProduction /></ProtectedRoute>} />
            <Route path="/livestock-production" element={<ProtectedRoute><LivestockProduction /></ProtectedRoute>} />
            <Route path="/catering" element={<ProtectedRoute><Catering /></ProtectedRoute>} />
            <Route path="/outreach" element={<ProtectedRoute><Outreach /></ProtectedRoute>} />
            <Route path="/seminars" element={<ProtectedRoute><Seminars /></ProtectedRoute>} />
            <Route path="/accommodation" element={<ProtectedRoute><Accommodation /></ProtectedRoute>} />
            <Route path="/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
            <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
            <Route path="/news-events" element={<ProtectedRoute><NewsEvents /></ProtectedRoute>} />
            <Route path="/news/:id" element={<ProtectedRoute><NewsArticle /></ProtectedRoute>} />
            <Route path="/administration" element={<ProtectedRoute><Administration /></ProtectedRoute>} />
            <Route path="/terms" element={<ProtectedRoute><TermsOfUse /></ProtectedRoute>} />
            <Route path="/privacy" element={<ProtectedRoute><PrivacyPolicy /></ProtectedRoute>} />
            <Route path="/accessibility" element={<ProtectedRoute><AccessibilityStatement /></ProtectedRoute>} />
            <Route path="/cookies" element={<ProtectedRoute><CookiePolicy /></ProtectedRoute>} />
            <Route path="/map" element={<ProtectedRoute><MapView /></ProtectedRoute>} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
