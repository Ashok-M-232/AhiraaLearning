import React, { useState } from 'react';
import '../CSE/Accordion.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// AccordionItem component
function AccordionItem({ title, content, bgColor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
  <div className="accordion-title" onClick={() => setIsOpen(!isOpen)} role="button">
    <span>{title}</span>
    <span className={`arrow ${isOpen ? 'open' : ''}`}>&#x25BE;</span>
  </div>
  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
    <div className="accordion-content-inner">{content}</div>
  </div>
</div>

  );
}

// Curriculum component
function CARD() {
  return (
    <div className='CBG'>
    <div className="curriculum">
      <h1 className="curriculum-heading">CURRICULUM</h1>
      <div className="accordion-container">
        <div className="accordion-column">
        <AccordionItem
  title="1. Introduction to Android Development"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Overview of Android OS</li>
        <li>Android Development Environment Setup</li>
        <li>Understanding Android Application Components (Activities, Services, Broadcast Receivers, Content Providers)</li>
        <li>Android Development Lifecycle</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="2. Java/Kotlin Programming"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Basics of Java/Kotlin Programming Language</li>
        <li>Object-Oriented Programming (OOP) Concepts</li>
        <li>Java/Kotlin Syntax and Data Types</li>
        <li>Control Structures (Loops, Conditionals)</li>
        <li>Functions and Methods</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="3. User Interface (UI) Design"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Android Layouts (LinearLayout, RelativeLayout, ConstraintLayout)</li>
        <li>Views and ViewGroups</li>
        <li>UI Widgets (Button, TextView, EditText, ImageView, etc.)</li>
        <li>Styling and Theming</li>
        <li>Material Design Guidelines</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="4. Activities and Fragments"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Understanding Activities and Fragments</li>
        <li>Activity Lifecycle</li>
        <li>Fragment Lifecycle</li>
        <li>Fragment Transactions</li>
        <li>Communication between Activities and Fragments</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="5. Intents and Intent Filters"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Intent Overview</li>
        <li>Implicit and Explicit Intents</li>
        <li>Passing Data between Activities using Intents</li>
        <li>Intent Filters and Deep Linking</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="6. RecyclerView and Adapters"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>RecyclerView Overview</li>
        <li>Creating Custom Adapters</li>
        <li>Handling Click Events in RecyclerView</li>
        <li>Optimizing RecyclerView Performance</li>
      </ul>
    </div>
  }
/>



        </div>
        
        
        <div className="accordion-column">
        <AccordionItem
  title="7. Storage and Data Management"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>SharedPreferences</li>
        <li>Internal Storage</li>
        <li>External Storage</li>
        <li>SQLite Database</li>
        <li>Room Persistence Library</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="8. Networking and Web Services"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Making Network Requests using HttpURLConnection or Retrofit</li>
        <li>Parsing JSON Data</li>
        <li>RESTful APIs Integration</li>
        <li>Handling Network Security (HTTPS, SSL/TLS)</li>
        <li>Volley and OkHttp Libraries</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="9. Working with Multimedia"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Working with Images (Loading, Displaying, Caching)</li>
        <li>Media Playback (Audio, Video)</li>
        <li>Camera and Gallery Integration</li>
        <li>Audio Recording and Playback</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="10. Background Processing and Services"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Using AsyncTask for Background Tasks</li>
        <li>Creating and Managing Services</li>
        <li>IntentService and JobScheduler</li>
        <li>Foreground Services</li>
        <li>WorkManager for Periodic Tasks</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="11. Notifications"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Notification Basics</li>
        <li>Creating Notifications</li>
        <li>Notification Channels (Android 8.0+)</li>
        <li>Notification Actions</li>
        <li>Big Picture, Inbox, and Heads-Up Notifications</li>
      </ul>
    </div>
  }
/>

<AccordionItem
  title="12. App Deployment and Distribution"
  bgColor="lightcyan"
  content={
    <div>
      <ul>
        <li>Generating Signed APK</li>
        <li>Google Play Store Publishing Process</li>
        <li>Alpha and Beta Testing</li>
        <li>App Bundles</li>
        <li>App Release Management</li>
      </ul>
    </div>
  }
/>

        </div>
        
        {/* Add more AccordionColumns here */}
      </div>
    </div>
    </div>
  );
}

export default CARD;
