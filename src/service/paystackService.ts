import axios from "axios";

// Mock Payment Data
const mockPaymentData = [
  {
    event_name: "payment_event",
    message: "Payment failed",
    status: "failed",
    username: "Oliii",
  },
  {
    event_name: "payment_event",
    message: "Payment was successful",
    status: "success",
    username: "Oliii",
  },

  {
    event_name: "payment_event",
    message: "Cashback processed",
    status: "cashback",
    username: "Oliii",
  },
];

let currentSequenceIndex = 0;

export const sendResultToReturnUrl = async (
  returnUrl: string,
  result: object
) => {
  try {
    await axios.post(returnUrl, result, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(`Sent result to return URL: ${JSON.stringify(result)}`);
  } catch (error: unknown) {
    console.error(`Error sending result to return URL: ${handleError(error)}`);
  }
};

const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unknown error occurred";
};

export const processPaymentSequence = async (returnUrl: string) => {
  const paymentData = mockPaymentData[currentSequenceIndex];

  await sendResultToReturnUrl(returnUrl, paymentData);

  currentSequenceIndex = (currentSequenceIndex + 1) % mockPaymentData.length;

  console.log(`Sent data: ${paymentData.status}`);
};
