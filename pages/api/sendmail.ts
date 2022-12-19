// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

type Data = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as any);

  const formData = async function () {
    const msg = {
      to: "carlwicker@gmail.com", // Change to your recipient
      from: "hello@carlwicker.co.uk", // Change to your verified sender
      subject: "Message from website",
      text: req.body,
      html: req.body,
    };

    console.log(msg);

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  };

  formData();

  res.status(200).json({ status: "OK" });
}
