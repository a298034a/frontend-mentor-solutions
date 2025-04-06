import Attribution from "./Attribution";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Attribution />
      <Outlet />
    </div>
  );
}
