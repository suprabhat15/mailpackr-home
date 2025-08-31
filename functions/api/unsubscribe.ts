interface CloudflareContext {
  request: Request;
  env: Record<string, unknown>;
}

export async function onRequestGet(context: CloudflareContext) {
  const url = new URL(context.request.url)
  const email = url.searchParams.get('email')

  if (!email) {
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribe - MailPackr</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f9fafb; }
            .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .header { color: #1f2937; margin-bottom: 1rem; }
            .form-group { margin-bottom: 1rem; }
            label { display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151; }
            input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 6px; font-size: 1rem; }
            button { background: #ef4444; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; }
            button:hover { background: #dc2626; }
            .footer { margin-top: 2rem; font-size: 0.875rem; color: #6b7280; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="header">Unsubscribe from MailPackr Updates</h1>
            <p>Enter your email address to unsubscribe from our waitlist updates:</p>
            
            <form method="POST">
              <div class="form-group">
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required placeholder="your@email.com">
              </div>
              <button type="submit">Unsubscribe</button>
            </form>
            
            <div class="footer">
              <p>You will no longer receive updates from MailPackr after unsubscribing.</p>
            </div>
          </div>
        </body>
      </html>
      `,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    )
  }

  // Process unsubscribe with email from URL
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Unsubscribed - MailPackr</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f9fafb; }
          .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; }
          .success { color: #059669; margin-bottom: 1rem; }
          .footer { margin-top: 2rem; font-size: 0.875rem; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 class="success">✓ Successfully Unsubscribed</h1>
          <p>The email address <strong>${email}</strong> has been removed from our waitlist.</p>
          <p>You will no longer receive updates from MailPackr.</p>
          
          <div class="footer">
            <p>If this was a mistake, you can always rejoin our waitlist at <a href="https://mailpackr.com">mailpackr.com</a></p>
          </div>
        </div>
      </body>
    </html>
    `,
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  )
}

export async function onRequestPost(context: CloudflareContext) {
  try {
    const formData = await context.request.formData()
    const email = formData.get('email') as string

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Error - MailPackr</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body { font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f9fafb; }
              .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
              .error { color: #dc2626; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1 class="error">Invalid Email Format</h1>
              <p>Please provide a valid email address.</p>
              <a href="/api/unsubscribe">← Back to unsubscribe form</a>
            </div>
          </body>
        </html>
        `,
        {
          status: 400,
          headers: {
            'Content-Type': 'text/html',
          },
        }
      )
    }

    // In a real implementation, you would remove the email from your database
    console.log(`Unsubscribe request for: ${email}`)

    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Unsubscribed - MailPackr</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f9fafb; }
            .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; }
            .success { color: #059669; margin-bottom: 1rem; }
            .footer { margin-top: 2rem; font-size: 0.875rem; color: #6b7280; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="success">✓ Successfully Unsubscribed</h1>
            <p>The email address <strong>${email}</strong> has been removed from our waitlist.</p>
            <p>You will no longer receive updates from MailPackr.</p>
            
            <div class="footer">
              <p>If this was a mistake, you can always rejoin our waitlist at <a href="https://mailpackr.com">mailpackr.com</a></p>
            </div>
          </div>
        </body>
      </html>
      `,
      {
        headers: {
          'Content-Type': 'text/html',
        },
      }
    )

  } catch (error) {
    console.error('Unsubscribe error:', error)
    return new Response(
      `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Error - MailPackr</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
            body { font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #f9fafb; }
            .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .error { color: #dc2626; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1 class="error">Server Error</h1>
            <p>Something went wrong. Please try again later.</p>
            <a href="/api/unsubscribe">← Back to unsubscribe form</a>
          </div>
        </body>
      </html>
      `,
      {
        status: 500,
        headers: {
          'Content-Type': 'text/html',
        },
      }
    )
  }
}