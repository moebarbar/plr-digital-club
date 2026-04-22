import { getResend } from './resend'

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function sendWelcomeEmail(email: string, firstName: string): Promise<void> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://plrdigitalclub.com'
  const safeName = escapeHtml(firstName)

  await getResend().emails.send({
    from: 'PLR Digital Club <hello@plrdigitalclub.com>',
    to: email,
    subject: "You're in! Your PLR Digital Club access is ready 🎉",
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
                    <img src="${appUrl}/logo.png" alt="PLR Digital Club" height="40" style="height:40px;width:auto;display:inline-block;" />
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="background:#ffffff;padding:40px 40px 32px;">
                    <p style="font-size:22px;font-weight:bold;color:#1A1A4E;margin:0 0 8px;">Welcome, ${safeName}! 🎉</p>
                    <p style="font-size:15px;color:#4B5563;margin:0 0 28px;line-height:1.6;">
                      Your lifetime membership is now active. You have instant access to 1,000+ done-for-you digital products — ready to download and resell.
                    </p>

                    <!-- Highlight box -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 28px;">
                      <tr>
                        <td style="background:#EFF6FF;border-left:4px solid #1565C0;padding:16px 20px;border-radius:0 8px 8px 0;">
                          <p style="font-size:13px;color:#1e40af;margin:0 0 8px;font-weight:bold;">Your library includes 1,000+ products:</p>
                          <p style="font-size:13px;color:#374151;margin:0;line-height:1.7;">
                            Canva Templates &nbsp;·&nbsp; eBooks &nbsp;·&nbsp; Planners &amp; Journals<br/>
                            Social Media Templates &nbsp;·&nbsp; Notion Templates &nbsp;·&nbsp; Logo Kits &nbsp;·&nbsp; and more
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 36px;">
                      <tr>
                        <td align="center">
                          <a href="${appUrl}/dashboard" style="display:inline-block;background:#1A1A4E;color:#ffffff;text-decoration:none;padding:15px 36px;border-radius:10px;font-weight:bold;font-size:15px;letter-spacing:0.3px;">
                            Access Your Products →
                          </a>
                        </td>
                      </tr>
                    </table>

                    <!-- 5 things -->
                    <p style="font-size:14px;font-weight:bold;color:#1A1A4E;margin:0 0 12px;">5 things to do first:</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${[
                        'Browse the Product Library and download your first product',
                        'Explore Reseller Tools for ready-to-use sales copy',
                        'Check "What\'s New" for the latest weekly additions',
                        'Customise and brand products as your own',
                        'Reply to this email if you need any help',
                      ].map((item, i) => `
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:28px;vertical-align:top;">
                                <span style="display:inline-block;width:22px;height:22px;background:#1A1A4E;color:#fff;border-radius:50%;font-size:11px;font-weight:bold;text-align:center;line-height:22px;">${i + 1}</span>
                              </td>
                              <td style="font-size:13px;color:#374151;padding-left:8px;line-height:1.5;">${escapeHtml(item)}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>`).join('')}
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#F3F4F6;padding:20px 40px;text-align:center;border-radius:0 0 12px 12px;border-top:1px solid #E5E7EB;">
                    <p style="font-size:12px;color:#9CA3AF;margin:0 0 4px;">PLR Digital Club</p>
                    <p style="font-size:12px;color:#9CA3AF;margin:0;">
                      Questions? <a href="mailto:support@plrdigitalclub.com" style="color:#1565C0;text-decoration:none;">support@plrdigitalclub.com</a>
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
