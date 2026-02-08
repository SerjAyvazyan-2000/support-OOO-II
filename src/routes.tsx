import { createBrowserRouter ,Navigate } from "react-router-dom";
import Authorization from "./pages/authorization/authorization";
import AllEmployeeChats from "./pages/allEmployeeChats/allEmployeeChats";
import App from "./App";
import ChatWithUser from "./pages/chatWithUser/chatWithUser";
import TotalTraffic from "./pages/totalTraffic/totalTraffic";
import AllAdminChats from "./pages/allAdminChats/allAdminChats";
import EmployeeStatistics from "./pages/employeeStatistics/employeeStatistics";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
          {
        index: true,
        element: <Navigate to="/authorization" replace />,
      },
      {
        path: "/authorization",
        element: <Authorization />,
        handle: {
          hideHeader: true,
        },
      },
      {
        path: "/allEmployeeChats",
        element: <AllEmployeeChats />,
      },
          {
        path: "/allAdminChats",
        element: <AllAdminChats />,
      },


      {
        path: "/chatWithUser/:id",
        element: <ChatWithUser />,
        handle: {
          showChatInfo: true,
        },
      },

        {
        path: "/totalTraffic",
        element: <TotalTraffic />,
        
      },
        {
        path: "/employeeStatistics",
        element: <EmployeeStatistics />,
        
      },
    ],
  },
]);
