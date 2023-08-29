# TFL Tube Status Tracker

The goal of the project was to build an app that tracks the status of tube lines in London using React, Vite, CSS, JavaScript, React Query, and the Transport for London (TFL) API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [API Integration](#api-integration)
- [Usage](#usage)
- [Future Improvements](#future-improvements)

## Overview

The TFL Tube Status Tracker is a web application that provides users with an easy-to-use interface to view the status of various tube lines in London. Users can get a high-level overview of the status of all tube lines and view detailed information about a specific line

## Features

- Display a table with an overview of the status of all tube lines.
- Click on a tube line to view more detailed information about that line.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/geraldjtorres/tube-status.git`
2. Install dependencies: `yarn install`
3. Run the development server: `yarn run dev`

## API Integration

To retrieve data from the TFL API, we utilized the following endpoints:

- Get all tube lines: [Line_GetByMode](https://api.tfl.gov.uk/Line/Mode/tube/Status)
- Get tube line status: [Line_StatusByIds](https://api.tfl.gov.uk/swagger/ui/index.html#!/Line/Line_StatusByIds)

The React Query library was used to handle API requests and manage data fetching.

## Usage

1. Upon opening the app, you will be presented with a table displaying the status of all tube lines.
2. Click on a specific line to view more detailed information about its current status.

## Future Improvements

While the initial version of this app fulfills the core requirements, there are several areas where it can be further improved:

- **Responsive Design:** Enhance the app's responsiveness to ensure a seamless experience across various devices.
- **Error Handling:** Implement better error handling to provide users with meaningful feedback in case of API errors.
- **Visual Enhancements:** Add more visual elements and animations to make the app more engaging and user-friendly.

---

**Note:** This project was completed within a time limit of 2 hours as a take-home task for a job application. Further discussions on potential improvements and adaptations will be part of the interview process.
