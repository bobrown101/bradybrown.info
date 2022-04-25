require("dotenv").config()

import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const ensureEnvVar = (envVar: string): string => {
  if (process.env[envVar]) {
    return String(process.env[envVar]);
  } else {
    throw new Error(`Enviornment variable ${envVar} not found`);
  }
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  console.log('Start of handler')
  try {
    const sendgridKey = ensureEnvVar("SENDGRID_API_KEY");
    const to = ensureEnvVar("PERSONAL_EMAIL");
    const from = ensureEnvVar("WEBSITE_EMAIL");

    sgMail.setApiKey(sendgridKey);

    const msg = {
      to,
      from,
      subject: "bradybrown.info contact form",
      text: `
Name: ${_req.body.name}

Email: ${_req.body.email}

Message:

${_req.body.message}
      `
    };
    const result = await sgMail.send(msg);
    console.log("Below is the sendgrid response")
    console.log(result)
    console.log("Finished priting the sendgrid response body")

    return res.json({ success: true });
  } catch (error: any) {
    console.error("There was an error", error.message);
    res.json({ error: error.message});
  }
};
export default handler;
