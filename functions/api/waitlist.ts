interface CloudflareContext {
  request: Request;
  env: Record<string, unknown>;
}

export async function onRequestPost(context: CloudflareContext) {
  try {
    const { email } = await context.request.json()

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email format' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // In a real implementation, you would:
    // 1. Store the email in a database (like D1, KV, or external service)
    // 2. Send confirmation email using a service like SendGrid, Mailgun, or similar
    
    // For now, we'll simulate sending an email by logging it
    console.log(`New waitlist signup: ${email}`)
    
    // Here you would integrate with your email service
    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: email,
      from: 'noreply@mailpackr.com',
      subject: 'Thanks for joining our waitlist!',
      html: `
        <h2>Welcome to MailPackr Waitlist!</h2>
        <p>Thank you for joining our waitlist. You will receive updates from our end as we continue to improve our platform.</p>
        <p>Best regards,<br>The MailPackr Team</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          If you no longer wish to receive these updates, you can 
          <a href="${context.env.DEPLOYMENT_URL}/api/unsubscribe?email=${encodeURIComponent(email)}">unsubscribe here</a>.
        </p>
      `
    })
    */

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Successfully joined the waitlist!' 
    }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Waitlist signup error:', error)
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}