import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SMD - Reciclo videos largos en clips cortos';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#08080a',
          backgroundImage:
            'radial-gradient(circle at 50% 20%, rgba(204, 145, 102, 0.25) 0%, rgba(8, 8, 10, 0) 70%)',
          padding: '60px',
          border: '12px solid #1c1d22',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 24px',
            borderRadius: '9999px',
            backgroundColor: '#121317',
            border: '1px solid #cc9166',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              color: '#cc9166',
              fontSize: '18px',
              fontFamily: 'sans-serif',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            SMD • Alan • Repurposing Audiovisual
          </span>
        </div>

        <div
          style={{
            fontSize: '58px',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.15,
            maxWidth: '1000px',
            marginBottom: '24px',
            fontFamily: 'serif',
          }}
        >
          Reciclo videos largos en clips cortos
        </div>

        <div
          style={{
            fontSize: '24px',
            color: '#9194a1',
            textAlign: 'center',
            maxWidth: '850px',
            lineHeight: 1.4,
            marginBottom: '36px',
            fontFamily: 'sans-serif',
          }}
        >
          Para Reels, TikTok y YouTube Shorts • Servicio Done-For-You para podcasters y creadores.
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              padding: '12px 32px',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              color: '#08080a',
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'sans-serif',
            }}
          >
            Demo 100% Gratis • WhatsApp: +54 9 11 2788-7093
          </div>
          <div
            style={{
              color: '#cc9166',
              fontSize: '18px',
              fontFamily: 'sans-serif',
            }}
          >
            videos.serviciodemarketingdigital.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
