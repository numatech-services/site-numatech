import mongoose from 'mongoose'

const LeadSchema = new mongoose.Schema({
  name:         { type: String, required: true, trim: true },
  email:        { type: String, required: true, lowercase: true, trim: true },
  phone:        { type: String, trim: true, default: '' },
  organisation: { type: String, trim: true, default: '' },
  type: {
    type: String,
    enum: ['audit','materiel','logiciel','demo','catalogue','devis','infogerance','newsletter','general'],
    default: 'general',
  },
  size:          { type: String, default: '' },
  equipmentType: { type: String, default: '' },
  softwareNeed:  { type: String, default: '' },
  message:       { type: String, trim: true, default: '' },
  projectType:   { type: [String], default: [] },
  status: {
    type: String,
    enum: ['new','contacted','qualified','proposal','closed','lost'],
    default: 'new',
  },
  source: { type: String, default: 'website' },
  ip:     { type: String, default: '' },
  notes:  { type: String, default: '' },          // notes internes admin
}, { timestamps: true })

LeadSchema.index({ email: 1 })
LeadSchema.index({ status: 1, createdAt: -1 })
LeadSchema.index({ type: 1 })

export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema)
