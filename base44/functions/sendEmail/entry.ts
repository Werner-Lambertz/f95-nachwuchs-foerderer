Deno.serve(async (req) => {
  try {
    const { subject, body, from_name } = await req.json();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${from_name || "Förderverein F95 NLZ"} <onboarding@resend.dev>`,
        to: ["berufsberatung.nlz@f95.de"],
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