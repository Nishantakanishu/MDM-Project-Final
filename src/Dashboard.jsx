import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";


import {
  MdDashboard,
  MdDevices,
  MdAnalytics,
  MdElectricalServices,
  MdRouter,
  MdAssessment,
  MdAttachMoney,
  MdReportProblem,
  MdSupportAgent,
  MdElectricMeter,
  MdMenuOpen,
  MdManageAccounts,
  MdGroup,
  MdTrendingUp,
  MdPerson,
  MdPeople,
  MdSecurity,
  MdTimeline,
  MdSettings,
  MdCheckCircle,
  MdTrendingDown,
  MdBarChart,
  MdSpeed,
  MdRefresh,
  MdWarning,
  MdNotifications,
  MdFilePresent,
} from "react-icons/md";

const menuItems = [
  { name: "Dashboard", icon: MdDashboard, path: "" },
  { name: "User Data", icon: MdPerson, path: "Userdata"},
];

// Submenu data for each module
const submenuData = {
  users: [
    { name: 'User List', icon: MdPeople, path: 'users/list' },
    { name: 'User Roles', icon: MdManageAccounts, path: 'users/roles' },
    { name: 'Permissions', icon: MdSecurity, path: 'users/permissions' },
    { name: 'Activity Logs', icon: MdTimeline, path: 'users/logs' },
  ],
  consumers: [
    { name: 'Consumer List', icon: MdGroup, path: 'consumers/list' },
    { name: 'Registration', icon: MdPerson, path: 'consumers/register' },
    { name: 'Billing Info', icon: MdAttachMoney, path: 'consumers/billing' },
    { name: 'Service History', icon: MdFilePresent, path: 'consumers/history' },
  ],
  assets: [
    { name: 'Asset Inventory', icon: MdDevices, path: 'assets/inventory' },
    { name: 'Maintenance', icon: MdSettings, path: 'assets/maintenance' },
    { name: 'Asset Health', icon: MdCheckCircle, path: 'assets/health' },
    { name: 'Depreciation', icon: MdTrendingDown, path: 'assets/depreciation' },
  ],
  demand: [
    { name: 'Demand Forecast', icon: MdTrendingUp, path: 'demand/forecast' },
    { name: 'Load Analysis', icon: MdBarChart, path: 'demand/analysis' },
    { name: 'Peak Management', icon: MdSpeed, path: 'demand/peak' },
    { name: 'Demand Response', icon: MdRefresh, path: 'demand/response' },
  ],
  mdm: [
    { name: 'Meter Inventory', icon: MdElectricMeter, path: 'mdm/inventory' },
    { name: 'Data Collection', icon: MdDashboard, path: 'mdm/collection' },
    { name: 'Meter Health', icon: MdCheckCircle, path: 'mdm/health' },
    { name: 'Data Analytics', icon: MdAnalytics, path: 'mdm/analytics' },
  ],
  vee: [
    { name: 'Validation Rules', icon: MdCheckCircle, path: 'vee/validation' },
    { name: 'Estimation Models', icon: MdBarChart, path: 'vee/models' },
    { name: 'Event Detection', icon: MdWarning, path: 'vee/events' },
    { name: 'Quality Metrics', icon: MdSpeed, path: 'vee/quality' },
  ],
  communication: [
    { name: 'Network Status', icon: MdRouter, path: 'communication/status' },
    { name: 'Message Queue', icon: MdNotifications, path: 'communication/queue' },
    { name: 'Protocol Config', icon: MdSettings, path: 'communication/protocols' },
    { name: 'Communication Logs', icon: MdFilePresent, path: 'communication/logs' },
  ],
  audit: [
    { name: 'Audit Reports', icon: MdFilePresent, path: 'audit/reports' },
    { name: 'Audit Schedule', icon: MdTimeline, path: 'audit/schedule' },
    { name: 'Compliance', icon: MdCheckCircle, path: 'audit/compliance' },
    { name: 'Findings', icon: MdWarning, path: 'audit/findings' },
  ],
  revenue: [
    { name: 'Revenue Dashboard', icon: MdDashboard, path: 'revenue/dashboard' },
    { name: 'Invoicing', icon: MdFilePresent, path: 'revenue/invoicing' },
    { name: 'Payment Processing', icon: MdAttachMoney, path: 'revenue/payments' },
    { name: 'Financial Reports', icon: MdBarChart, path: 'revenue/reports' },
  ],
  exceptions: [
    { name: 'Exception Queue', icon: MdWarning, path: 'exceptions/queue' },
    { name: 'Exception Types', icon: MdReportProblem, path: 'exceptions/types' },
    { name: 'Resolution Tracking', icon: MdCheckCircle, path: 'exceptions/resolution' },
    { name: 'Exception Analytics', icon: MdAnalytics, path: 'exceptions/analytics' },
  ],
  csm: [
    { name: 'Service Tickets', icon: MdSupportAgent, path: 'csm/tickets' },
    { name: 'Customer Queries', icon: MdPeople, path: 'csm/queries' },
    { name: 'Service Level', icon: MdSpeed, path: 'csm/sla' },
    { name: 'Feedback', icon: MdFilePresent, path: 'csm/feedback' },
  ],
  prepaid: [
    { name: 'Prepaid Accounts', icon: MdPerson, path: 'prepaid/accounts' },
    { name: 'Recharge Management', icon: MdAttachMoney, path: 'prepaid/recharge' },
    { name: 'Balance Alerts', icon: MdNotifications, path: 'prepaid/alerts' },
    { name: 'Transaction History', icon: MdTimeline, path: 'prepaid/history' },
  ],
  Userdata: [
    { name: 'Water Analytics', icon: MdDashboard, path: 'Userdata' },
    { name: 'Consumption Reports', icon: MdBarChart, path: 'Userdata/reports' },
    { name: 'Usage Patterns', icon: MdAnalytics, path: 'Userdata/patterns' },
    { name: 'Quality Metrics', icon: MdCheckCircle, path: 'Userdata/quality' },
  ],
};



