import { rgba } from "polished";

// login credential
export const credentials = {
  email: "admin@admin.com",
  password: "password"
};

// logged in user Info
export const ProfileInfo = {
  Name: "System Admin",
  userName: "sysAdmin",
  Role: "Admin",
  phone: "+961888965"
};

// User Redux Actions
export const UserActions = {
  "AUTHENTICATE-USER": "AUTHENTICATE-USER",
  "UNAUTHENTICATE-USER": "UNAUTHENTICATE-USER",
  UPDATE_PROFILE: "UPDATE_PROFILE"
};

// Available Users Redux action
export const UserDataActions = {
  UPDATE_USERS: "UPDATE_USERS"
};

// Bar Chart Data
export const BarChartData = {
  labels: ["27/2/2018", "27/3/2018", "27/4/2018"],
  datasets: [
    {
      label: "Sent Messages",
      data: [
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random())
      ],
      borderWidth: 1,
      backgroundColor: "#42f4b1"
    },
    {
      label: "Received Messages",
      data: [
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random())
      ],
      borderWidth: 1,
      backgroundColor: "#4285f4"
    },
    {
      label: "Failed Messages",
      data: [
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random())
      ],
      borderWidth: 1,
      backgroundColor: "#f4b142"
    }
  ]
};
// Line chart Data
export const LineChartData = {
  labels: ["27/2/2018", "27/3/2018", "27/4/2018"],
  datasets: [
    {
      label: "Sent Calls",
      data: [
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random())
      ],
      borderWidth: 1,
      backgroundColor: rgba("#42f4b1", 0.5),
      borderColor: "#42f4b1"
    },
    {
      label: "Received Calls",
      data: [
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random()),
        Math.floor(100 * Math.random())
      ],
      borderWidth: 1,
      backgroundColor: rgba("#4285f4", 0.5),
      borderColor: "#4285f4"
    }
  ]
};

// Users table Data
export const UserData = [
  {
    FirstName: "Mehmet",
    LastName: "Baran",
    Nationality: "Turkish",
    LastMonthBill: 630,
    PhoneNumber: "+96136589631",
    Subscribed_services: 2,
    Age: 20,
    Address: "Istanbul"
  },
  {
    FirstName: "Mehmet2",
    LastName: "Baran2",
    Nationality: "Turkish",
    LastMonthBill: 6300,
    PhoneNumber: "+96136589631",
    Subscribed_services: 3,
    Age: 50,
    Address: "Cairo"
  },
  {
    FirstName: "Mehmet3",
    LastName: "Baran3",
    Nationality: "Turkish",
    LastMonthBill: 6300,
    PhoneNumber: "+96136589631",
    Subscribed_services: 10,
    Age: 15,
    Address: "Istanbul"
  }
];
