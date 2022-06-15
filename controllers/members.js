import Member from '../models/Member.js';

/**
 * @route GET api/members
 * @description get all members
 * @access public
 */
export const getAllCrewMember = async (req, res, next) => {
  try {
    const members = await Member.find();

    res.status(200).json({
      members: members,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

/**
 * @route POST api/members
 * @description add a new member
 * @access public
 */
export const addNewCrewMember = async (req, res, next) => {
  try {
    const member = await Member.create(req.body);

    res.status(201).json({
      member: member,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
    });
  }
};
