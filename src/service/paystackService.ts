import axios from "axios";

// Mock Payment Data
const mockPaymentData = [
  {
    message: "Payment was successful",
    username: "Oliii",
    event_name: "payment_event",
    status: "success",
  },
  {
    message: "Payment failed",
    username: "Oliii",
    event_name: "payment_event",
    status: "failed",
  },
  {
    message: "Cashback processed",
    username: "Oliii",
    event_name: "payment_event",
    status: "cashback",
  },
];

let currentSequenceIndex = 0;

export const sendResultToReturnUrl = async (
  returnUrl: string,
  result: object
) => {
  try {
    const structuredResult = {
      data: result,
    };

    await axios.post(returnUrl, structuredResult, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: unknown) {
    throw new Error(
      `Error sending result to return URL: ${handleError(error)}`
    );
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
