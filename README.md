#  Shipment Status Dashboard

A modern, interactive web application for tracking and managing logistics shipments in real-time. Built with React.js, this dashboard provides an intuitive interface for monitoring package delivery status, locations, and estimated delivery times.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![CSS3](https://img.shields.io/badge/CSS3-Modern-brightgreen)
![License](https://img.shields.io/badge/License-MIT-yellow)

##  Project Overview

This project was developed as a technical assessment for a Frontend Intern position at a leading logistics courier service. The application demonstrates fundamental frontend development skills, problem-solving abilities, and modern React best practices.

##  Features

### Core Functionality
- **Real-time Shipment Tracking**: Display detailed information for multiple shipments
- **Dynamic Data Rendering**: Fetch and render shipment data from mock API
- **Loading States**: Visual loading indicator during data fetching
- **Error Handling**: Graceful error handling with user-friendly messages
- **Mock API Integration**: Simulated network requests with realistic delays

### Interactive Features
- **Filter by Status**: Quickly filter shipments by their current status
  - All Statuses
  - Pending
  - In Transit
  - Out for Delivery
  - Delivered
  - Cancelled
- **Sort Functionality**: Sort shipments by estimated delivery date (ascending/descending)
- **Expandable Cards**: Click "View Details" to reveal additional shipment information
- **Console Logging**: Each card interaction logs to console for debugging

### Visual Design
- **Color-Coded Status Badges**: Instant visual recognition
  - 🟢 Green: Delivered
  - 🟠 Orange: In Transit
  - 🔵 Blue: Out for Delivery
  - 🔴 Red: Pending
  - ⚪ Grey: Cancelled
- **Glassmorphism UI**: Modern frosted glass effect with backdrop blur
- **Smooth Animations**: Professional micro-interactions and transitions
- **Custom SVG Icons**: Status-specific iconography
- **Background Decorations**: Floating vehicle and package shapes

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes
- **Flexible Grid Layout**: Adapts seamlessly from mobile to desktop
- **Touch-Friendly**: Enhanced mobile interaction patterns

##  Technology Stack

- **Framework**: React 18.2.0
- **State Management**: React Hooks (useState, useEffect)
- **Styling**: Modern CSS3 (Grid, Flexbox, Animations, Backdrop Filter)
- **Build Tool**: Create React App (react-scripts 5.0.1)
- **Version Control**: Git

##  Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0.0 or higher)
- **npm** (version 6.0.0 or higher) or **yarn**

You can check your versions by running:
```bash
node --version
npm --version
```

## Installation & Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/shipment-status-dashboard.git
cd shipment-status-dashboard
```

### Step 2: Install Dependencies

```bash
npm install
```

or if you prefer yarn:

```bash
yarn install
```

### Step 3: Start the Development Server

```bash
npm start
```

or with yarn:

```bash
yarn start
```

The application will automatically open in your default browser at [http://localhost:3000](http://localhost:3000)

### Step 4: Build for Production (Optional)

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

##  Project Structure

```
shipment-status-dashboard/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/             # React components
│   │   ├── ShipmentDashboard.js        # Main container component
│   │   ├── ShipmentDashboard.css
│   │   ├── ShipmentCard.js             # Reusable card component
│   │   ├── ShipmentCard.css
│   │   ├── StatusIcon.js               # SVG icon component
│   │   ├── LoadingSpinner.js           # Loading state component
│   │   ├── LoadingSpinner.css
│   │   ├── ErrorMessage.js             # Error state component
│   │   ├── ErrorMessage.css
│   │   └── BackgroundDecorations.js    # Background shapes
│   ├── services/
│   │   └── api.js              # Mock API service
│   ├── App.js                  # Root component
│   ├── App.css
│   ├── index.js                # Entry point
│   └── index.css               # Global styles
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Design Choices

### Component Architecture

I chose a modular component-based architecture with clear separation of concerns:

1. **ShipmentDashboard**: Main container managing state, filtering, sorting, and data fetching
2. **ShipmentCard**: Reusable component for individual shipment display
3. **StatusIcon**: Dedicated component for status-specific SVG icons
4. **LoadingSpinner**: Separated loading UI for reusability
5. **ErrorMessage**: Isolated error handling component
6. **BackgroundDecorations**: Decorative elements separated from business logic

**Benefits**:
- Easy to test individual components
- Reusable across different parts of the application
- Clear responsibility boundaries
- Maintainable and scalable

### State Management Strategy

I used React Hooks for state management:
- `useState`: Managing shipments data, loading states, errors, filters, sorting, and UI states
- `useEffect`: Handling side effects (data fetching) on component mount

**Why Hooks?**
- Simpler than Redux for this scale
- No prop drilling issues
- Native to React 18
- Easier to understand and maintain

### Styling Approach

**Vanilla CSS3 with Modern Features**:
- CSS Grid for responsive layouts
- Flexbox for component alignment
- CSS Animations for smooth transitions
- Backdrop-filter for glassmorphism effects
- CSS Variables concept through class-based theming

**Why not CSS-in-JS or Tailwind?**
- Demonstrates pure CSS3 skills
- Better performance (no runtime overhead)
- Easier to customize and maintain for this project scope
- Shows understanding of CSS fundamentals

### Mock API Design

```javascript
// Simulates realistic API behavior
- 1.5 second delay (network latency)
- 5% error rate (handles edge cases)
- Promise-based (async/await ready)
- Easy to replace with real API
```

### Visual Design Philosophy

**Modern & Professional**:
- Glassmorphism for contemporary feel
- Gradient backgrounds for depth
- Color psychology for status indicators
- Smooth animations for enhanced UX
- Background decorations reinforce logistics theme

### Responsive Strategy

**Mobile-First CSS**:
- Base styles for mobile
- Media queries for larger screens
- Flexible grid that adapts automatically
- Touch-optimized interactions

##  Technical Requirements Fulfilled

| Requirement | Implementation | Status |
|-------------|----------------|--------|
| React.js Framework | React 18.2.0 with functional components | ✅ |
| Modern CSS | CSS3 with Grid, Flexbox, Animations | ✅ |
| State Management | React Hooks (useState, useEffect) | ✅ |
| Mock API | Promise-based with delays | ✅ |
| Version Control | Git with clear commits | ✅ |
| Responsive Design | Mobile-first, adapts to all screens | ✅ |
| Browser Compatibility | Chrome, Firefox, Edge, Safari | ✅ |
| Component Reusability | ShipmentCard, StatusIcon, etc. | ✅ |
| Loading States | Spinner with animation | ✅ |
| Error Handling | User-friendly error messages | ✅ |
| Filter/Sort | Both implemented | ✅ |
| View Details | Expandable cards + console log | ✅ |
| Clean Code | Well-organized, commented | ✅ |
| Documentation | Comprehensive README | ✅ |

## 🎬 Features Demo

### Data Structure
Each shipment includes:
```javascript
{
  id: 1,                              // Unique identifier
  trackingNumber: "TRK-123456",       // Unique tracking number
  status: "In Transit",               // Current status
  lastLocation: "Warehouse A",        // Last known location
  estimatedDelivery: "2024-02-15",   // Estimated delivery date
  sender: "Amazon Warehouse",         // Sender information
  receiver: "Raj Patel",             // Receiver information
  weight: "2.5 kg",                   // Package weight
  packageType: "Standard Box"        // Type of package
}
```

### Status Types
- **Pending**: Order received, awaiting pickup
- **In Transit**: Package is on its way
- **Out for Delivery**: Package is with delivery agent
- **Delivered**: Successfully delivered
- **Cancelled**: Order cancelled

## 🚧 Challenges Faced & Solutions

### Challenge 1: Glassmorphism Performance
**Problem**: Backdrop-filter can be performance-intensive on mobile devices  
**Solution**: Applied blur only to necessary elements, optimized opacity levels, used transform3d for GPU acceleration

### Challenge 2: Staggered Card Animations
**Problem**: All cards animating simultaneously looked jarring  
**Solution**: Used CSS nth-child selectors with animation-delay to create smooth staggered entrance

### Challenge 3: Responsive Grid Layout
**Problem**: Cards needed to look good at all breakpoints  
**Solution**: Used CSS Grid with auto-fill and minmax() for flexible, responsive layout without breakpoint dependencies

### Challenge 4: Background Decorations Balance
**Problem**: Decorative elements could distract from main content  
**Solution**: Subtle opacity (10-15%), blur filter, and fixed positioning to keep them in background layer

### Challenge 5: State Management Simplicity
**Problem**: Deciding between Context API, Redux, or Hooks  
**Solution**: Chose Hooks for simplicity - perfect for this scale, easier to understand, no over-engineering

## 🔮 Future Enhancements

If this were to evolve into a production application, I would consider:

1. **Backend Integration**
   - Connect to real REST API
   - WebSocket for real-time updates
   - Authentication & authorization

2. **Advanced Features**
   - Search by tracking number
   - Date range filtering
   - Export to CSV/PDF
   - Shipment history timeline
   - Push notifications

3. **Performance Optimization**
   - Code splitting
   - Lazy loading for images
   - Virtual scrolling for large datasets
   - Service worker for offline capability

4. **Testing**
   - Unit tests with Jest
   - Component tests with React Testing Library
   - E2E tests with Cypress
   - Coverage reports

5. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader optimization
   - High contrast mode

6. **Developer Experience**
   - TypeScript for type safety
   - ESLint + Prettier configuration
   - Husky for pre-commit hooks
   - CI/CD pipeline

## Browser Compatibility

Tested and verified on:
- ✅ Chrome 120+
- ✅ Firefox 121+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ Mobile Safari (iOS 15+)
- ✅ Chrome Mobile (Android 10+)

##  Development Best Practices

This project follows:
- ✅ Component reusability principles
- ✅ Separation of concerns (components, services, styles)
- ✅ DRY (Don't Repeat Yourself) code
- ✅ Semantic HTML
- ✅ Meaningful variable and function names
- ✅ Comprehensive code comments
- ✅ Consistent formatting and indentation
- ✅ Modern ES6+ JavaScript syntax
- ✅ Responsive design patterns
- ✅ Accessibility considerations

##  Git Commit Strategy

This project uses clear, atomic commits following this pattern:
```
feat: Add filtering functionality to dashboard
fix: Resolve card expansion issue on mobile
style: Update glassmorphism effects
docs: Add comprehensive README
refactor: Extract StatusIcon into separate component
```

##  Contributing

This is a technical assessment project, but feedback and suggestions are welcome!

##  License

MIT License - feel free to use this project for learning purposes.

## Contact

For questions or feedback about this project:
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

##  Acknowledgments

- Design inspiration from modern logistics platforms
- React documentation and community
- CSS Tricks for glassmorphism techniques

---

**Built with ❤️ for logistics excellence**
