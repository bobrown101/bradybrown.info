import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const ensureEnvVar = (envVar: string): string => {
  if (process.env[envVar]) {
    return String(process.env[envVar]);
  } else {
    throw new Error(`Enviornment variable ${envVar} not found`);
  }
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
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
    sgMail.send(msg);
    return res.json({ success: true });
  } catch (error) {
      console.error(error)
    res.json({ error });
  }
};
export default handler;
