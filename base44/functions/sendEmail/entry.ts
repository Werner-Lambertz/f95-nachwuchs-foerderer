Deno.serve(async (req) => {
  try {
    const { subject, body, from_name, to } = await req.json();

    const ALLOWED_RECIPIENTS = ["info@fv-f95-nlz.de", "pr@fv-f95-nlz.de"];
    const requested = String(to || "").toLowerCase();
    const recipient = ALLOWED_RECIPIENTS.includes(requested) ? requested : "info@fv-f95-nlz.de";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${from_name || "Förderverein F95 NLZ"} <noreply@fv-f95-nlz.de>`,
        to: [recipient],
        subject,
        text: body,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return Response.json({ error: data.message || "Fehler beim Senden" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});