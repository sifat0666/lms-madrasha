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
import Report from "./pages/Report";
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
import Login from "./pages/login";
import axios from "axios";
import { serverUrl } from "../utils/config";
import { useForm } from "react-hook-form";
// import { useContext } from "react";
import { useEffect } from "react";
import NotAuthenticated from "./pages/NotAuthenticated";
import TestPdf from "../pdf/TestPdf";
import MashikFeeReport from "./pages/MashikFeeReport";
import KhabarerFeeReport from "./pages/KhabarerFeeReport";
import Fund from "./pages/Accounting/Fund";
import AddPaymentSystem from "./pages/Accounting/AddPaymentSystem";

function App() {
  const { data, isLoading } = useQuery(
    ["me"],
    () =>
      axios.get(`${serverUrl}/api/user`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    {
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: false,
    }
  );
  // if (isLoading) return <div>Loading....</div>;
  // console.log(data?.data);
  // const [user, setUser] = useState();

  const user = data?.data;

  // const user = userProxy?.data.data;

  return (
    <div>
      {/* <a href="/login">login</a> */}
      <Toaster />
      <Layout />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route
          path="/newuser"
          element={
            data?.data.roles.name === "admin" ? (
              <NewUser />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/institute-info"
          element={
            data?.data.roles.name === "admin" ? (
              <InstituteInfo />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        //audit
        <Route
          path="accounting/fund"
          element={
            user?.permissions.includes("audit_permission") ? (
              <Fund />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="accounting/payment-system"
          element={
            user?.permissions.includes("audit_permission") ? (
              <AddPaymentSystem />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/accounting/hishab-nikash"
          element={
            user?.permissions.includes("audit_permission") ? (
              <HishabNikash />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/income-expence-entry"
          element={
            user?.permissions.includes("audit_permission") ? (
              <IncomeExpenceEntry />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/income-entry"
          element={
            user?.permissions.includes("audit_permission") ? (
              <IncomeEntry />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/expence-entry"
          element={
            user?.permissions.includes("audit_permission") ? (
              <ExpenceEntry />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/fees-determination"
          element={
            user?.permissions.includes("audit_permission") ? (
              <FeesDetermination />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/mashik-fee-report"
          element={
            user?.permissions.includes("audit_permission") ? (
              <MashikFeeReport />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/khabar-fee-report"
          element={
            user?.permissions.includes("audit_permission") ? (
              <KhabarerFeeReport />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/accounting/monthly-fees"
          element={
            user?.permissions.includes("audit_permission") ? (
              <MonthlyFees />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        //Student
        <Route
          path="/class-entry"
          element={
            user?.permissions.includes("students_control") ? (
              <ClassEntry />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/student-info"
          element={
            user?.permissions.includes("students_control") ? (
              <StudentInfo />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/class-migration"
          element={
            user?.permissions.includes("students_control") ? (
              <ClassMigration />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/students"
          element={
            user?.permissions.includes("students_control") ? (
              <Students />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/class-migration"
          element={
            user?.permissions.includes("students_control") ? (
              <ClassMigration />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/student-idcard"
          element={
            user?.permissions.includes("students_control") ? (
              <StudentIDCard />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/student-attandence"
          element={
            user?.permissions.includes("students_control") ? (
              <StudentAttandance />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/student-report"
          element={
            user?.permissions.includes("students_control") ? (
              <Report />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/exam-entry"
          element={
            user?.permissions.includes("exam_control") ? (
              <ExamEntry />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/exam-fees-determination"
          element={
            user?.permissions.includes("exam_control") ? (
              <ExamFeesDetermination />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/result-condition"
          element={
            user?.permissions.includes("exam_control") ? (
              <ResultCondition />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="hishab-nikash"
          element={
            user?.permissions.includes("exam_control") ? (
              <HishabNikash />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="admitcard-print"
          element={
            user?.permissions.includes("exam_control") ? (
              <AdmitCardPrint />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="exam-report"
          element={
            user?.permissions.includes("exam_control") ? (
              <ExamReport />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        //result
        <Route
          path="marks-entry"
          element={
            user?.permissions.includes("result_control") ? (
              <MarkEntry />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="mark-sheet"
          element={
            user?.permissions.includes("result_control") ? (
              <MarkSheet />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        //teacher
        <Route
          path="teacher-staff"
          element={
            user?.permissions.includes("teacher_control") ? (
              <TeacherStaff />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="monthly-entry"
          element={
            user?.permissions.includes("teacher_control") ? (
              <MonthlyFees />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="sallary-sheet"
          element={
            user?.permissions.includes("teacher_control") ? (
              <SallerySheet />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="pay-sallary"
          element={
            user?.permissions.includes("teacher_control") ? (
              <PaySallary />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="salary-report"
          element={
            user?.permissions.includes("teacher_control") ? (
              <SalaryReport />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="individual-salary-sheet"
          element={
            user?.permissions.includes("teacher_control") ? (
              <IndividualSallerySheet />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="doner-member"
          element={
            user?.permissions.includes("doner_control") ? (
              <DonerMember />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="donate-recive"
          element={
            user?.permissions.includes("doner_control") ? (
              <DonateRecive />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        //need to add a doner report
        <Route
          path="add-book"
          element={
            user?.permissions.includes("library_control") ? (
              <AddBook />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="new-sale"
          element={
            user?.permissions.includes("library_control") ? (
              <NewSale />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="manage-sell"
          element={
            user?.permissions.includes("library_control") ? (
              <ManageSale />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="invoice-details"
          element={
            user?.permissions.includes("library_control") ? (
              <InvoiceDetail />
            ) : (
              <NotAuthenticated />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
