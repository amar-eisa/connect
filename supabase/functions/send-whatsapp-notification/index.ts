const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactRequest {
  full_name: string;
  phone: string;
  email: string;
  project_type: string;
  message?: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const CALLMEBOT_API_KEY = Deno.env.get('CALLMEBOT_API_KEY');
    const CALLMEBOT_PHONE = Deno.env.get('CALLMEBOT_PHONE');

    if (!CALLMEBOT_API_KEY) {
      throw new Error('CALLMEBOT_API_KEY is not configured');
    }
    if (!CALLMEBOT_PHONE) {
      throw new Error('CALLMEBOT_PHONE is not configured');
    }

    const { contactRequest }: { contactRequest: ContactRequest } = await req.json();

    if (!contactRequest) {
      throw new Error('Contact request data is required');
    }

    console.log('Sending WhatsApp notification for contact request:', contactRequest.full_name);

    // Build the WhatsApp message
    const messageBody = `*News From Connect Website*

👤 ${contactRequest.full_name}
📱 ${contactRequest.phone}
📧 ${contactRequest.email}
📋 ${contactRequest.project_type}
${contactRequest.message ? `💬 ${contactRequest.message}` : ''}`;

    // Send WhatsApp message via CallMeBot API
    const encodedMessage = encodeURIComponent(messageBody);
    const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${encodedMessage}&apikey=${CALLMEBOT_API_KEY}`;

    console.log('Calling CallMeBot API...');

    const response = await fetch(callMeBotUrl, {
      method: 'GET',
    });

    const responseText = await response.text();
    console.log('CallMeBot response:', responseText);

    if (!response.ok) {
      throw new Error(`CallMeBot API error: ${responseText}`);
    }

    // Check if response indicates success
    if (responseText.toLowerCase().includes('error')) {
      throw new Error(`CallMeBot API error: ${responseText}`);
    }

    console.log('WhatsApp notification sent successfully via CallMeBot');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Notification sent via CallMeBot' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error sending WhatsApp notification:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
