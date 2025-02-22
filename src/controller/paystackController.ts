import { Request, Response } from "express";
import { processPaymentSequence } from "../service/paystackService"; // Ensure this imports the service correctly

export const verifyPaymentHandler = async (req: Request, res: Response) => {
  const { channel_id, return_url, settings } = req.body;

  // Validation of payload
  if (!channel_id || !return_url || !settings || settings.length === 0) {
    return res.status(400).json({
      message: "Invalid payload, missing required fields.",
    });
  }

  try {
    // Process the payment sequence with the given return URL
    await processPaymentSequence(return_url);

    return res.json({
      message:
        "Payment info sent to the return_url, processing next item in sequence.",
    });
  } catch (error: any) {
    console.error("Error processing payment:", error.message);
    return res.status(500).json({ message: error.message });
  }
};
