import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

// Pages
import DashboardHome from "./assets/Pages/DashboardHome";
import Users from "./assets/Pages/Users";
import Consumers from "./assets/Pages/Consumers";
import Assets from "./assets/Pages/AssetsMDM/AssetsHome";
import DemandService from "./assets/Pages/DemandService";
import Communication from "./assets/Pages/Communication";
import CustomerService from "./assets/Pages/CustomerService";
import EnergyAudit from "./assets/Pages/EnergyAudit";
import Exception from "./assets/Pages/Exception";
import MDM from "./assets/Pages/MDM";
import PrepaidService from "./assets/Pages/PrepaidService";
import Revenue from "./assets/Pages/Revenue";
import VEE from "./assets/Pages/VEE";
import Userdata from "./assets/Pages/Userdata";

const App = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard layout */}
      <Route path="/portal" element={<Dashboard />}>
        {/* Default dashboard page */}
        <Route index element={<DashboardHome />} />

        {/* Users Management and submenus */}
        <Route path="users" element={<Users />} />
        <Route path="users/list" element={<Users />} />
        <Route path="users/roles" element={<Users />} />
        <Route path="users/permissions" element={<Users />} />
        <Route path="users/logs" element={<Users />} />

        {/* Consumers Management and submenus */}
        <Route path="consumers" element={<Consumers />} />
        <Route path="consumers/list" element={<Consumers />} />
        <Route path="consumers/register" element={<Consumers />} />
        <Route path="consumers/billing" element={<Consumers />} />
        <Route path="consumers/history" element={<Consumers />} />

        {/* Assets Management and submenus */}
        {/* Assets Management and submenus */}
        <Route path="assets" element={<Assets />} />
        <Route path="assets/zone" element={<Assets />} />
        <Route path="assets/circle" element={<Assets />} />
        <Route path="assets/division" element={<Assets />} />
        <Route path="assets/subdivision" element={<Assets />} />
        <Route path="assets/substation" element={<Assets />} />
        <Route path="assets/feeder" element={<Assets />} />
        <Route path="assets/dt" element={<Assets />} />
        <Route path="assets/device" element={<Assets />} />
        <Route path="assets/stock" element={<Assets />} />
        <Route path="assets/faulty" element={<Assets />} />
        <Route path="assets/installed" element={<Assets />} />
        <Route path="assets/new-meters" element={<Assets />} />
        <Route path="assets/old-meters" element={<Assets />} />

        {/* Demand Service and submenus */}
        <Route path="demand" element={<DemandService />} />
        <Route path="demand/forecast" element={<DemandService />} />
        <Route path="demand/analysis" element={<DemandService />} />
        <Route path="demand/peak" element={<DemandService />} />
        <Route path="demand/response" element={<DemandService />} />

        {/* Meter Data Management and submenus */}
        <Route path="mdm" element={<MDM />} />
        <Route path="mdm/inventory" element={<MDM />} />
        <Route path="mdm/collection" element={<MDM />} />
        <Route path="mdm/health" element={<MDM />} />
        <Route path="mdm/analytics" element={<MDM />} />

        {/* VEE Management and submenus */}
        <Route path="vee" element={<VEE />} />
        <Route path="vee/validation" element={<VEE />} />
        <Route path="vee/models" element={<VEE />} />
        <Route path="vee/events" element={<VEE />} />
        <Route path="vee/quality" element={<VEE />} />

        {/* Communication Management and submenus */}
        <Route path="communication" element={<Communication />} />
        <Route path="communication/status" element={<Communication />} />
        <Route path="communication/queue" element={<Communication />} />
        <Route path="communication/protocols" element={<Communication />} />
        <Route path="communication/logs" element={<Communication />} />

        {/* Energy Audit and submenus */}
        <Route path="audit" element={<EnergyAudit />} />
        <Route path="audit/reports" element={<EnergyAudit />} />
        <Route path="audit/schedule" element={<EnergyAudit />} />
        <Route path="audit/compliance" element={<EnergyAudit />} />
        <Route path="audit/findings" element={<EnergyAudit />} />

        {/* Revenue Management and submenus */}
        <Route path="revenue" element={<Revenue />} />
        <Route path="revenue/dashboard" element={<Revenue />} />
        <Route path="revenue/invoicing" element={<Revenue />} />
        <Route path="revenue/payments" element={<Revenue />} />
        <Route path="revenue/reports" element={<Revenue />} />

        {/* Exception Management and submenus */}
        <Route path="exceptions" element={<Exception />} />
        <Route path="exceptions/queue" element={<Exception />} />
        <Route path="exceptions/types" element={<Exception />} />
        <Route path="exceptions/resolution" element={<Exception />} />
        <Route path="exceptions/analytics" element={<Exception />} />

        {/* Customer Service and submenus */}
        <Route path="csm" element={<CustomerService />} />
        <Route path="csm/tickets" element={<CustomerService />} />
        <Route path="csm/queries" element={<CustomerService />} />
        <Route path="csm/sla" element={<CustomerService />} />
        <Route path="csm/feedback" element={<CustomerService />} />

        {/* Prepaid Services and submenus */}
        <Route path="prepaid" element={<PrepaidService />} />
        <Route path="prepaid/accounts" element={<PrepaidService />} />
        <Route path="prepaid/recharge" element={<PrepaidService />} />
        <Route path="prepaid/alerts" element={<PrepaidService />} />
        <Route path="prepaid/history" element={<PrepaidService />} />

        {/* User Data and submenus */}
        <Route path="Userdata" element={<Userdata/>} />
        <Route path="Userdata/reports" element={<Userdata/>} />
        <Route path="Userdata/patterns" element={<Userdata/>} />
        <Route path="Userdata/quality" element={<Userdata/>} />
      </Route>
    </Routes>
  );
};

export default App;
