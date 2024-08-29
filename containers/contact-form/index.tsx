"use client";
import React, { ComponentRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import Paragraph from "@/components/common/paragraph";

interface ContactFormProps extends ComponentProps<"div">, PropsWithChildren {}

export default function ContactForm({
  children,
  className,
  ...resProps
}: ContactFormProps) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<ComponentRef<"form">>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
          },
          () => {
            setError(true);
          }
        );
    }
  };
  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className={cn(
        className,
        " bg-white-one rounded-lg text-xl flex flex-col gap-8 justify-center ",
        "px-14 py-20"
      )}
    >
      <Paragraph.Description type="quote" bold className="text-foreground">
        Dear Dewa Surya Ariesta
      </Paragraph.Description>
      <textarea
        rows={6}
        required
        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
        name="message"
        placeholder="type your message here"
      />
      <Paragraph.Description type="quote" bold className="text-foreground">
        My mail address is:
      </Paragraph.Description>
      <input
        name="user_email"
        type="email"
        placeholder="please provide your email here"
        required
        className="bg-transparent border-b-2 border-b-black outline-none"
      />

      <Paragraph.Description type="quote" bold className="text-foreground">
        Regards
      </Paragraph.Description>
      <Button>Send</Button>
      {success && (
        <span className="text-green-600 font-semibold">
          Your message has been sent successfully!
        </span>
      )}
      {error && (
        <span className="text-red-600 font-semibold">
          Something went wrong!
        </span>
      )}
    </form>
  );
}
