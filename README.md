# 🧠 MoodMap: Mood-Based Journal Visualizer


## 📌 Overview

MoodMap is a journaling web app that lets users track their daily emotions and visualize patterns over time through a mood-coded calendar. Ideal for wellness tracking and self-reflection, this project uses **HTML/CSS/JavaScript** with an optional **Flask backend**, and runs locally in your browser or VS Code.


## 🎯 Features

- 🗓️ Log daily moods with emoticons  
- 🌈 Visual calendar displaying mood history using color codes  
- 📝 Editable journal entries (optional enhancement)  
- 💾 Runs offline and stores mood entries dynamically  
- 🔌 Optional Flask backend setup for expansion  


## 🔧 Tech Stack

| Layer       | Technologies                     |
|-------------|----------------------------------|
| Frontend    | HTML, CSS, JavaScript            |
| Backend     | Python with Flask (optional)     |
| Environment | Visual Studio Code               |
| Hosting     | Local server / GitHub Pages      |


## 📁 Folder Structure

```
MoodMap/
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py         # Flask backend
├── requirements.txt
└── README.md
```


## 🚀 Setup Instructions (Run Locally in VS Code)

### 🪜 Step 1: Clone or Download

```bash
git clone https://github.com/yourusername/MoodMap.git
cd MoodMap
```

### 🪜 Step 2: Open in VS Code

- Launch VS Code  
- Open the `MoodMap` folder

### 🪜 Step 3: Set Up Python Virtual Environment

```bash
python -m venv venv
```

Activate the environment:

```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

### 🪜 Step 4: Install Flask (for backend)

```bash
pip install -r requirements.txt
```

### 🪜 Step 5: Run Flask Server

```bash
python app.py
```

### 🪜 Step 6: Open in Browser

Visit [http://127.0.0.1:5000](http://127.0.0.1:5000)


## 📘 Application Preview

- Add your mood using the date picker  
- Select from: 😊 Happy | 😢 Sad | 😠 Angry | 😐 Neutral  
- Visual calendar updates dynamically with color-coded boxes


## 📌 Mood Legend

| Mood    | Color       |
|---------|-------------|
| Happy   | Yellow       |
| Sad     | Blue         |
| Angry   | Red          |
| Neutral | Grey         |


## 📦 Requirements

Inside `requirements.txt`:

```
flask
```

---

## 📈 Future Enhancements

- 🔒 User login & authentication  
- 📊 Charts for weekly/monthly mood analytics  
- ☁️ Connect to Google Calendar or Firebase  
- 📝 Journal notes with markdown formatting  
- 🌐 Deploy online via Netlify, GitHub Pages, or Heroku  


## 👩‍💻 Author

**Developed by:** Vashika
**Inspired by:** Self-care and creative tracking tools  
**Language:** Python, JavaScript, HTML, CSS






