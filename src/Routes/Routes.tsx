import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { NewRoom } from "../pages/NewRoom/NewRoom";
import { Room } from "../pages/Room/Room";
import { AdminRoom } from "../pages/Admin/AdminRoom";

import { AuthContextProvider } from "../contexts/authContext";
import { ThemeContextProvider } from "../contexts/themeContext";

export const Routes = () => (
  <BrowserRouter>
    <ThemeContextProvider>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route exact path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
