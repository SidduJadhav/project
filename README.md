# 📚 AR Education Platform – Interactive Learning with Augmented Reality  

## 📌 **Project Overview**  
The AR Education Platform is designed to enhance traditional learning experiences by integrating **Augmented Reality (AR)** into educational content. This platform allows students to visualize complex scientific concepts through interactive 3D models, making learning more engaging and intuitive. The system also features a **chatbot assistant** to guide users and answer queries.  

## 🚀 **Project Structure**  
```
/ar-education-platform
├── frontend/                # Frontend UI for AR interactions  
├── backend/                 # Node.js backend to handle requests  
├── models/                  # 3D models in .glb format  
├── public/                  # Static files (e.g., CSS, images)  
├── server.js                # Backend server file  
├── package.json             # Project dependencies  
└── README.md                # Project documentation  
```  

## ⚙️ **Technologies Used**  
- **Frontend**: HTML, CSS, JavaScript, React, Tailwind CSS  
- **Backend**: Node.js, Express  
- **3D Rendering**: Google’s `model-viewer`  
- **Chatbot**: Botpress for interactive learning  
- **AR Integration**: Web-based AR using `model-viewer`  

## 📥 **How to Run the Project**  

1. **Clone the Repository**  
```bash
git clone https://github.com/your-username/ar-education-platform.git
cd ar-education-platform
```  

2. **Install Dependencies**  
```bash
npm install
```  

3. **Start the Backend**  
```bash
node server.js
```  

4. **Access the Frontend**  
- Open `index.html` in your browser.  
- Use the chatbot to enter prompts like "heart" or "solar system" to view related 3D models in AR.  

## 🧠 **How It Works**  
1. The user inputs a prompt into the chatbot, such as "crystal structure" or "human heart."  
2. The backend fetches the corresponding `.glb` model from the database.  
3. The frontend renders the model in **Augmented Reality (AR)** using `model-viewer`.  
4. The chatbot provides additional explanations and quizzes for a more interactive learning experience.  

## 🌟 **Features**  
- **3D Visualizations**: Explore interactive 3D models of complex scientific concepts.  
- **Chatbot Assistance**: Get instant explanations, quizzes, and learning tips through the chatbot.  
- **Personalized Learning**: Customize the learning path based on user queries.  
- **User-Friendly Interface**: Clean and responsive UI for smooth navigation.  

## 📅 **Future Enhancements**  
- Expand the model database to cover more subjects.  
- Integrate voice commands for hands-free interaction.  
- Add multiplayer AR experiences for collaborative learning.  

## 📧 **Contributors**  
- SIDDU JADHAV  
