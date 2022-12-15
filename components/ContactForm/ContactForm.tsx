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
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
      }}
      className="bg-[#ddd] border-t-[2px] flex flex-col justify-center font-black w-full lg:rotate-3 lg:scale-125 overflow-hidden"
    >
      <div className="container mx-auto lg:scale-75 xl:gap-10">
        <div className="lg:-rotate-3 lg:gap-5">
          <div className="flex gap-5 flex-col mx-auto w-1/2">
            <div className="font-thin lg:p-4">
              <form onSubmit={formik.handleSubmit}>
                {/* Email */}
                <div>
                  <label htmlFor="email">Email</label>
                  <div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="w-full"
                    />
                  </div>
                </div>
                {/* Message */}
                <div>
                  <label htmlFor="message">Message</label>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      rows={10}
                      className="w-full"
                    />
                  </div>
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
