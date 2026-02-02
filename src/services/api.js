// Mock shipment data
const MOCK_SHIPMENTS = [
  {
    id: 1,
    trackingNumber: "TRK-123456",
    status: "In Transit",
    lastLocation: "Warehouse A",
    estimatedDelivery: "2024-02-15",
    sender: "Amazon Warehouse",
    receiver: "Raj Patel",
    weight: "2.5 kg",
    packageType: "Standard Box"
  },
  {
    id: 2,
    trackingNumber: "TRK-789012",
    status: "Delivered",
    lastLocation: "Customer Address",
    estimatedDelivery: "2024-01-22",
    sender: "Flipkart Fulfillment",
    receiver: "Priya Sharma",
    weight: "1.2 kg",
    packageType: "Envelope"
  },
  {
    id: 3,
    trackingNumber: "TRK-456789",
    status: "Out for Delivery",
    lastLocation: "Local Hub",
    estimatedDelivery: "2024-02-10",
    sender: "Myntra Warehouse",
    receiver: "Arjun Kumar",
    weight: "0.8 kg",
    packageType: "Soft Package"
  },
  {
    id: 4,
    trackingNumber: "TRK-345678",
    status: "Cancelled",
    lastLocation: "Warehouse B",
    estimatedDelivery: "2024-02-20",
    sender: "Snapdeal Warehouse",
    receiver: "Vikram Singh",
    weight: "1.5 kg",
    packageType: "Standard Box"
  },
  {
    id: 5,
    trackingNumber: "TRK-567890",
    status: "Pending",
    lastLocation: "Sorting Facility",
    estimatedDelivery: "2024-02-25",
    sender: "Meesho Logistics",
    receiver: "Lakshmi Iyer",
    weight: "3.0 kg",
    packageType: "Large Box"
  }
];

/**
 * Simulates fetching shipment data from an API
 * Includes a realistic delay and occasional error simulation
 * @returns {Promise} Resolves with shipment data or rejects with error
 */
export const fetchShipments = () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay (1.5 seconds)
    setTimeout(() => {
      // Simulate occasional API errors (5% chance)
      if (Math.random() < 0.05) {
        reject(new Error("Failed to fetch shipments. Please try again."));
      } else {
        resolve(MOCK_SHIPMENTS);
      }
    }, 1500);
  });
};

export default fetchShipments;
