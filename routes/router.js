const {Router} = require ("express");

const data = require('../controllers/main_app.js')

const router = Router();

router.get('/GetOwner',data.getowner);

router.get('/add_officer',data.Add_Officer);

router.get('/Update_officer',data.update_Officer);

router.get('/Add_criminal',data.Add_Criminal);

router.get('/Add_complaint',data.Add_Complaint);

router.get('/Approve_complaint',data.Approved_complaint);

router.get('/Resolve_complaint',data.Resolved_complaint);

router.get('/Update_Criminal',data.update_criminal_details);

router.get('/Reject_Complaint',data.Reject_complaint);

router.get('/GetTotalcriminals',data.getTotalCriminals);

router.get('/GetTotalofficers',data.getTotalOfficers);

router.get('/Total_crime_With_Criminalid',data.count_crime_with_criminalId);

router.get('/Total_complaint_With_Officerid',data.count_complaint_Attended_OfficerId);

router.get('/Get_Officer_details',data.getOfficers);

router.get('/Get_Criminal_details',data.getCriminal);

router.get('/Get_Complaint_details',data.getComplaints);

router.get('/Get_Total_Complaint',data.getTotalComplaint);

router.get('/Get_Total_Approved_Complaint',data.getTotalapprovedComplaint);

router.get('/Get_Total_Resolved_Complaint',data.getTotalResolvedComplaint);

router.get('/Get_Total_Rejected_Complaint',data.getTotalRejectedComplaint);

module.exports = router;