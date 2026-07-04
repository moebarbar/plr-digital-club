import { getResend } from './resend'

export interface DigestProduct {
  title: string
  description: string | null
  image_url: string | null
  categoryName: string | null
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function productRow(p: DigestProduct, appUrl: string): string {
  const title = escapeHtml(p.title)
  const desc = p.description ? escapeHtml(p.description.slice(0, 140)) + (p.description.length > 140 ? '…' : '') : ''
  const cat = p.categoryName ? escapeHtml(p.categoryName) : ''
  const img = p.image_url
    ? `<img src="${escapeHtml(p.image_url)}" alt="${title}" width="88" height="55" style="width:88px;height:55px;object-fit:cover;border-radius:8px;display:block;" />`
    : `<div style="width:88px;height:55px;background:#1A1A4E;border-radius:8px;"></div>`

  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #EEF0F6;">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td width="100" valign="top">${img}</td>
          <td valign="top" style="padding-left:12px;">
            ${cat ? `<span style="font-size:11px;color:#1565C0;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;">${cat}</span><br/>` : ''}
            <span style="font-size:15px;color:#1A1A4E;font-weight:bold;">${title}</span>
            ${desc ? `<br/><span style="font-size:13px;color:#6b7280;line-height:1.5;">${desc}</span>` : ''}
          </td>
        </tr></table>
      </td>
    </tr>`
}

export async function sendDigestEmail(
  email: string,
  firstName: string,
  products: DigestProduct[]
): Promise<void> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://plrdigitalclub.com'
  const safeName = escapeHtml(firstName)
  const count = products.length
  const rows = products.map((p) => productRow(p, appUrl)).join('')

  await getResend().emails.send({
    from: 'PLR Digital Club <hello@plrdigitalclub.com>',
    to: email,
    subject: `${count} new product${count === 1 ? '' : 's'} added to your library this week`,
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
      <body style="margin:0;padding:0;background:#F8F8FF;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8FF;padding:40px 16px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                <!-- Header -->
                <tr>
                  <td style="background:#1A1A4E;padding:28px 32px;text-align:center;border-radius:12px 12px 0 0;">
                    <img src="${appUrl}/logo-white.png" alt="PLR Digital Club" height="40" style="height:40px;width:auto;display:inline-block;" />
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="background:#ffffff;padding:32px;">
                    <h1 style="margin:0 0 8px;font-size:22px;color:#1A1A4E;">New in your library this week ✨</h1>
                    <p style="margin:0 0 20px;font-size:14px;color:#6b7280;line-height:1.6;">
                      Hi ${safeName}, ${count} new product${count === 1 ? ' was' : 's were'} added to your membership — ready to download, rebrand, and sell.
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${rows}
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                      <tr>
                        <td align="center">
                          <a href="${appUrl}/dashboard/whats-new"
                             style="display:inline-block;background:#1A1A4E;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;padding:14px 32px;border-radius:10px;">
                            See Everything New →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#F1F3FA;padding:20px 32px;border-radius:0 0 12px 12px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                      You're receiving this because you're a PLR Digital Club member.<br/>
                      Questions? <a href="mailto:support@plrdigitalclub.com" style="color:#1565C0;">support@plrdigitalclub.com</a>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>`,
  })
}
