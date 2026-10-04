import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, videoUrl, message, honeypot } = body;

    // 1. Anti-spam Honeypot Check (If filled, silently reject as bot)
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Recibido correctamente' });
    }

    // 2. Input Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Por favor, ingresa un nombre válido.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Por favor, ingresa un correo electrónico válido.' },
        { status: 400 }
      );
    }

    // 3. Basic Sanitization (prevent XSS / injection)
    const sanitize = (str: string) =>
      str.replace(/[<>]/g, '').trim().slice(0, 1000);

    const safeData = {
      name: sanitize(name),
      email: email.trim().toLowerCase(),
      phone: phone ? sanitize(phone) : 'No especificado',
      videoUrl: videoUrl ? sanitize(videoUrl) : 'No especificado',
      message: message ? sanitize(message) : 'Solicitud de demo gratuita de 1 clip',
      receivedAt: new Date().toISOString(),
    };

    // Log internally for processing
    console.log('[SMD Contact Lead Received]:', safeData);

    return NextResponse.json({
      success: true,
      message: '¡Mensaje recibido con éxito! Alan te responderá en menos de 2 horas hábiles.',
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Hubo un error al procesar tu solicitud. Intenta por WhatsApp.' },
      { status: 500 }
    );
  }
}
