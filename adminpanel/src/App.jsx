import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Login from "./Login/Login";
import Adminroutes from "./protected/Adminroutes";

const Unauthorized = lazy(() => import("./Homepage/Unauthorized"));
const Main = lazy(() => import("./Homepage/Main"));
const AddClient = lazy(() => import("./Homepage/AddClient"));
const AddProduct = lazy(() => import("./Homepage/AddProduct"));
const ViewDetails = lazy(() => import("./Homepage/ViewDetails"));
const ViewSubscribeEmail = lazy(() => import("./Homepage/ViewSubscribeEmail"));

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* PROTECTED ADMIN ROUTES */}
          <Route element={<Adminroutes />}>
            <Route path="/admin/main" element={<Main />} />
            <Route path="/admin/addproduct" element={<AddProduct />} />
            <Route path="/admin/addclient" element={<AddClient />} />
            <Route path="/admin/seerequest" element={<ViewDetails />} />
            <Route path="/admin/subscriberlist" element={<ViewSubscribeEmail />} />
          </Route>

          <Route path="/unauthorized/acess" element={<Unauthorized />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
