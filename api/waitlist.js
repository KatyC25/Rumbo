const KACHIING_WAITLIST_URL = 'https://kachiing.app/api/waitlist'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : ''
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Correo electrónico inválido' })
  }

  try {
    const upstream = await fetch(KACHIING_WAITLIST_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    const body = await upstream.json().catch(() => ({ error: 'Respuesta inválida de Kachiing' }))

    return res.status(upstream.status).json(body)
  } catch {
    return res.status(502).json({ error: 'No se pudo conectar con la waitlist de Kachiing' })
  }
}
