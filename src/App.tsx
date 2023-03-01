import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

// Page Imports
import {
  Login,
  Home,
  MyProfile,
  PropertyDetails,
  EditProfile,
  AllProperties,
  CreateProperty,
} from "./pages";

// Provider Imports

import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { ColorModeContextProvider } from "contexts/ColorModeContext";
import { Title, Sider, Layout, Header } from "components/layout";
import { authProvider } from "contexts/AuthContext";
import { VillaOutlined } from "@mui/icons-material";

// Axios Instance

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

// Main App

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "Property",
              list: AllProperties,
              create: CreateProperty,
              show: PropertyDetails,
              icon: <VillaOutlined />,
            },
            {
              name: "Agent",
              list: MuiInferencer,
            },
            {
              name: "review",
              list: MuiInferencer,
            },
            {
              name: "message",
              list: MuiInferencer,
            },
            {
              name: "my-property",
              list: MuiInferencer,
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
          DashboardPage={Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
