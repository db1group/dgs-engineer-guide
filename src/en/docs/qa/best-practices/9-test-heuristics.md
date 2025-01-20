# Testing Heuristics

Software testing heuristics is a systematic approach to identifying and designing test cases based on general principles and knowledge gained through experience, relying on common patterns and problem-solving techniques.

It involves using practical rules and guidelines to guide the testing process and the selection of relevant test cases. Software testing heuristics help find defects more efficiently, identify critical areas of the system, and improve test coverage.

This document aims to provide some tips on how to test various parts of software (depending on the CONTEXT of each product) using heuristics.

## Files and Paths in the System
- Long Name (>255 characters)
- Special Characters in Name (space * ? / \ | < > , . ( ) [ ] { } ; : ‘ “ !@ # $ % ^ &)
- Non-existent Name
- Already Existing Name
- No Disk Space
- Minimum Disk Space
- Write Protected
- Unavailable
- Locked
- On Remote Machine
- Corrupted
- Timing, Time and Date
- Timeouts
- Time Difference Between Machines
- Crossing Time Zones
- Always Invalid Days (February 30, September 31)
- February 29 in Non-Leap and Leap Years
- Different Formats (June 5, 2001; 06/05/2001; 06/05/01; 06-05-01; 6/5/2001 12:34)
- Daylight Saving Time Changes
- Clock Adjustment Backward or Forward

## Numbers
- Lower and Upper Boundary Values
- Equivalence Partitioning
- 0, null, empty
- Scientific Notation
- Negatives
- Percentages/Decimals (0.001, 100.11, etc.)
- Comma Separation
- European/American Format (1.500,36/1,566.99)
- Leading Zeros
- Mathematical Rounding
- Calculations
- Age Validation, date sums, etc.
- Masks and Formatting

## Strings
- Long (255, 256, 257, 1000, 1024, 2000, 2048 or more characters)
- Accented Characters (àáâãäåçèéêëìíîðñòôõöö, etc.)
- Asian Characters
- Common Delimiters and Special Characters (“ ‘ ` | / \ , ; : & < > ^ * ? Tab)
- Null, empty
- Single space, multiple spaces, space at the beginning
- End of line characters, line breaks, etc.
- SQL Injection with all insert, search, update actions, etc.
- Upper and lower limits
- Concatenation
- Spelling Errors
- Be mindful of abbreviations in names or unique characters
- Upper and lower case
- Violation of specific domains, such as email addresses, etc.

## Web System Navigation
- Pay attention to heuristics of "Files..., Time and Date..., Numbers and Strings"
- Back (Browser) and keyboard shortcuts, buttons offered by the system
- Refresh
- Bookmark URL
- Select favorite pages when logged out
- Access restricted menus by URL
- Multiple logins
- Be mindful of paths displayed as "breadcrumb"
- Button functionality
- Link and button redirection
- Minimum and maximum resolutions
- Different browsers
- Positioning, alignment of elements
- Colors, fonts, standardization of writing style or element size
- Types of Menus by data format
- Expired Login
- Pop-Ups and New Windows
- Permissions in alerts and modals

## App Navigation
- Pay attention to heuristics of "Files..., Time and Date..., Numbers and Strings"
- Back by gesture/native button of the device and buttons offered by the system
- Refresh (Pull down)
- Multiple logins
- Different platforms and devices (iOS, Android, Mobile, Tablet)
- Automatic updates
- Push notifications
- Login
- Be mindful of paths displayed as "breadcrumb"
- Button functionality
- Link and button redirection
- Minimum and maximum resolutions
- Positioning, alignment of elements
- Colors, fonts, standardization of writing style or element size
- Types of Menus by data format
- Keyboard open by type of menu (numeric, alphanumeric)
- Keyboard overlapping input fields
- Close APP by native device functions, navigate between APPs
- Permission for device functions (Camera, Location, Calendar, etc...)

## API
- Pay attention to heuristics of "Files..., Time and Date..., Numbers and Strings"
- Code Status and messages
- Performance and Load
- Methods
- Database and interface integration
- Data format
- Authentication
- Documentation
- CRUD - Create, Read, Update, Delete

## Database
- Pay attention to heuristics of "Files..., Time and Date..., Numbers and Strings"
- Case Sensitive
- CRUD - Create, Read, Update, Delete
- Data flow within the system
