"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { MoonLoader } from "react-spinners";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import {Eye, EyeOff} from 'lucide-react';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is Required"),
  password: Yup.string()
    // .min(8, "Password must be at least 8 characters long")
    // .matches(/[0-9]/, "Password must contain at least one number")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .matches(
    //   /[!@#\$%^&*()_+{}":;<>,.?~\[\]]/,
    //   "Password must contain at least one special character"
    // )
    .required("Password is required"),
});

function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isValid,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      remeberMe: "no",
    },
    validationSchema: LoginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      await sleep(500);

      if (values) {
        toast({ description: "Successfully logged in." });
        console.log(values);
        router.replace("/");
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }
    },
  });

  return (
    <main className="bg-login-hero bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white/25 p-5 rounded-md w-96 max-w-md space-y-4"
      >
        <h1 className="text-2xl text-white font-bold">Login</h1>
        <div>
          <Input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            className={
              errors.email && touched.email
                ? "border-2 ring ring-red-500 ring-offset-2"
                : ""
            }
          />
          {errors.email && touched.email ? (
            <div className="text-xs text-red-500 mt-1">{errors.email}</div>
          ) : null}
        </div>
        
        <div className="relative">
          <Input
            type={isVisible === true ? "text" : "password"}
            name="password"
            required
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            className={
              errors.password && touched.password
                ? "border-2 ring ring-red-500 ring-offset-2"
                : ""
            }
          />
          {errors.password && touched.password ? (
            <div className="text-xs text-red-500 mt-1">{errors.password}</div>
          ) : null}
          <span
            onClick={() => setIsVisible(!isVisible)}
            className="size-5 cursor-pointer absolute top-[10px] right-2 z-10"
          >
            {" "}
            {isVisible ? (
              <Eye />
            ) : (
              <EyeOff />
            )}
          </span>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <Checkbox
            value={(values.remeberMe = "yes")}
            name="rememberMe"
            onChange={handleChange}
            className="border-white"
            id="remeber-me"
          />
          <label htmlFor="remeber-me" className="text-white">
            Remember me
          </label>
        </div>

        <Button
          disabled={!isValid || isSubmitting}
          type="submit"
          className="font-bold"
        >
          LOG IN
          <MoonLoader
            size={20}
            color="white"
            className="ml-2 text-white"
            loading={isSubmitting}
          />
        </Button>
      </form>
    </main>
  );
}

export default Login;
