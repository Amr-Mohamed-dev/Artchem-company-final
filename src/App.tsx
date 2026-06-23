import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

// Layout & Common
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/common/FloatingWhatsApp";
import { FloatingEmail } from "./components/common/FloatingEmail";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { LoadingScreen } from "./components/common/LoadingScreen";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ProductSubcategory from "./pages/ProductSubcategory";
import ProductDetail from "./pages/ProductDetail";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/:id" component={ServiceDetail} />
        <Route path="/products" component={Products} />
        <Route path="/products/category/:categoryId" component={ProductCategory} />
        <Route path="/products/category/:categoryId/:subcategoryId" component={ProductSubcategory} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <LoadingScreen />
          <ScrollProgress />
          <ScrollToTop />
          <FloatingWhatsApp />
          <FloatingEmail />

          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>

        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
