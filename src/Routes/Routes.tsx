import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { NewRoom } from "../pages/NewRoom/NewRoom";
import { Room } from "../pages/Room/Room";

import { AuthContextProvider } from "../contexts/authContext";

export const Routes = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
        <Route exact path="/rooms/:id" component={Room} />
      </Switch>
    </AuthContextProvider>
  </BrowserRouter>
);
