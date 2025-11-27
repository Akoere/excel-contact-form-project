# 📬 Serverless Contact Form with Excel Integration

A fully responsive web contact form designed to capture user inquiries in real-time. Unlike traditional forms that require a dedicated backend server, this project utilizes a serverless architecture. It uses **JavaScript (Fetch API)** to send data to a **Make.com webhook**, which automatically logs the submission into **Microsoft Excel Online** and triggers an instant email notification to the administrator.

**🔗 Live Demo:** [INSERT YOUR VERCEL LINK HERE]

---

## 🛠 Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Automation/Backend:** Make.com (formerly Integromat)
* **Database:** Microsoft Excel Online
* **Hosting:** Vercel
* **Version Control:** Git & GitHub

---

## ✨ Key Features

* **Real-time Data Sync:** Submissions are instantly appended to a secured Excel spreadsheet.
* **Auto-Reply/Notifications:** Admin receives an email notification immediately upon submission.
* **Client-Side Validation:** Prevents empty submissions and checks email formatting before sending.
* **Responsive UI:** Fully optimized for mobile, tablet, and desktop screens.
* **Smart Database:** Excel table automatically generates Serial Numbers (S/N) and captures the exact UTC Timestamp.

---

## ⚙️ How It Works

1.  **User Interface:** The user fills out the Name, Email, and Message fields.
2.  **Data Transmission:** JavaScript intercepts the form submission, prevents the page reload, and sends a `POST` request with the JSON data to a private **Make.com Webhook URL**.
3.  **Automation Logic (Make.com):**
    * **Trigger:** Catches the incoming data packet.
    * **Action 1:** Connects to Microsoft Excel and adds a new row to the `ContactTable`.
    * **Action 2:** Sends an email alert to the site owner with the message details.
4.  **Feedback:** The frontend receives a success signal and displays a confirmation message to the user.

---

## 💻 How to Run Locally

To run this project on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/contact-form-project.git](https://github.com/YOUR_USERNAME/contact-form-project.git)
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd contact-form-project
    ```
3.  **Open the project:**
    Simply open the `index.html` file in your browser (Chrome, Firefox, Edge).

---

## 🔌 Configuration & Setup

If you want to build this backend yourself, follow these steps:

### 1. Excel Setup
* Create an Excel file in OneDrive.
* Create headers: `S/N`, `Name`, `Email`, `Message`, `Date`.
* **Important:** Convert the range to an Official Table (`Insert > Table`) and name it `ContactTable`.
* Use the formula `=ROW()-1` in the first data cell of the S/N column for auto-numbering.

### 2. Make.com Setup
* Create a new Scenario.
* **Trigger:** Webhook (Custom Webhook). Copy the generated URL.
* **Action:** Excel Online (Business) > "Add a Table Row".
* **Action:** Email > "Send an Email".
* Map the Webhook data items to the Excel columns and Email body.

### 3. Frontend Connection
* Paste your Webhook URL into the `script.js` file:
    ```javascript
    const endpoint = "YOUR_WEBHOOK_URL_HERE";
    ```

---

## 🚀 Deployment

This project is deployed using **Vercel**.

1.  Push code to GitHub.
2.  Import repository into Vercel.
3.  Click **Deploy**.

---

## 👤 Author

* **[Your Name]** - *Frontend Development & Integration*
* [Link to your Portfolio or GitHub Profile]

---

*This project was created as part of a Web Development assessment.*# excel-contact-form-project
