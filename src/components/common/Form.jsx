"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Cta from "../custom-ui/Cta";
import Input from "../custom-ui/Input";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        toast.success("We’re Here to Help!", {
            description: "Our team is ready to assist you with personalized financial advice.",
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "light",
        });
        reset();
    };

    return (
        <form id="contactForm"
            onSubmit={handleSubmit(onSubmit)}
            className="lg:py-[50px] md:py-8 py-[30px] lg:px-8 custom-sm:px-4 px-5 bg-sky-blue rounded-2xl max-w-[558px] lg:min-h-[502px] max-md:mx-auto flex flex-col space-y-3 md:space-y-4">
            <ToastContainer />
            <Input
                name="fullName"
                placeholder="Full Name"
                errors={errors.fullName}
                {...register("fullName", { required: "Full Name is required" })}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email Address"
                errors={errors.email}
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                    },
                })}
            />
            <Input
                select
                name="subject"
                errors={errors.subject}
                {...register("subject", { required: "Subject is required" })}
            >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
            </Input>

            <Input
                textArea
                name="message"
                placeholder="Message"
                errors={errors.message}
                {...register("message", { required: "Message is required" })}
            />
            <Cta
                type="submit"
                aria-label="submit"
                className="w-full !mt-5 md:!mt-[30px]"
            >
                <span className="relative">Send Message</span>
            </Cta>
        </form>
    );
};

export default Form;
