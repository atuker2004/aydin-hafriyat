import { siteConfig } from "@/lib/site";

const services = {
  kazi: "Kazı ve Hafriyat",
  dolgu: "Dolgu ve Sıkıştırma",
  moloz: "Moloz Taşıma",
  santiye: "Şantiye Hazırlığı",
  diger: "Diğer",
} as const;

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ error: "Geçersiz istek." }, { status: 400 });
    }
    payload = body as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (text(payload.website)) {
    return Response.json({ ok: true });
  }

  const name = text(payload.name);
  const phone = text(payload.phone);
  const service = text(payload.service);
  const message = text(payload.message);
  const email = text(payload.email);

  if (
    !name ||
    name.length > 120 ||
    !phone ||
    phone.length > 40 ||
    !Object.hasOwn(services, service) ||
    !message ||
    message.length > 4000 ||
    email.length > 254 ||
    (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  ) {
    return Response.json(
      { error: "Lütfen form alanlarını kontrol edin." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    return Response.json(
      { error: "E-posta gönderimi yapılandırılmamış." },
      { status: 503 },
    );
  }

  const serviceName = services[service as keyof typeof services];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [siteConfig.email],
        subject: `Web sitesi iletişim formu: ${serviceName}`,
        ...(email ? { reply_to: email } : {}),
        text: [
          `Ad Soyad: ${name}`,
          `Telefon: ${phone}`,
          email ? `E-posta: ${email}` : "",
          `Hizmet: ${serviceName}`,
          "",
          "Mesaj:",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!response.ok) {
      return Response.json(
        { error: "E-posta gönderilemedi." },
        { status: 502 },
      );
    }
  } catch {
    return Response.json(
      { error: "E-posta gönderilemedi." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}