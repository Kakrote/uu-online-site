# Dynamic Banner System for HeroSection Component

The HeroSection component now supports dynamic banner configuration, allowing you to customize the banner content for different courses and programs.

## Features

- **Dynamic Banner Items**: Configure course duration, study mode, fees, etc.
- **Customizable EMI Banner**: Set up different EMI options per course
- **Icon Support**: Use Lucide React icons for visual elements
- **Show/Hide Option**: Toggle banner visibility
- **Predefined Configurations**: Ready-to-use configurations for common courses

## Basic Usage

### Using Predefined Course Configurations

```tsx
import HeroSection from './heroSection'
import { getCourseConfig } from '@/lib/course-configs'

const Course = () => {
  const courseConfig = getCourseConfig('mba') // Available: mba, bba, mca, btech

  return (
    <HeroSection 
      // ... other props
      bannerItems={courseConfig.bannerItems}
      emiBanner={courseConfig.emiBanner}
      showBanner={true}
    />
  )
}
```

### Custom Banner Configuration

```tsx
import HeroSection from './heroSection'

const Course = () => {
  const customBannerItems = [
    { title: "Duration", time: "18 Months", duration: "3 semesters", icon: "Clock" },
    { title: "Mode", time: "Hybrid", duration: "Online + Campus", icon: "BookOpen" },
    { title: "Fee", time: "INR 75,000", duration: "Total Program", icon: "IndianRupee" },
  ]

  const customEmiBanner = {
    title: "Flexible Payment",
    subtitle: "EMI starting at",
    amount: "₹12,500 INR",
    iconSrc: "/images/icons/payment.png",
    iconAlt: "Payment options"
  }

  return (
    <HeroSection 
      // ... other props
      bannerItems={customBannerItems}
      emiBanner={customEmiBanner}
      showBanner={true}
    />
  )
}
```

## Configuration Options

### BannerItem Interface

```tsx
interface BannerItem {
  title: string      // e.g., "Duration", "Study Mode"
  time: string       // e.g., "2 Years", "Online"
  duration: string   // e.g., "4 semesters", "Flexible"
  icon?: string      // Icon name string (e.g., "Clock", "BookOpen", "IndianRupee")
}
```

### EMIBanner Interface

```tsx
interface EMIBanner {
  title: string      // e.g., "No Cost EMI"
  subtitle: string   // e.g., "EMI starting at"
  amount: string     // e.g., "₹7,500 INR"
  currency?: string  // Optional currency code
  iconSrc?: string   // Path to icon image
  iconAlt?: string   // Alt text for icon
}
```

### HeroSection Banner Props

```tsx
interface HeroSectionProps {
  // ... other props
  bannerItems?: BannerItem[]    // Array of banner items
  emiBanner?: EMIBanner         // EMI banner configuration
  showBanner?: boolean          // Toggle banner visibility (default: true)
}
```

## Predefined Course Configurations

The system comes with predefined configurations for common courses:

- **MBA**: 2 years, online mode, ₹45,000 per semester
- **BBA**: 3 years, 8-10 hours/week, ₹35,000 per semester  
- **MCA**: 2 years, 30-40 students batch, ₹50,000 per semester
- **BTech**: 4 years, bachelor's degree, ₹60,000 per semester

## Available Icons

Use these icon names as strings in your banner configuration:

- **"Clock"** - Duration/Time
- **"Hourglass"** - Study hours  
- **"IndianRupee"** - Fees/Cost
- **"BookOpen"** - Study mode
- **"GraduationCap"** - Degree type
- **"Users"** - Batch size

Example:
```tsx
const bannerItems = [
  { title: "Duration", time: "2 Years", duration: "4 semesters", icon: "Clock" },
  { title: "Mode", time: "Online", duration: "Flexible", icon: "BookOpen" },
]
```

## Examples

### Different Course Types

```tsx
// For MBA
const mbaConfig = getCourseConfig('mba')

// For BBA  
const bbaConfig = getCourseConfig('bba')

// For MCA
const mcaConfig = getCourseConfig('mca')

// For BTech
const btechConfig = getCourseConfig('btech')
```

### Hiding the Banner

```tsx
<HeroSection 
  // ... other props
  showBanner={false}  // This will hide the entire banner section
/>
```

### Custom Icon Usage

```tsx
const techCourseBanner = [
  { title: "Format", time: "Online", duration: "Live Classes", icon: "BookOpen" },
  { title: "Start Date", time: "Jan 2024", duration: "Next Batch", icon: "Clock" },
  { title: "Investment", time: "₹2,999", duration: "Full Program", icon: "IndianRupee" },
]
```

Note: The icon system uses predefined Lucide React icons. If you need additional icons, they need to be added to the `iconMap` in the HeroSection component.

## Notes

- Default values are provided for all banner props, so the component works out of the box
- Banner items are responsive and will scroll horizontally on mobile devices
- The EMI banner uses a green background with white text for visual emphasis
- Icons are optional but recommended for better visual hierarchy
- All configurations support both custom and predefined setups

## Migration from Static Banner

If you're upgrading from the previous static banner implementation:

1. Remove any hardcoded banner data from your component
2. Import the course configuration utility
3. Use `getCourseConfig()` for predefined courses or create custom configurations
4. Pass the configuration as props to HeroSection

The component maintains backward compatibility - if no banner props are provided, it will use sensible defaults.