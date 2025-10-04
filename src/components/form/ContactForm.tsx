"use client";

import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import InjectableSvg from "../common/InjectableSvg";

interface FormData {
  user_name: string;
  user_email: string;
  phone?: string;
  subject?: string;
  message: string;
}

const schema = yup
  .object({
    user_name: yup.string().required("Name is required"),
    user_email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = () => {
    if (form.current) {
      emailjs
        .sendForm(
          "service_mu954jg", 
          "template_tebrvzd", 
          form.current,
          "aojAgt5xUvJGLgAD1" 
        )
        .then(
          () => {
            toast.success("Message sent successfully!", {
              position: "top-center",
            });
            reset();
          },
          (error) => {
            console.error("Email send failed:", error.text);
            toast.error("Failed to send message. Try again later.", {
              position: "top-center",
            });
          }
        );
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(sendEmail)}
      className="contact__form"
      id="contact-form"
    >
      <div className="row gutter-20">
        <div className="col-lg-4">
          <div className="form-grp">
            <input
              {...register("user_name")}
              type="text"
              placeholder="Name"
            />
            <p className="form_error">{errors.user_name?.message}</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-grp">
            <input
              {...register("user_email")}
              type="email"
              placeholder="E-mail"
            />
            <p className="form_error">{errors.user_email?.message}</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-grp">
            <input {...register("phone")} type="tel" name="phone" placeholder="Phone" />
          </div>
        </div>
      </div>

      <div className="form-grp">
        <input {...register("subject")} type="text" name="subject" placeholder="Subject" />
      </div>

      <div className="form-grp">
        <textarea
          {...register("message")}
          placeholder="Message"
        ></textarea>
        <p className="form_error">{errors.message?.message}</p>
      </div>

      <button type="submit" className="btn red-btn">
        Send Me Message{" "}
        <InjectableSvg
          src="/assets/img/icon/right_arrow.svg"
          alt=""
          className="injectable"
        />
      </button>
    </form>
  );
};

export default ContactForm;
