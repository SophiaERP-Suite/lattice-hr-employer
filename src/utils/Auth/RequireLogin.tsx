import { useEffect, useState } from "react";
import { useAuth } from "../Request/useAuth";
import { fetchUser } from "./AuthRequests";

export const RequireLogin = ({ children }: { children: React.ReactNode }) => {
  const { user, loadUser } = useAuth();
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMyIsImVtYWlsIjoibWF0dEBuZXdhZ2UuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiRW1wbG95ZXIiLCJqdGkiOiJmMWVlNzBlNC0zMmYxLTQ2MDAtYTExMi0xNDcwN2FkZTcyYTYiLCJleHAiOjE3NzE1ODg3MDMsImlzcyI6IkNsZWFyVHJ1c3RBZnJpY2EiLCJhdWQiOiJDbGVhclRydXN0QWZyaWNhVXNlcnMifQ.Oef9e2Wq6hibNSw3TZ2TYWWkvPWY9sZA4LN-ABFjEMo"
    
    if (!token) {
      setCheckingAuth(false);
      // window.location.replace("http://localhost:5173/one/login");
      return;
    }

    if (user) {
      setCheckingAuth(false);
      return;
    }

    fetchUser(token)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error("Unauthorized");
      })
      .then((data) => {
        localStorage.setItem("accessToken", token);
        loadUser(data.user);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("accessToken");
        // window.location.replace("https://LatticeHr/");
      })
      .finally(() => {
        setCheckingAuth(false);
      });
  }, []);

  if (checkingAuth) {
    return null;
  }

  return <>{children}</>;
};
