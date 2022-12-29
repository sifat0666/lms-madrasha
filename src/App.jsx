import { useState } from "react";
import { Toaster } from "react-hot-toast";

import Dasboard from "./Comonents/Dasboard";
import Navbar from "./Comonents/Navbar";
import Layout from "./pages/Layout";
import { Routes, Route } from "react-router-dom";
import NewUser from "./pages/NewUser";
import InstituteInfo from "./pages/InstituteInfo";
import HishabNikash from "./pages/Accounting/HishabNikash";
import Students from "./pages/Students";
import ClassEntry from "./pages/ClassEntry";
import StudentInfo from "./pages/StudentInfo";
import ClassMigration from "./pages/ClassMigration";
import StudentIDCard from "./pages/Report/StudentIDCard";
import StudentAttandance from "./pages/Attendance/StudentAttandance";
import MonthlyFees from "./pages/MonthlyFees";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import IncomeExpenceEntry from "./pages/IncomeExpenceEntry";
import IncomeEntry from "./pages/IncomeEntry";
import ExpenceEntry from "./pages/ExpenceEntry";
import FeesDetermination from "./pages/FeesDetermination";
import Report from "./pages/report";
import ExamEntry from "./pages/ExamEntry";
import ExamFeesDetermination from "./pages/ExamFeesDetermination";
import ResultCondition from "./pages/ResultCondition";
import AdmitCardPrint from "./pages/AdmitCardPrint";
import ExamReport from "./pages/ExamReport";
import MarkEntry from "./pages/MarkEntry";
import MarkSheet from "./pages/MarkSheet";
import TeacherStaff from "./pages/HR/TeacherStaff";
import MonthlyEntry from "./pages/HR/MonthlyEntry";
import SallerySheet from "./pages/HR/SallerySheet";
import PaySallary from "./pages/HR/PaySallary";
import SalaryReport from "./pages/HR/SalaryReport";
import IndividualSallerySheet from "./pages/HR/IndividualSallerySheet";
import DonerMember from "./pages/Doner/DonerMember";
import DonateRecive from "./pages/Doner/DonateRecive";
import AddBook from "./pages/Store/AddBook";
import NewSale from "./pages/Store/NewSale";
import ManageSale from "./pages/Store/ManageSale";
import InvoiceDetail from "./pages/Store/InvoiceDetail";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Layout>
          <Routes>
            <Route path="/" element={<Dasboard />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/students" element={<Students />} />
            <Route
              path="/accounting/hishab-nikash"
              element={<HishabNikash />}
            />
            <Route
              path="/income-expence-entry"
              element={<IncomeExpenceEntry />}
            />

            <Route path="/income-entry" element={<IncomeEntry />} />
            <Route path="/expence-entry" element={<ExpenceEntry />} />
            <Route path="/fees-determination" element={<FeesDetermination />} />
            <Route path="/report" element={<Report />} />
            <Route path="/accounting/monthly-fees" element={<MonthlyFees />} />
            <Route path="/class-entry" element={<ClassEntry />} />

            <Route path="/student-info" element={<StudentInfo />} />
            <Route path="/class-migration" element={<StudentInfo />} />
            <Route path="/student-idcard" element={<StudentIDCard />} />
            <Route path="/student-attandence" element={<StudentAttandance />} />
            <Route path="/student-report" element={<Report />} />

            <Route path="/exam-entry" element={<ExamEntry />} />
            <Route
              path="/exam-fees-determination"
              element={<ExamFeesDetermination />}
            />
            <Route path="/result-condition" element={<ResultCondition />} />
            <Route path="hishab-nikash" element={<HishabNikash />} />
            <Route path="admitcard-print" element={<AdmitCardPrint />} />
            <Route path="exam-report" element={<ExamReport />} />

            <Route path="/class-migration" element={<ClassMigration />} />
            <Route path="/institute-info" element={<InstituteInfo />} />

            <Route path="marks-entry" element={<MarkEntry />} />
            <Route path="mark-sheet" element={<MarkSheet />} />

            <Route path="teacher-staff" element={<TeacherStaff />} />
            <Route path="monthly-entry" element={<MonthlyEntry />} />
            <Route path="sallary-sheet" element={<SallerySheet />} />
            <Route path="pay-sallary" element={<PaySallary />} />
            <Route path="salary-report" element={<SalaryReport />} />
            <Route
              path="individual-salary-sheet"
              element={<IndividualSallerySheet />}
            />

            <Route path="doner-member" element={<DonerMember />} />
            <Route path="donate-recive" element={<DonateRecive />} />

            <Route path="add-book" element={<AddBook />} />
            <Route path="new-sale" element={<NewSale />} />
            <Route path="manage-sell" element={<ManageSale />} />
            <Route path="invoice-details" element={<InvoiceDetail />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </div>
  );
}

export default App;
