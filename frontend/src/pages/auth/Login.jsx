import CommonForm from "@/components/common-form";
import { FaBookOpen, FaSun, FaMoon } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Canvas } from "@react-three/fiber";
import { Suspense, useContext, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { signInFormControls, signUpFormControls } from "@/config";
import { AuthContext } from "@/context/auth-context";
import { Link } from "react-router-dom";
import Book from "@/model/Book";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const {
    signInFormData,
    setSignInFormData,
    signUpFormData,
    setSignUpFormData,
    handleRegisterUser,
    handleLoginUser,
  } = useContext(AuthContext);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleTabChange(value) {
    setActiveTab(value);
  }

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  function checkIfSignInFormIsValid() {
    return (
      signInFormData &&
      signInFormData.userEmail !== "" &&
      signInFormData.password !== ""
    );
  }

  function checkIfSignUpFormIsValid() {
    return (
      signUpFormData &&
      signUpFormData.userName !== "" &&
      signUpFormData.userEmail !== "" &&
      signUpFormData.password !== ""
    );
  }

  const sizeBook = () => {
    let SScale, SPosition;

    if (window.innerWidth < 768) {
      SScale = [0.9, 0.9, 0.9];
      SPosition = [0, -6.5, -4.3];
    } else {
      SScale = [1, 1, 1];
      SPosition = [0, -6.5, -4.3];
    }

    return [SScale, SPosition];
  };

  const [SScale, SPosition] = sizeBook();

  return (
    <div>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <CommonForm
            formControls={signInFormControls}
            formData={signInFormData}
            setFormData={setSignInFormData}
            handleSubmit={handleLoginUser}
            isFormValid={checkIfSignInFormIsValid}
          />
        </TabsContent>
        <TabsContent value="signup">
          <CommonForm
            formControls={signUpFormControls}
            formData={signUpFormData}
            setFormData={setSignUpFormData}
            handleSubmit={handleRegisterUser}
            isFormValid={checkIfSignUpFormIsValid}
          />
        </TabsContent>
      </Tabs>
      <Canvas camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={null}>
          <directionalLight position={[10, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1efff" groundColor="#000000" intensity={1} />
          <Book position={SPosition} scale={SScale} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default AuthPage;
