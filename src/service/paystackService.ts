import axios from "axios";

// Mock Payment Data
const mockPaymentData = [
  {
    event_name: "payment_event",
    status: "success",
    message: "Payment was successful",
    username: "john_doe",
  },
  {
    event_name: "payment_event",
    status: "failed",
    message: "Payment failed",
    username: "jane_doe",
  },
  {
    event_name: "payment_event",
    status: "cashback",
    message: "Cashback processed",
    username: "doe_john",
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
