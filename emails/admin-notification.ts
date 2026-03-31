export const adminNotificationEmail = (lead: any) => ({
  subject: `🔔 Nouveau lead : ${lead.type} - ${lead.name}`,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: monospace; background: #f5f5f5; padding: 20px; }
        .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; }
        .header { background: #123A7D; color: white; padding: 20px; }
        .content { padding: 30px; }
        .field { margin: 15px 0; padding: 12px; background: #f8f9fa; border-left: 3px solid #FFC857; }
        .label { font-weight: bold; color: #123A7D; margin-bottom: 5px; }
        .value { color: #333; }
        .priority { display: inline-block; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .high { background: #fee; color: #c00; }
        .medium { background: #ffe; color: #c60; }
        .button { display: inline-block; background: #123A7D; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin:0;">🔔 Nouveau lead reçu</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">
            ${new Date().toLocaleString('fr-FR')}
            ${lead.type === 'audit' || lead.type === 'demo' ? '<span class="priority high">PRIORITÉ HAUTE</span>' : ''}
          </p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Contact</div>
            <div class="value">${lead.name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email</div>
            <div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div>
          </div>
          
          ${lead.phone ? `
          <div class="field">
            <div class="label">📞 Téléphone</div>
            <div class="value">+227 96 55 69 84<a href="tel:${lead.phone}">${lead.phone}</a></div>
          </div>
          ` : ''}
          
          ${lead.organisation ? `
          <div class="field">
            <div class="label">🏢 Organisation</div>
            <div class="value">${lead.organisation}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">🎯 Type de demande</div>
            <div class="value"><strong>${lead.type.toUpperCase()}</strong></div>
          </div>
          
          ${lead.message ? `
          <div class="field">
            <div class="label">💬 Message</div>
            <div class="value">${lead.message}</div>
          </div>
          ` : ''}
          
          ${lead.projectType && lead.projectType.length > 0 ? `
          <div class="field">
            <div class="label">📋 Besoins</div>
            <div class="value">${lead.projectType.join(', ')}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">🌐 Source</div>
            <div class="value">${lead.source} • IP: ${lead.ip}</div>
          </div>
          
          <center>
            <a href="https://numatechservices.net/admin" class="button">
              📊 Voir dans le dashboard
            </a>
          </center>
        </div>
      </div>
    </body>
    </html>
  `
})
