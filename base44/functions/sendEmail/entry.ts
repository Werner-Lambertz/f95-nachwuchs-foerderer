import { SMTPClient } from "npm:emailjs@4.0.3";

Deno.serve(async (req) => {
  try {
    const { to, subject, body, from_name } = await req.json();

    const client = new SMTPClient({
      user: Deno.env.get("SMTP_USER"),
      password: Deno.env.get("SMTP_PASS"),
      host: Deno.env.get("SMTP_HOST"),
      port: 587,
      tls: true,
    });

    await client.sendAsync({
      from: `${from_name || "Kontaktformular"} <${Deno.env.get("SMTP_USER")}>`,
      to,
      subject,
      text: body,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});