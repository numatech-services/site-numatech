export const contactConfirmationEmail = (name: string, type: string) => ({
  subject: '✅ Demande bien reçue - Numatech Services',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #123A7D 0%, #176B87 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
        .card { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFC857; }
        .button { display: inline-block; background: #123A7D; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin:0; font-size: 28px;">✅ Demande bien reçue !</h1>
        </div>
        <div class="content">
          <p>Bonjour <strong>${name}</strong>,</p>
          
          <p>Nous avons bien reçu votre demande de <strong>${type}</strong> et vous en remercions.</p>
          
          <div class="card">
            <h3 style="margin-top:0; color: #123A7D;">📋 Prochaines étapes</h3>
            <ol style="margin: 0; padding-left: 20px;">
              <li><strong>Analyse</strong> - Notre équipe étudie votre demande (sous 2h)</li>
              <li><strong>Contact</strong> - Un expert vous appelle ou vous écrit (sous 24h)</li>
              <li><strong>Solution</strong> - Nous vous présentons notre proposition personnalisée</li>
            </ol>
          </div>
          
          <p><strong>Besoin d'aide immédiate ?</strong><br>
          Appelez-nous au <strong>+227 96 55 69 84</strong> (Lun-Ven 8h-18h)</p>
          
          <center>
            <a href="https://numatechservices.net/ressources" class="button">📚 Découvrez nos ressources</a>
          </center>
          
          <p style="margin-top: 30px;">À très bientôt,<br>
          <strong>L'équipe Numatech Services</strong></p>
        </div>
        <div class="footer">
          <p>Numatech Services | Boukoki Askia Niamey-Niger, Rue BK-56 <br>
          <a href="https://numatechservices.net" style="color: #123A7D;">numatechservices.net</a></p>
        </div>
      </div>
    </body>
    </html>
  `
})
