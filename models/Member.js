import mongoose from 'mongoose';

const MemberShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please write a name !'],
    unique: true,
    trim: true,
    maxlength: [
      20,
      'Name too long ! No more than 20 characters !',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Member = mongoose.model('Member', MemberShema);

export default Member;
