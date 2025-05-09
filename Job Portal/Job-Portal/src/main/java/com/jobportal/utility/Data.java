package com.jobportal.utility;

public class Data {
	public static String getMessageBody(String otp, String name) {
		return  "<!DOCTYPE html>\n" +
			    "<html lang=\"en\">\n" +
			    "<head>\n" +
			    "    <meta charset=\"UTF-8\">\n" +
			    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
			    "    <title>Your OTP Code</title>\n" +
			    "    <style>\n" +
			    "        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; text-align: center; }\n" +
			    "        .container { max-width: 600px; width: 100%; background: #ffffff; padding: 20px; margin: 20px auto; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); text-align: center; }\n" +
			    "        .header { background-color: #4CAF50; color: white; font-size: 24px; font-weight: bold; padding: 15px; border-radius: 8px 8px 0 0; }\n" +
			    "        .otp-text, .footer-text { font-size: 18px; margin-top: 20px; text-align: center; }\n" +
			    "        .otp { font-size: 28px; font-weight: bold; color: #4CAF50; margin: 20px auto; display: inline-block; padding: 10px 20px;  border-radius: 5px; letter-spacing: 2px; text-align: center; }\n" +
			    "        .footer { font-size: 14px; color: #777; margin-top: 20px; text-align: center; }\n" +
			    "    </style>\n" +
			    "</head>\n" +
			    "<body>\n" +
			    "    <div class=\"container\">\n" +
			    "        <div class=\"header\">Your OTP Code</div>\n" +
			    "        <p class=\"otp-text\">Hello "+name+",</p>\n" +
			    "        <p class=\"otp-text\">We have received a request to verify your email address. Your OTP code is:</p>\n" +
			    "        <div class=\"otp\">" + otp + "</div>\n" +
			    "        <p class=\"otp-text\">This OTP code is valid for 10 minutes. If you did not request this, please ignore this email.</p>\n" +
			    "        <p class=\"otp-text\">Thank you for using our service!</p>\n" +
			    "        <div class=\"footer\">&copy; 2025 CareerLink. All rights reserved.</div>\n" +
			    "    </div>\n" +
			    "</body>\n" +
			    "</html>";

	}
}
