import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MailsPage from "./pages/MailsPage";
import MailDetailPage from "./pages/MailDetailPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/mail/:term" exact>
          <MailsPage />
        </Route>
        <Route path="/mail/search/:searchTerm" exact>
          <SearchPage />
        </Route>
        <Route path="/mail/:term/:emailId" exact>
          <MailDetailPage />
        </Route>
        <Route path="*">
          <Redirect to="/mail/inbox" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
