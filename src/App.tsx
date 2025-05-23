
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MeetingUpload from "./pages/MeetingUpload";
import MeetingDetails from "./pages/MeetingDetails";
import InviteMembers from "./pages/InviteMembers";
import Integrations from "./pages/Integrations";
import TeamSettings from "./pages/TeamSettings";
import MemberManagement from "./pages/MemberManagement";
import MeetingManagement from "./pages/MeetingManagement";
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/meeting-upload" element={<MeetingUpload />} />
          <Route path="/meeting-details" element={<MeetingDetails />} />
          <Route path="/invite-members" element={<InviteMembers />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/team-settings" element={<TeamSettings />} />
          <Route path="/member-management" element={<MemberManagement />} />
          <Route path="/meeting-management" element={<MeetingManagement />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
