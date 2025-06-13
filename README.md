# HuddleAI

**Asynchronous Standup Summaries for Modern Dev Teams**

[![Demo](https://img.shields.io/badge/Demo-Watch%20Video-blue)](https://youtu.be/AKfOT3xVx4E)

HuddleAI transforms the way development teams handle daily standups by providing AI-powered transcription and summarization of meeting recordings. Say goodbye to disruptive, repetitive meetings and hello to asynchronous collaboration that keeps everyone aligned without interrupting flow state.

## 🚀 The Problem We Solve

Daily standups are often:
- **Disruptive** - Lost dev time spent in repetitive meetings
- **Timezone-conflicted** - Remote teams struggle with scheduling across time zones
- **Unproductive** - Silent contributors attend without giving meaningful input
- **Ephemeral** - No persistent record of what was discussed

## 💡 Our Solution

HuddleAI enables teams to:
- **Stay aligned across time zones** without relying on daily sync calls
- **Avoid context-switching** and maintain focus during deep work
- **Get instant visibility** into progress, blockers, and team activities
- **Maintain persistent records** of all team communications

## 👥 Who This Helps

### Remote/Hybrid Dev Teams
Stay aligned across time zones without relying on daily sync calls. HuddleAI ensures every team member gets a summary - even if they miss the meeting.

### Engineers with Async Workflows
Avoid context-switching and maintain focus. Engineers can get concise updates without interrupting their coding flow.

### Project Managers
Instantly see progress, blockers, and who's doing what - without chasing updates. HuddleAI acts like your automated note-taker.

## ✨ Features

### Core Functionality
- **Audio/Video Upload** - Support for .mp3, .mp4, and other common formats
- **Speech-to-Text** - Accurate transcription using Google STT with speaker diarization
- **AI Summarization** - Intelligent summaries highlighting key insights, action items, and blockers
- **Slack Integration** - Automated posting of summaries to designated Slack channels

### Export Options
- Download transcripts in multiple formats (JSON, TXT, DOCX)
- Styled and encoded for readability and portability
- Speaker labels for improved transcript usability

## 🏗️ Architecture

### Current Architecture (Serverless)
- **Frontend**: React + Vite + TypeScript
- **Backend**: Firebase Cloud Functions (serverless)
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Authentication**: Firebase Authentication
- **Processing**: FFmpeg, Google STT, OpenAI

### Processing Pipeline
1. **Upload** - User uploads meeting recording via web dashboard
2. **Preprocessing** - FFmpeg encodes video and splits audio/video for processing
3. **Transcription** - Google STT converts audio to text with speaker diarization
4. **Summarization** - OpenAI creates summaries, extracts action items & insights
5. **Integration** - Formatted messages sent to Slack via webhook

## 🛠️ Technologies Used

### Frontend
- **React + Vite** – Fast, responsive UI for uploading files and viewing transcripts
- **TypeScript** – Type safety and better tooling for frontend logic

### Backend Processing
- **Firebase Cloud Functions** – Serverless API endpoints for transcription and summarization
- **FFmpeg** – Audio preprocessing and format conversion before STT

### Cloud Infrastructure
- **Firebase Firestore** – User data and transcript metadata storage
- **Firebase Storage** – Uploaded audio/video files and export outputs
- **Firebase Authentication** – Secure user sign-in and access control


## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Firebase account and project setup
- Google Cloud Platform account (for STT API)
- OpenAI API access
- Slack workspace for testing integrations

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/huddleai.git
cd huddleai
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your Firebase, Google Cloud, and OpenAI credentials
```

4. Initialize Firebase
```bash
firebase init
```

5. Deploy Firebase functions
```bash
firebase deploy --only functions
```

6. Start the development server
```bash
npm run dev
```

## 📺 Demo

Check out our demo video to see HuddleAI in action: [https://youtu.be/AKfOT3xVx4E](https://youtu.be/AKfOT3xVx4E)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Team

- **Sean Andre Membrido** - Product Owner
- **Aditya Sarin** - Contributor
- **Parul Datta** - Contributor
- **Paolo Pedroso** - Contributor
- **Pranav Sathianathan** - Contributor
