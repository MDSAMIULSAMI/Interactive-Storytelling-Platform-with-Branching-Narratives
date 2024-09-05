# Interactive Storytelling Platform

Welcome to the Interactive Storytelling Platform! This project allows users to read or create stories with branching narratives. Users can select stories from a list, choose different paths within each story, and explore various outcomes based on their choices.

## Features

- **Story Selection**: Users can choose from a list of available stories displayed as interactive cards.
- **Branch Navigation**: After selecting a story, users can navigate through branches of the story by clicking on options.
- **Dynamic Branch Display**: Only the branches relevant to the current story segment are displayed.
- **Neon Themed UI**: The application features a professional and visually appealing neon theme.

## Tech Stack

- **Frontend**: React JS, Material-UI
- **Backend**: Django REST Framework
- **Database**: SQLite
- **Styles**: Custom CSS for neon effect

## Setup Instructions

### Prerequisites

- **Node.js** (v14 or later): [Download and install Node.js](https://nodejs.org/)
- **Python** (v3.8 or later): [Download and install Python](https://www.python.org/downloads/)
- **pip** (Python package installer): Included with Python
- **virtualenv** (Python virtual environment tool): Install via `pip install virtualenv`
- 
  
### Frontend Setup (React)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/interactive-storytelling-platform.git
   cd interactive-storytelling-platform/storytelling-frontend
   
2. **Install Dependencies**

   ```bash
   npm install


3. **Run the Development Server**

   ```bash
   npm start

### Backend Setup (Django REST Framework)

1. **Goto File**

   ```bash
   cd interactive-storytelling-platform/story_platform
   
2. **Create and Activate a Virtual Environment**

   ```bash
   python -m venv env
   env\Scripts\activate
   source venv/bin/activate
   
3. Install django-cors-headers and django-rest-framework
   ```bash
   pip install django-cors-headers djangorestframework
   
4. **Apply Migrations**

   ```bash
   python manage.py migrate

5. **Run the Development Server**

   ```bash
   python manage.py runserver
