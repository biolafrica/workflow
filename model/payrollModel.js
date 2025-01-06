const mongoose = require("mongoose");

const contractStaffSchema = new mongoose.Schema({
  staff_code:{
    type :String,
    default : "",
  },

  createdAt:{
    type: Date,
    default: Date.now,
  },
  
  basic_pay:{
    type :Number,
    default : 0,

  },

  loan:{
    type :Number,
    default : 0,
  },

  lateness_fine:{
    type :Number,
    default : 0,

  },

  pension:{
    type :Number,
    default : 0,
  },

  deductions:{
    type :Number,
    default : 0,

  },

  bonuses:{
    type :Number,
    default : 0,

  },

  tax:{
    type :Number,
    default : 0,
  },

  net_pay:{
    type :Number,
    default : 0,

  },
 
})

const fixedStaffSchema = new mongoose.Schema({

  staff_code:{
    type :String,
    default : "",
  },

  createdAt:{
    type: Date,
    default: Date.now,
  },

  week:{
    type :String,
    default : "",
  },

  basic_pay:{
    type :Number,
    default : 0,

  },

  loan:{
    type :Number,
    default : 0,
  },

  lateness_fine:{
    type :Number,
    default : 0,

  },

  bonuses:{
    type :Number,
    default : 0,

  },

  tax:{
    type :Number,
    default : 0,
  },

  pension:{
    type :Number,
    default : 0,
  },

  unit:{
    type :Number,
    default : 0,
  },

  days:{

    sunday:{
      rate: {type: Number, default: 0},
      unit: {type: Number, default: 0},
      loan: {type: Number, default: 0},
      lateness_fine: {type: Number, default: 0},
      isPresent: {type: Boolean, default: false},
      bonuses: {type: Number, default: 0},
    },

    monday:{
      rate: {type: Number, default: 0},
      unit: {type: Number, default:0},
      loan: {type: Number, default: 0},
      lateness_fine: {type: Number, default: 0},
      isPresent: {type: Boolean, default: false},
      bonuses: {type: Number, default: 0},
    },

    tuesday:{
      rate: {type: Number, default:0},
      unit: {type: Number, default:0},
      loan: {type: Number, default: 0},
      lateness_fine: {type: Number, default: 0},
      isPresent: {type: Boolean, default: false},
      bonuses: {type: Number, default: 0},
    },

    wednesday:{
      rate: {type: Number, default:0},
      unit: {type: Number, default:0},
      loan: {type: Number, default: 0},
      lateness_fine: {type: Number, default: 0},
      isPresent: {type: Boolean, default: false},
      bonuses: {type: Boolean, default: 0},
    },

    thursday:{
      rate: {type: Number, default:0},
      unit: {type: Number, default:0},
      loan: {type: Number, default: 0},
      lateness_fine: {type: Number, default: 0},
      isPresent: {type: Boolean, default: false},
      bonuses: {type: Number, default: 0},
    },

    friday:{
      rate: {type: Number, default:0},
      unit: {type: Number, default:0},
      loan: {type: Number, default: 0},
      lateness_fine: {type: Number, default: 0},
      isPresent: {type: Boolean, default: false},
      bonuses: {type: Number, default: 0},
    },

    saturday:{
      rate: {type: Number, default:0},
      unit: {type: Number, default:0},
      loan: {type: Number, default: 0},
      lateness_fine: {type: Number, default: 0},
      isPresent: {type: Boolean, default: false},
      bonuses: {type: Number, default: 0},
    },

  },


})



module.exports = mongoose.model("ContractStaff", contractStaffSchema, "Payroll")
module.exports = mongoose.model("FixedStaff", fixedStaffSchema, "Payroll");