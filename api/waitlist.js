const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSd5qP0ff3_0mb-_bmiSPYtVMPLYtAmo6xIYQR1vdm1DcnB5Ag/formResponse'

const fields = {
  name: 'entry.181659099',
  email: 'entry.1653701009',
  consent: 'entry.866911820',
  age: 'entry.180439581',
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Método no permitido' })
  }

  const name = typeof req.body?.name === 'string' ? req.body.name.trim().replace(/\s+/g, ' ') : ''
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : ''
  const age = Number(req.body?.age)
  const consent = req.body?.consent === true

  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ error: 'Ingresa tu nombre completo.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Ingresa un correo electrónico válido.' })
  }
  if (!Number.isInteger(age) || age < 1 || age > 120) {
    return res.status(400).json({ error: 'Ingresa una edad válida.' })
  }
  if (!consent) {
    return res.status(400).json({ error: 'Debes autorizar el uso de tus datos para continuar.' })
  }

  const formData = new URLSearchParams({
    [fields.name]: name,
    [fields.email]: email,
    [fields.age]: String(age),
    [fields.consent]: 'Acepto',
    fvv: '1',
    pageHistory: '0',
  })

  try {
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData,
      redirect: 'manual',
    })

    if (!response.ok && response.status !== 302 && response.status !== 303) {
      throw new Error(`Google Forms respondió con ${response.status}`)
    }

    return res.status(201).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'No pudimos guardar tus datos. Inténtalo de nuevo.' })
  }
}
