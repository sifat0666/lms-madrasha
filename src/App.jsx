import { Toaster } from "react-hot-toast";

import Dasboard from "./Comonents/Dasboard";
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
import Login from "./pages/Login";
import axios from "axios";
import { serverUrl } from "../utils/config";
import { useEffect } from "react";
import NotAuthenticated from "./pages/NotAuthenticated";
import MashikFeeReport from "./pages/MashikFeeReport";
import KhabarerFeeReport from "./pages/KhabarerFeeReport";
import Fund from "./pages/Accounting/Fund";
import AddPaymentSystem from "./pages/Accounting/AddPaymentSystem";
import FeeName from "./pages/FeeName";
import Settings from "./pages/Settings";
import { useNavigate } from "react-router-dom";
import BokeyaVortiFee from "./pages/BokeyaVortiFee";
import VortFee from "./pages/VortFee";
import ForgetPassword from "./Comonents/ForgetPassword";
import { useQuery } from "react-query";
import IncomeEntryRevised from "./pages/Accounting/IncomeEntryRevised";
import ExpenceEntryRevised from "./pages/Accounting/ExpenceEntryRevised";
import MarkSheetClass from "./pages/MarkSheetClass";
import NotFound from "./Comonents/NotFound";
import PasswordReset from "./Comonents/PasswordReset";
import PodobiEntry from "./pages/PodobiEntry";
import Payroll from "./pages/Payroll";

function App() {
  const navigate = useNavigate();

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
      retry: false,
    }
  );
  // if (isLoading) return <div>Loading....</div>;
  // console.log(data?.data);
  // const [user, setUser] = useState();

  const user = data?.data;

  // useEffect(() => {
  //   if (localStorage.getItem("token") == undefined) {
  //     navigate("/");
  //   }
  // }, []);

  // if (isLoading)
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "100vh",
  //       }}
  //     >
  //       <div
  //         style={{ width: "5rem", height: "5rem", fontWeight: 900 }}
  //         class="spinner-border text-light"
  //         role="status"
  //       >
  //         <span class="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   );

  // const user = userProxy?.data.data;

  return (
    <div>
      {/* <a href="/login">login</a> */}
      <Toaster />
      <Layout />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
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
              <IncomeEntryRevised />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/expence-entry"
          element={
            user?.permissions.includes("audit_permission") ? (
              <ExpenceEntryRevised />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="/fee-name"
          element={
            user?.permissions.includes("audit_permission") ? (
              <FeeName />
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
          path="/bokeya-vorti-fee"
          element={
            user?.permissions.includes("students_control") ? (
              <BokeyaVortiFee />
            ) : (
              <NotAuthenticated />
            )
          }
        />{" "}
        <Route
          path="/vorti-fee"
          element={
            user?.permissions.includes("students_control") ? (
              <VortFee />
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
          path="mark-sheet-class"
          element={
            user?.permissions.includes("result_control") ? (
              <MarkSheetClass />
            ) : (
              <NotAuthenticated />
            )
          }
        />{" "}
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
          path="podobi-entry"
          element={
            user?.permissions.includes("teacher_control") ? (
              <PodobiEntry />
            ) : (
              <NotAuthenticated />
            )
          }
        />
        <Route
          path="payroll"
          element={
            user?.permissions.includes("teacher_control") ? (
              <Payroll />
            ) : (
              <NotAuthenticated />
            )
          }
        />
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
