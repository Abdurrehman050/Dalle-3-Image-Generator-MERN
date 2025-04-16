# DALL·E 3 Image Generator – AI-Powered Image Creation App
This is a full-stack MERN application that allows users to generate unique AI images using DALL·E 3 by simply typing a prompt. Built with a sleek UI and efficient backend, the app provides a fun, intuitive way to visualize ideas instantly using cutting-edge generative AI.

# 🖼️ Features
💡 Prompt-Based Image Generation
Users can input any creative idea or text prompt, and the app generates an image using the power of DALL·E 3.

📸 Gallery of All Creations
View a feed of previously generated images from all users to explore different ideas and inspirations.

📥 Download & Share
Easily download your generated image or share it with others.

🧠 Rate Limiting with Token System
Users are assigned daily free generation tokens. Once used, they can either wait or purchase more tokens for continued usage.

💳 Subscription Tiers with Stripe
Multiple subscription plans available for heavy users, managed via Stripe and CRON jobs to reset tokens daily/monthly.

🛡️ API Protection
Backend includes rate-limiting middleware to avoid abuse and secure OpenAI API calls.

# 🛠 Tech Stack
Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

AI: OpenAI DALL·E 3 API

Payments: Stripe (missing due to Stripe Account issue)

Auth & Security: JWT, Rate Limiting

Others: CRON for subscription management, Multer for image handling

# 📸 Screenshots
![Image](https://github.com/user-attachments/assets/270cee7c-22a7-4c7a-8a50-c2d18f9692fe)

