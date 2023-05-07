import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charts from "components/Charts/Charts";
import Expenses from "components/Expenses/Expenses";
import Header from "components/Header/Header";
import { Context } from "provider/Provider";
import IncomeStatement from "pages/income-statement/IncomeStatement";
import EmiCalculator from "pages/EmiCalculator";
import SupportPopUp from "components/Support/PopUp/PopUp";
import Footer from "components/Footer/Footer";

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Charts />
              <Footer />
              <SupportPopUp />
            </>
          }
        />
        <Route
          path="/expenses"
          element={
            <>
              <Header />
              <Expenses Context={Context} />
              <Footer />
              <SupportPopUp />
            </>
          }
        />
        <Route
          path="/loan_emi_calculator"
          element={
            <>
              <Header />
              <EmiCalculator />
              <Footer />
              <SupportPopUp />
            </>
          }
        />
        <Route
          path="/income-statement"
          element={
            <>
              <Header />
              <IncomeStatement Context={Context} />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterComponent;