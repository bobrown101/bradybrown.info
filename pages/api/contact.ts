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
    const sendgridKey = ensureEnvVar("sendgrid_api_key");
    const to = ensureEnvVar("personal_email");
    const from = ensureEnvVar("website_email");
    console.log('after env vars')

    sgMail.setApiKey(sendgridKey);
    console.log('after setApiKey')

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
    console.log('after sgMail.send', result)
    return res.json({ success: true });
  } catch (error) {
    console.error("There was an error", JSON.stringify(error));
    res.json({ error: "5"+ JSON.stringify(error) + error.message + JSON.stringify(process.env) });
  }
};
export default handler;
