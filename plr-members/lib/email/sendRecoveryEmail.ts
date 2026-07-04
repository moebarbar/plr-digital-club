import { getResend } from './resend'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** "Complete your purchase" email for accounts created at checkout that never paid. */
export async function sendRecoveryEmail(email: string, firstName: string): Promise<void> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://plrdigitalclub.com'
  const safeName = escapeHtml(firstName)

  await getResend().emails.send({
    from: 'PLR Digital Club <hello@plrdigitalclub.com>',
    to: email,
    subject: 'Your PLR Digital Club account is waiting — finish setup in 2 minutes',
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /></head>
      <body style="margin:0;padding:0;background:#F8F8FF;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8FF;padding:40px 16px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                <tr>
                  <td style="background:#1A1A4E;padding:28px 32px;text-align:center;border-radius:12px 12px 0 0;">
                    <img src="${appUrl}/logo-white.png" alt="PLR Digital Club" height="40" style="height:40px;width:auto;display:inline-block;" />
                  </td>
                </tr>

                <tr>
                  <td style="background:#ffffff;padding:32px;">
                    <h1 style="margin:0 0 8px;font-size:22px;color:#1A1A4E;">You're one step away, ${safeName}</h1>
                    <p style="margin:0 0 16px;font-size:14px;color:#6b7280;line-height:1.6;">
                      Your PLR Digital Club account is created — but your membership isn't active yet because the payment wasn't completed.
                    </p>
                    <p style="margin:0 0 20px;font-size:14px;color:#6b7280;line-height:1.6;">
                      Finish now and you'll unlock <strong>1,000+ digital products</strong> with full PLR &amp; MRR resell rights — one payment of $197, lifetime access, 30-day money-back guarantee.
                    </p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <a href="${appUrl}/login"
                             style="display:inline-block;background:#1A1A4E;color:#ffffff;font-size:15px;font-weight:bold;text-decoration:none;padding:14px 32px;border-radius:10px;">
                            Log In &amp; Complete Your Purchase →
                          </a>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:20px 0 0;font-size:12px;color:#9ca3af;line-height:1.6;text-align:center;">
                      Log in with the email and password you chose at checkout — you'll be taken straight to a secure Stripe payment page.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="background:#F1F3FA;padding:20px 32px;border-radius:0 0 12px 12px;text-align:center;">
                    <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                      Didn't sign up, or changed your mind? Just ignore this email — we won't keep emailing you.<br/>
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
