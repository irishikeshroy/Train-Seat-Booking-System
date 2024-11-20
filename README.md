# Train Seat Booking System  

A modern, user-friendly train seat booking system designed to simplify seat reservations in a single-coach train.  

## 🚀 Features  

### Visual Seat Map  
- **Grid Layout**: Displays all 80 seats in an intuitive format.  
  - 11 rows with 7 seats each.  
  - 1 row with 3 seats.  
- **Color-coded seats**:  
  - Green: Available.  
  - Dark: Booked.  
- Seat numbers are clearly displayed for easy identification.  

### Booking Features  
- **Flexible Input**: Users can specify the number of seats they want to book (1-7).  
- **Smart Seat Allocation**:  
  - Prioritizes booking in the same row.  
  - Allocates nearby seats if same-row booking isn’t possible.  
- **User Feedback**:  
  - Success messages for successful bookings.  
  - Error messages when seats cannot be booked.  

### User Experience  
- Responsive design for seamless use across all devices.  
- Real-time updates to seat availability status.  
- Simple and intuitive interface for users of all technical skill levels.  

## 🛠️ Technical Details  

### Components  
- **SeatMap**: Renders the visual layout of seats.  
- **BookingForm**: Handles user input and seat booking logic.  
- **seatUtils**: Includes utility functions for seat allocation.  

### Implementation  
- Built with **React.js** and **TypeScript**.  
- Modular and maintainable component structure.  
- Efficient state management to handle dynamic seat allocation.  

## 📦 Installation  

1. **Clone the Repository**:  
   ```bash  
   git clone <repository-url>  
   cd train-seat-booking-system  
   ```  

2. **Install Dependencies**:  
   ```bash  
   npm install  
   ```  

3. **Run the Application**:  
   ```bash  
   npm run dev  
   ```  

4. **Open in Browser**:  
   Visit `http://localhost:3000` to access the application.  

## 🧪 Usage  

1. Enter the number of seats you want to book in the input field.  
2. Click **"Book Seats"** to reserve your seats.  
3. View the updated seat map with booked seats marked.  
4. Continue booking until all seats are reserved.  

## 🌐 Live Demo  

Try out the live version of the Train Seat Booking System here:  
[Train Seat Booking System - Live Demo](https://celadon-flan-a8bc4b.netlify.app/)  

## ✨ Example  

### Input:  
- **Number of seats**: 4  

### Output:  
- **Booked Seats**: [1A, 1B, 1C, 1D]  
- **Updated Seat Map**: Reflects the new availability status.  

## 🤝 Contribution  

1. Fork the repository.  
2. Create a new branch for your feature/bugfix:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Description of changes"  
   ```  
4. Push to the branch:  
   ```bash  
   git push origin feature-name  
   ```  
5. Submit a Pull Request.  

## 📝 License  

This project is open-source and available under the MIT License.  

## 📧 Contact  

For questions or suggestions, feel free to reach out at:  
- **Email**: [rishikeshroy43@gmail.com](mailto:rishikeshroy43@gmail.com)  
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/rishikeshroy/)  

---  

Enjoy using the Train Seat Booking System! 🚆  
