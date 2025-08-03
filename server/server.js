// const express = require("express");
// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const port = 3000;
// const cors = require("cors");
// app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:4200", // Allow requests from the Angular app's domain
//     methods: ["GET", "POST"], // Allow only GET and POST requests
//     allowedHeaders: ["Content-Type"], // Allow only Content-Type header
//   })
// );
// // Ensure the 'uploads' directory exists
// if (!fs.existsSync("./uploads")) {
//   fs.mkdirSync("./uploads");
// }

// // Multer storage configuration to handle file names and avoid overwriting
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads/"); // Save to 'uploads' directory
//   },
//   filename: (req, file, cb) => {
//     const originalName = file.originalname;
//     const fileExtension = path.extname(originalName);
//     const baseName = path.basename(originalName, fileExtension);

//     // Check if a file with the same name already exists
//     let fileName = originalName;
//     let counter = 1;

//     // If the file exists, append a counter or timestamp to the filename to make it unique
//     while (fs.existsSync(path.join(__dirname, "uploads", fileName))) {
//       fileName = `${baseName}(${counter})${fileExtension}`; // Append a counter to the filename
//       counter++;
//     }

//     cb(null, fileName); // Save with the final unique name
//   },
// });

// const upload = multer({ storage: storage });

// // POST endpoint for file upload
// app.post("/upload", upload.single("file"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).send("No file uploaded.");
//   }

//   res.json({
//     message: "File uploaded successfully",
//     fileName: req.file.filename, // Return the file name
//   });
// });

// // GET endpoint for file download
// app.get("/download/:fileName", (req, res) => {
//   const fileName = req.params.fileName;
//   const filePath = path.join(__dirname, "uploads", fileName);

//   if (fs.existsSync(filePath)) {
//     res.download(filePath, fileName, (err) => {
//       if (err) {
//         console.error("Error in downloading the file:", err);
//         res.status(500).send("Error in downloading the file.");
//       }
//     });
//   } else {
//     res.status(404).send("File not found.");
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// server.js
// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

// const users = Array.from({ length: 100 }, (_, i) => ({
//   id: i + 1,
//   name: `User ${i + 1}`,
// }));

// app.get("/api/users", (req, res) => {
//   const page = parseInt(req.query.page) || 0;
//   const size = parseInt(req.query.size) || 10;
//   const search = (req.query.search || "").toLowerCase();

//   const filtered = users.filter((u) => u.name.toLowerCase().includes(search));
//   const result = filtered.slice(page * size, (page + 1) * size);

//   res.json({
//     data: result,
//     hasMore: (page + 1) * size < filtered.length,
//   });
// });

// app.listen(3000, () => {
//   console.log("API listening on http://localhost:3000");
// });

/**pagination */
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const allProducts = Array.from({ length: 100 }, (_, i) => ({
  id: i.toString(),
  name: `Fruit ${i + 1}`,
}));

app.get("/products", (req, res) => {
  const page = +req.query.page || 0;
  const size = +req.query.size || 10;
  const start = page * size;
  const end = start + size;
  res.json({ products: allProducts.slice(start, end) });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
