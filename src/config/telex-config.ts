import { Request, Response } from "express";

export const getIntegrationJson = (req: Request, res: Response) => {
  const telexAppData = {
    data: {
      date: {
        created_at: "2025-02-18",
        updated_at: "2025-02-18",
      },
      descriptions: {
        app_name: "telex-paystack-notification",
        app_description:
          "A  telex feature that entails getting notifications on payment succesful reports, chargebacks and failed payments",
        app_logo:
          "https://fonts.gstatic.com/s/i/materialicons/account_balance/v6/24px.svg",
        app_url: "https://paystack-telexpayment.onrender.com/paystack",
        background_color: "#fff",
      },
      is_active: true,
      integration_type: "interval",
      key_features: [
        " updates on succesful payments, chargebacks and failed payments",
      ],
      integration_category: "Finance & Payments",
      author: "Ademola",
      settings: [
        {
          label: "telex-channel",
          type: "text",
          required: true,
          default: "transaction-alerts",
        },
        {
          label: "time interval",
          type: "dropdown",
          required: true,
          default: "immediate",
          options: [
            "immediate",
            "Every 5-minutes",
            "Every 10-minutes",
            "Every 1-hour",
          ],
        },
        {
          label: "event type",
          type: "dropdown",
          required: true,
          default: "all",
          options: ["all", "success", "failed", "cashback"],
        },
        {
          label: "message",
          type: "text",
          required: true,
          default: "Basic",
        },
        {
          label: "include log",
          type: "checkbox",
          required: true,
          default: "true",
        },
        {
          label: "interval",
          type: "text",
          required: true,
          default: "*/10 * * * *",
        },
      ],
      target_url: "https://paystack-telexpayment.onrender.com/paystack",
      tick_url: "https://paystack-telexpayment.onrender.com/paystack/tick",
    },
  };

  res.json(telexAppData);
};
