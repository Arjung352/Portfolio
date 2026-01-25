import MsgProps from "@/types/props";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { messageSchema, MessageFormData } from "@/types/Message";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Msg = ({ currState, setState }: MsgProps) => {
  // ✅ Hooks MUST be inside component
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
  });

  // 🔒 Disable scroll
  useEffect(() => {
    document.body.style.overflow = currState ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currState]);

  // ✅ Submit handler
  const onSubmit = async (data: MessageFormData) => {
    try {
      await axios.post(
        "https://portfolio-api-sigma-umber.vercel.app/send",
        data,
      );
      toast.success("Message sent successfully!");
      reset();
      setState(false);
    } catch (error) {
      console.error(error);
      toast.error("Error sending message");
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <div
        className={`${
          currState ? "fixed" : "hidden"
        } transition-all duration-300  left-0 top-0 h-full w-full flex justify-center items-center `}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black opacity-80 flex items-center justify-center p-4 z-[9999] isolate overflow-y-auto"
          onClick={() => setState(false)}
        ></div>

        {/* Modal */}
        <div className="relative w-[90%] max-w-md bg-[#111111] text-white rounded-xl p-6 z-9999 shadow-lg">
          {/* Close Button */}
          <button
            onClick={() => setState(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>

          <h2 className="text-xl font-semibold mb-4 text-center">
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <input
              {...register("name")}
              placeholder="Your Name"
              className="p-3 rounded-md bg-[#1f1f1f] outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            {/* Email */}
            <input
              {...register("email")}
              placeholder="Your Email"
              className="p-3 rounded-md bg-[#1f1f1f] outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Message */}
            <textarea
              {...register("message")}
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded-md bg-[#1f1f1f] outline-none resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-blue-600 hover:bg-blue-700 transition rounded-md py-2 font-medium disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Msg;
