import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Must contain an email address"),
      message: Yup.string().required("Message is required."),
    }),
    onSubmit: (values, actions) => {
      (async () => {
        const response = await fetch("/api/sendmail", {
          method: "POST",
          body: JSON.stringify(values),
        });
      })();

      actions.setSubmitting(false);
    },
  });

  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#999] flex flex-col justify-center font-black w-full overflow-hidden"
    >
      <div className="container mx-auto xl:gap-10 text-white ">
        <div className="lg:gap-5">
          <div className="flex gap-5 flex-col mx-auto w-1/2">
            <div className="font-thin lg:p-4">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-5 border-y-5"
              >
                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-md font-thin">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="border-0 w-full bg-[#ccc] text-stone-700"
                  />
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message" className="text-md font-thin">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    rows={10}
                    className="w-full bg-[#ccc] border-0 text-stone-700"
                    draggable="false"
                  />
                </div>
                <button
                  type="submit"
                  className="p-3 font-semibold bg-stone-700 hover:bg-stone-500 text-white rounded-md transition-all ease-in duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
