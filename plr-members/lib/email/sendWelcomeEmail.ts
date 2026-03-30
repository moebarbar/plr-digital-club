import { getResend } from './resend'

export async function sendWelcomeEmail(email: string, firstName: string): Promise<void> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://plrdigitalclub.com'

  await getResend().emails.send({
    from: 'PLR Digital Club <hello@plrdigitalclub.com>',
    to: email,
    subject: "You're in! Your PLR Digital Club access is ready 🎉",
    html: `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8" /></head>
      <body style="margin:0;padding:0;background:#F8F8FF;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F8FF;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

                <!-- Header -->
                <tr>
                  <td style="background:#1A1A4E;padding:32px;text-align:center;border-radius:12px 12px 0 0;">
                    <p style="color:#ffffff;font-size:22px;font-weight:bold;margin:0;">⚡ PLR DIGITAL CLUB</p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="background:#ffffff;padding:40px 48px;">
                    <p style="font-size:16px;color:#374151;margin:0 0 16px;">Hi ${firstName},</p>
                    <p style="font-size:16px;color:#374151;margin:0 0 24px;">
                      Welcome to PLR Digital Club! Your lifetime membership is now active and your products are ready to access.
                    </p>

                    <!-- Highlight box -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                      <tr>
                        <td style="background:#EFF6FF;border-left:4px solid #1565C0;padding:16px 20px;border-radius:0 8px 8px 0;">
                          <p style="font-size:14px;color:#1e40af;margin:0 0 8px;font-weight:bold;">You now have access to 1,000+ digital products including:</p>
                          <p style="font-size:14px;color:#374151;margin:0;">
                            Canva templates · Planners · eBooks · Social media templates · Notion templates · Logo templates · and much more.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
                      <tr>
                        <td align="center">
                          <a href="${appUrl}/dashboard" style="display:inline-block;background:#1A1A4E;color:#ffffff;text-decoration:none;padding:16px 32px;border-radius:10px;font-weight:bold;font-size:15px;">
                            Access Your Products Now →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- 5 things -->
                    <p style="font-size:15px;font-weight:bold;color:#1A1A4E;margin:0 0 12px;">5 things to do first:</p>
                    <ol style="font-size:14px;color:#374151;padding-left:20px;margin:0 0 24px;line-height:1.8;">
                      <li>Browse the Product Library</li>
                      <li>Download your first Canva template</li>
                      <li>Access the Reseller Tools</li>
                      <li>Check "What's New" for latest additions</li>
                      <li>Contact support if you need help</li>
                    </ol>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#F3F4F6;padding:24px 48px;text-align:center;border-radius:0 0 12px 12px;">
                    <p style="font-size:12px;color:#9CA3AF;margin:0;">
                      PLR Digital Club · <a href="mailto:support@plrdigitalclub.com" style="color:#9CA3AF;">support@plrdigitalclub.com</a>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  })
}
