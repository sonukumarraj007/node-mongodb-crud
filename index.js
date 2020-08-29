const mongoose = require("mongoose");

// Connecting to MongoDB
mongoose
  .connect("mongodb://localhost/blog")
  .then(() => console.log("Connected to mongodb..."))
  .catch((err) => console.error("Connection failed...", err));

// Defining a schema
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number,
});

// Creating model
const Course = mongoose.model("Course", courseSchema);

// Saving a document
async function createCoure() {
  let course = new Course({
    name: "java ",
    author: "vikash",
    tags: ["java", "backeng"],
    isPublished: false,
    price: 30,
  });

  result = await course.save();
  console.log(result);
}

// createCoure();

// getting all courese
async function getCoures() {
  const couresList = await Course.find();
  console.log(couresList);
}
// getCoures();

async function getCouresByName() {
  const couresList = await Course.find({
    author: "sonu",
    isPublished: true,
  });
  console.log(couresList);
}
// getCouresByName();

async function getCouresByLimit() {
  const couresList = await Course.find().limit(2);
  console.log(couresList);
}
// getCouresByLimit();

async function getCouresBySort() {
  // acending order
  const couresList = await Course.find().limit(10).sort({ name: 1 });

  // decending order
  // const couresList = await Course.find().limit(2).sort({name : -1});
  console.log(couresList);
}
// getCouresBySort();

async function getCouresBySelectedField() {
  const couresList = await Course.find()
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(couresList);
}
// getCouresBySelectedField();

// comparisan query operators

//  eq (equal)
//  ne (not equal)
//  gt (greater than)
//  gte (greater than or equal to)
//  lt (less than)
//  lte (less than or equal to)
//  in
//  nin (not in)

async function getCouresByComparisanQuery() {
  const couresList = await Course.find({ price: { $gt: 10 } });
  //.find({ price: { $gte: 8, $lte: 20 } });
  // .find({ price: { $in: [8, 15, 20] } });
  console.log(couresList);
}
// getCouresByComparisanQuery();

// logical query operator
// or
// and

async function getCouresByLogicalQuery() {
  const couresList = await Course.find()
    // .or([
    //   { author: "sonu" },
    //   { isPublished: false },
    // ]);
    .and([{ author: "vikash" }, { isPublished: false }]);
  console.log(couresList);
}
getCouresByLogicalQuery();
