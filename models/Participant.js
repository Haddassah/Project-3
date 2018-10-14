const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  nickName: { type: String, required: false },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  birthday: { type: Date, default: Date.now },
  roomNumber: { type: String, required: false }
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
