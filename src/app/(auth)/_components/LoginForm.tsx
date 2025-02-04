"use client";

import { useActionState } from "react";
import { login } from "../_lib/actions";
import Button from "@/components/Button";
import Input from "@/components/Input";
import smLogo from ".smo-blue.svg";
import smLoginImage from ".smop-login.svg";
import Image from "next/image";

export default function LoginForm() {
  // we're only returning error from the login action, so named the first arg error
  const [error, action, isPending] = useActionState(login, { message: "" });

  return (
    <div className="w-full max-w-[328px] lg:max-w-[800px] border border-gray-300 bg-white">
      {error.message && (
        <p className="bg-error p-3 text-white text-xs">{error.message}</p>
      )}
      <div className="p-8 flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="mt-auto w-full lg:w-64">
          <Image src={smLoginImage} alt="sm-login-image" />
        </div>
        <div className="flex flex-col gap-6 flex-1">
          <div className="flex items-center gap-4">
            <Image src={smLogo} alt="sm-logo" width={50} />
            <p className="text-2xl">Welcome Back!</p>
          </div>
          <form action={action} className="flex flex-col gap-4">
            <Input type="email" name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
