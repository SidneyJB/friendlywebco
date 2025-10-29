import { NextRequest, NextResponse } from 'next/server';

interface OrderData {
  name: string;
  email: string;
  phone: string;
  company: string;
  websiteType: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const orderData: OrderData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'websiteType', 'message'];
    for (const field of requiredFields) {
      if (!orderData[field as keyof OrderData]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Format the message for Zapier
    const zapierPayload = {
      name: orderData.name,
      email: orderData.email,
      phone: orderData.phone || 'Not provided',
      company: orderData.company || 'Not provided',
      websiteType: orderData.websiteType,
      message: orderData.message,
      timestamp: new Date().toISOString(),
      source: 'Website Order Form',
      note: 'Budget and timeline to be discussed in follow-up conversation',
    };

    // TODO: Replace with your actual Zapier webhook URL
    const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_ORDER_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID/';

    try {
      // Send to Zapier
      const zapierResponse = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(zapierPayload),
      });

      if (!zapierResponse.ok) {
        console.error('Failed to send to Zapier:', zapierResponse.statusText);
        // Don't fail the request, just log the error
      }

      // Also log to console for development
      console.log('New Order Received:', zapierPayload);

    } catch (zapierError) {
      console.error('Error sending to Zapier:', zapierError);
      // Continue with success response since the form was processed
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Order submitted successfully. We\'ll be in touch soon!',
    });

  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS if needed
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