const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeModule, setActiveModule] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Detect active module based on current path
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const currentModule = pathSegments[2]; // /portal/module/...
    
    // Handle special case for Userdata
    if (currentModule === 'Userdata') {
      setActiveModule('Userdata');
    } else if (currentModule && submenuData[currentModule]) {
      setActiveModule(currentModule);
    } else {
      setActiveModule(null);
    }
  }, [location.pathname]);

  const handleModuleClick = (module) => {
    if (activeModule === module.path) {
      // If clicking the same module, collapse submenu
      setActiveModule(null);
      navigate(`/portal/${module.path}`);
    } else {
      // Expand submenu and navigate to module
      setActiveModule(module.path);
      navigate(`/portal/${module.path}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ===== Sidebar ===== */}
      <aside
        className={`fixed top-0 left-0 h-screen
  ${collapsed ? "w-20" : "w-72"
        } bg-white border-r border-green-200 shadow-xl transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-5 border-b border-green-100">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/portal")} // 🔹 Navigate to DashboardHome
          >
            <MdDashboard className="text-green-600 text-3xl" />
            {!collapsed && (
              <span className="font-bold text-lg text-gray-700">
                MDM Dashboard
              </span>
            )}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-green-600 hover:bg-green-50 p-2 rounded-lg"
          >
            <MdMenuOpen
              className={`text-2xl transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mt-4 space-y-1 px-3 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === `/portal${item.path ? '/' + item.path : ''}`;
            
            return (
              <NavLink
                key={index}
                to={item.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-purple-800 text-white shadow-md"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-800"
                }`}
              >
                <Icon className="text-2xl" />
                {!collapsed && (
                  <span className="font-medium text-sm">{item.name}</span>
                )}
              </NavLink>
            );
          })}
          
          {/* Dynamic Submenu Section */}
          {activeModule && !collapsed && (
            <div className="mt-6">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {activeModule.charAt(0).toUpperCase() + activeModule.slice(1)} Module
              </div>
              <div className="space-y-1">
                {submenuData[activeModule]?.map((submenu, subIndex) => {
                  const SubIcon = submenu.icon;
                  return (
                    <NavLink
                      key={subIndex}
                      to={`/portal/${submenu.path}`}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all
                        ${
                          isActive
                            ? "bg-purple-100 text-purple-800 border-l-4 border-purple-800"
                            : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                        }`
                      }
                    >
                      <SubIcon className="text-lg" />
                      <span className="text-sm font-medium">{submenu.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-center text-gray-400 border-t">
          {!collapsed && "© 2026 MDM System"}
        </div>
      </aside>

      {/* ===== Main Content ===== */}
      <main
  className={`transition-all duration-300
  ${collapsed ? "ml-20" : "ml-72"}
  h-screen overflow-y-auto bg-gray-100`}
>
  <div className="px-6 md:px-10 py-6">
    <Outlet />
  </div>
</main>

      
    </div>
  );
};

export default Dashboard;
