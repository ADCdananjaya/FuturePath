const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    modality: {
      type: String,
      required: true,
      enum: ['Remote', 'InOffice'],
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

const Job = mongoose.model('Job', JobSchema);

module.exports = {
  Job,
};
