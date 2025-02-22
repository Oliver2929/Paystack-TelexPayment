import axios from "axios";

// Mock Payment Data
const mockPaymentData = {
  event_name: "payment_event",
  status: "success",
  message: "Payment was successful",
  username: "Oliii",
};

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
  const paymentData = mockPaymentData;

  await sendResultToReturnUrl(returnUrl, paymentData);

  console.log(`Sent data: ${paymentData.status}`);
};
