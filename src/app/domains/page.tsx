"use client";

import SearchSection from "@/components/SearchSection";
import { Button } from "@/components/ui/button";
import React from "react";
import { Plus } from "lucide-react";
import DomainsList from "./features/domainList";
import { useDomainStore } from "@/lib/store/domain-store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import { MoonLoader } from "react-spinners";

const DomainSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^(?!-)[A-Za-z0-9-]{1,63}(?:\.[A-Za-z]{2,63})+(?!-)$/,
      "Invalid domain format"
    )
    .required("Domain is required"),
  description: Yup.string()
    // Minimum length validation
    .min(1, "Description cannot be empty")
    // Optional additional validation (uncomment if needed)
    // .max(255, "Description cannot be longer than 255 characters")
    .required("Description is required"),
});

function Domains() {
  const Domains = useDomainStore((state) => state.domains);
  const addDomain = useDomainStore((state) => state.addDomain);

  const { toast } = useToast();

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
    resetForm
  } = useFormik({
    initialValues: {
      id: 'hello',
      name: "",
      description: "",
      status: "Active",
    },
    validationSchema: DomainSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: async (values) => {
      await sleep(500);
      const newId = uuid();
      let data = {...values, id: newId};
      console.log(data);

      if (values) {
        toast({ description: "Domain succesfully added." });
        addDomain(data);
        resetForm();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "Please try again",
        });
      }
    },
  });

  return (
    <main className="px-3 py-20 h-screen overflow-auto">
      <SearchSection header="Domains" />
      <section>
        <div className="flex justify-end mb-10">
          <Popover>
            <PopoverTrigger asChild>
              <Button>
                <Plus /> Add Domain
              </Button>
            </PopoverTrigger>

            <PopoverContent align="end" className="w-80">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <p className="text-lg text-muted-foreground">
                    Add new domain.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="domainName">Domain name</Label>
                    <Input
                      name="name"
                      id="domainName"
                      required
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="example.com"
                      className={`col-span-2 h-8 ${
                        errors.name && touched.name
                          ? "border-2 ring ring-red-500 ring-offset-2"
                          : ""
                      }`}
                      type="text"
                    />
                    {errors.name && touched.name ? (
                      <div className="text-xs text-red-500">{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="grid grid-cols-2 items-center gap-4">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      required
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // name="description"
                      id="description"
                      className={`col-span-2 h-8 ${
                        errors.description && touched.description
                          ? "border-2 ring ring-red-500 ring-offset-2"
                          : ""
                      }`}
                      type="text"
                    />
                    {errors.description && touched.description ? (
                      <div className="text-xs text-red-500">
                        {errors.description}
                      </div>
                    ) : null}
                  </div>
                  <Button
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    className="font-bold mt-3"
                  >
                    Add domain
                    <MoonLoader
                      size={20}
                      color="white"
                      className="ml-2 text-white"
                      loading={isSubmitting}
                    />
                  </Button>
                </div>
              </form>
            </PopoverContent>
          </Popover>
        </div>
        <DomainsList domains={Domains} />
      </section>
    </main>
  );
}

export default Domains;
