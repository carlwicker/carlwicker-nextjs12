import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ContactForm() {
  const { ref, inView, entry } = useInView({ threshold: 1 });
  const [showEmail, setShowEmail] = useState<Boolean>(true);

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
        console.log(values);
        const response = await fetch("/api/sendmail", {
          method: "POST",
          body: JSON.stringify(values),
        });
      })();

      setShowEmail(false);
      actions.setSubmitting(false);
      return;
    },
  });

  return (
    <section
      style={{
        boxShadow: "20px 25px 45px rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgb(168 162 158)",
      }}
    >
      <div className="container flex mx-auto py-20 px-5 lg:gap-20 md:gap-20 text-lg flex-col lg:flex-row gap-0">
        <div className="xl:w-1/3 xl:flex hidden"></div>
        <div className="flex flex-col xl:w-1/3 lg:w-1/2 mt-5 min-h-fit font-thin gap-10">
          <h2 className="text-2xl">
            Aliquid sapiente fugit ab maxime minus quos. Ipsa cupiditate
            asperiores mollitia fuga?
          </h2>
          <p>
            Asperiores, optio doloremque. Sequi a fuga eius iste aut explicabo,
            ad quasi id maiores voluptates! Doloremque libero voluptate aliquid
            at. Natus autem, officia velit nam obcaecati reprehenderit placeat
            possimus in dolorem eaque expedita. Dicta, doloribus. Animi iure
            rem, excepturi ad quos ab quas repellat provident! Nam, ex cum
            adipisci ratione molestiae, sit architecto aliquam nisi nulla dolor
            laborum deserunt assumenda, quo enim? Autem consectetur ad, incidunt
            nobis quisquam, quos atque illum quasi corporis, explicabo fugit!
            Harum odio saepe cum dicta, magni incidunt hic optio repellendus
            libero, ut repudiandae, eius tempora iste! Provident animi tenetur
            reprehenderit optio deserunt. Ex debitis quis neque dolorum
            doloremque veniam vitae. Nemo ullam eveniet exercitationem quod
            deleniti repellat.
          </p>
          <p>
            Repellat eum totam. Dolor quas harum ex ducimus tempore sed amet
            saepe totam consequuntur adipisci, voluptas laborum, corrupti
            aliquam, magni animi. Repellat deleniti impedit ullam rerum aut, a
            iusto veniam excepturi quia nihil? Culpa sunt accusamus similique.
            Odit excepturi sunt, quaerat ipsa sapiente sit modi voluptatum
            adipisci vero deserunt magni quisquam iste maiores tempore. Eligendi
            quidem provident in, iusto deleniti fuga aliquam illum! Fugit magni,
            in mollitia dolor maxime possimus asperiores laboriosam, vel
            deleniti perspiciatis vitae? Aliquam, excepturi nobis. Error numquam
            illum adipisci earum laudantium dolorem, quo voluptatem harum
            necessitatibus dicta, consectetur reiciendis! Distinctio,
            accusantium. Eveniet voluptatibus.
          </p>
        </div>
        <div className="flex flex-col xl:w-1/3 lg:w-1/2 mt-5 font-thin gap-10">
          <p>
            Please feel free to contact me with any queries regarding my
            design/development work. I&lsquo;m currently looking for a creative
            developer role in a Brighton agency.
          </p>
          <div className="font-thin  w-full">
            <form
              onSubmit={formik.handleSubmit}
              className={`flex flex-col gap-5 ${
                showEmail ? "opacity-1" : "opacity-25"
              }`}
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
                  className={`w-full bg-[#ccc]  text-stone-700 `}
                  disabled={!showEmail}
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
                  className={`w-full bg-[#ccc]  text-stone-700 `}
                  draggable="false"
                  disabled={!showEmail}
                />
              </div>
              <motion.button
                type="submit"
                ref={ref}
                className={`p-3 font-semibold ${
                  showEmail && "hover:bg-stone-500"
                }  text-white rounded-md transition-all ease-in duration-300 ${
                  inView && showEmail ? "bg-blue-400" : "bg-stone-700"
                }`}
                disabled={!showEmail}
              >
                {showEmail ? "Email Me!" : "Message Sent!"}
              </motion.button>
            </form>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Recusandae, facere. Ullam aut omnis culpa nam earum accusamus odio,
            quidem doloribus eligendi nemo maxime facilis veritatis iure nulla?
            Sunt itaque eum, voluptas excepturi impedit culpa velit quibusdam
            molestias voluptatibus, quisquam necessitatibus? Excepturi ad
            distinctio laudantium odio voluptates beatae ipsam rerum! Fugiat
            voluptates repudiandae nostrum recusandae atque maxime temporibus
            distinctio dolorum nisi deleniti praesentium.
          </p>
        </div>
      </div>
    </section>
  );
}
