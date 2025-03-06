import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) =>
  emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID, // Your Service ID
    process.env.NEXT_PUBLIC_TEMPLATE_ID, // Your Template ID
    { name, email, message },
    {
      publicKey: "vJSy0G7As6SAH0Vrd", // Your public key
      limitRate: {
        throttle: 10000, // 10s
      },
    }
  );

export default mail;