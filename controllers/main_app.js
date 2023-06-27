const Web3 = require('web3');
require('dotenv').config()

const ContractAddress = process.env.CONTRACT_ADDRESS;

const Wallet = process.env.ACCOUNT_ADDRESS;

const gaurav_wallet = process.env.GAURAV_WALLET;

const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "c_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "rejected_officer_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Complaint_Rejected",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "c_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "resolved_officer_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Complaint_Resolved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "c_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "approval_officer_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "Complaint_approved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "CriminalAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "OfficerAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_add",
				"type": "address"
			}
		],
		"name": "Update_Officers",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "Update_criminal_Details",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "c_id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "registerd_complaint",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "complaint_filed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Complaints",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "criminalId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "officer_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "approvedmark",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "resolutionmark",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "resolved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isexists",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetTotalApprovedComplaint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetTotalComplaint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetTotalCriminals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetTotalOfficers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetTotalRejectedComplaint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GetTotalResolvedComplaint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "officer_id",
				"type": "uint256"
			}
		],
		"name": "Total_Complaint_WithOfficerid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_criminalID",
				"type": "uint256"
			}
		],
		"name": "Total_Crime_WithCriminalid",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_details",
				"type": "string"
			}
		],
		"name": "Update_Criminal_Details",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_addrnew",
				"type": "address"
			}
		],
		"name": "Update_Officer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_criminalId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			}
		],
		"name": "addComplaint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_details",
				"type": "string"
			}
		],
		"name": "addCriminal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "addOfficer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_complaintId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_approvedmark",
				"type": "string"
			}
		],
		"name": "approveComplaint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "criminals",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "age",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "isExists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "officers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_complaintId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_approvedmark",
				"type": "string"
			}
		],
		"name": "rejectComplaint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_complaintId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_resolutionmark",
				"type": "string"
			}
		],
		"name": "resolveComplaint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.PROVIDER));
const contract = new web3.eth.Contract(abi, ContractAddress);

module.exports = {

    getowner: async (req, res) => {
        try {
            const owner_id = await contract.methods.Owner().call();
            console.log("Owner is = ", owner_id);
            res.json(owner_id);
        }

        catch (err) {
            console.log(err);
        }
    },

    Add_Officer : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(Wallet);
            console.log("nonce is", nonce);
            
            const _name = "Dhiral";
            const _address = Wallet;
    
            const tx = {
                from : Wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 300000,
                nonce : nonce,
                data:contract.methods.addOfficer(_name,_address).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
           
        }
    
        catch (err) {
            console.log(err);
        }
    },
    
    update_Officer : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(Wallet);
            console.log("nonce is", nonce);
            
            
            const _addr = Wallet;
            const _name = "Gaurav"
            const _addrnew = gaurav_wallet
            const tx = {
                from : Wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 300000,
                nonce : nonce,
                data:contract.methods.Update_Officer(_addr,_name,_addrnew).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
           
        }
    
        catch (err) {
            console.log(err);
        }
    },
    
    Add_Criminal : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(gaurav_wallet);
            console.log("nonce is", nonce);
            
            const _name = "xyz";
            const _age = 25;
            const _details = "This crimial is theft money";
    
            const tx = {
                from : gaurav_wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 400000,
                nonce : nonce,
                data:contract.methods.addCriminal(_name,_age,_details).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.GAURAV_PRIVATEKEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
    
        }
    
        catch (err) {
            console.log(err);
        }
    },

    Add_Complaint : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(gaurav_wallet);
            console.log("nonce is", nonce);
            
            const _criminalId = 2;
            const _title = "Fake Complaint";
            const _description = "This complaint is about fake report";
    
            const tx = {
                from : gaurav_wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 400000,
                nonce : nonce,
                data:contract.methods.addComplaint(_criminalId,_title,_description).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.GAURAV_PRIVATEKEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
    
        }
    
        catch (err) {
            console.log(err);
        }
    },

    Approved_complaint : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(gaurav_wallet);
            console.log("nonce is", nonce);
            
            const _complaintId = 1;
            const _approvedmark = "This complaint is approved by officer";
            
    
            const tx = {
                from : gaurav_wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 400000,
                nonce : nonce,
                data:contract.methods.approveComplaint(_complaintId,_approvedmark).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.GAURAV_PRIVATEKEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
    
        }
    
        catch (err) {
            console.log(err);
        }
    },

    Resolved_complaint : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(gaurav_wallet);
            console.log("nonce is", nonce);
            
            const _complaintId = 1;
            const _resolutionmark = "This complaint is Resolved by officer";
            
    
            const tx = {
                from : gaurav_wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 400000,
                nonce : nonce,
                data:contract.methods.resolveComplaint(_complaintId,_resolutionmark).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.GAURAV_PRIVATEKEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
    
        }
    
        catch (err) {
            console.log(err);
        }
    },

    Reject_complaint : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(gaurav_wallet);
            console.log("nonce is", nonce);
            
            const _complaintId = 2;
            const _approvedmark = "This complaint is Rejected by officer";
            
    
            const tx = {
                from : gaurav_wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 400000,
                nonce : nonce,
                data:contract.methods.rejectComplaint(_complaintId,_approvedmark).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.GAURAV_PRIVATEKEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
    
        }
    
        catch (err) {
            console.log(err);
        }
    },
    update_criminal_details : async (req,res) =>{
        try{
    
            const gaSPrice = await web3.eth.getGasPrice();
            console.log("gas price", gaSPrice);
    
            const nonce = await web3.eth.getTransactionCount(gaurav_wallet);
            console.log("nonce is", nonce);
            
            const id = 2;
            const _name = "Unkown";
            const _age = 25;
            const _details = "This crimial is theft money";
    
            const tx = {
                from : gaurav_wallet,
                to : ContractAddress,
                gaSPrice: gaSPrice,
                gasLimit : 400000,
                nonce : nonce,
                data:contract.methods.Update_Criminal_Details(id,_name,_age,_details).encodeABI()
    
            };
    
            console.log("Transaction data ",tx);
            res.json(tx);
            // Sign the transaction with the private key
            const signedTx = await web3.eth.accounts.signTransaction(tx, process.env.GAURAV_PRIVATEKEY);
    
            // Send the signed transaction to the network
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(receipt);
    
        }
    
        catch (err) {
            console.log(err);
        }
    },

    getTotalCriminals: async (req, res) => {

        try {
            const total_criminals = await contract.methods.GetTotalCriminals().call();
            console.log("Total Criminals is = ", total_criminals);
            res.json(total_criminals);
        }
        catch (err) {
            console.log(err);
        }
    },
    getTotalOfficers: async (req, res) => {
        try {
            const total_officers = await contract.methods.GetTotalOfficers().call();
            console.log("Total Officers is = ", total_officers);
            res.json(total_officers);
        }

        catch (err) {
            console.log(err);
        }
    },
    count_crime_with_criminalId: async (req, res) => {
        try {
            const _criminalID = 1
            const total_crime = await contract.methods.Total_Crime_WithCriminalid(_criminalID).call();
            console.log("Criminal total crime is = ", total_crime);
            res.json(total_crime);
        }
        catch (err) {
            console.log(err);
        }
    },

    count_complaint_Attended_OfficerId: async (req, res) => {
        try {
            const _officerId = 1
            const total_complaint_attend = await contract.methods.Total_Complaint_WithOfficerid(_officerId).call();
            console.log("Officer total Complaint attended is = ", total_complaint_attend);
            res.json(total_complaint_attend);
        }
        catch (err) {
            console.log(err);
        }
    },

    getOfficers: async (req, res) => {
        try {
            const get_officer = await contract.methods.officers(gaurav_wallet).call();
            console.log("officer details:", get_officer);
            res.json(get_officer);
        }
        catch (err) {
            console.log(err);
        }
    },

    getCriminal: async (req, res) => {
        try {
            const get_criminal = await contract.methods.criminals(2).call();
            console.log("criminal Details:", get_criminal);
            res.json(get_criminal);
        }
        catch (err) {
            console.log(err);
        }
    },
    getComplaints: async (req, res) => {
        try {
            const get_complaint = await contract.methods.Complaints(2).call();
            console.log("Complaints Details:", get_complaint);
            res.json(get_complaint);
        }
        catch (err) {
            console.log(err);
        }
    },

    getTotalComplaint: async (req, res) => {
        try {
            const complaintid = await contract.methods.GetTotalComplaint().call();
            console.log("Total Complaint is = ", complaintid);
            res.json(complaintid);
        }
        catch (err) {
            console.log(err);
        }

    },
    getTotalapprovedComplaint: async (req, res) => {
        try {
            const approve = await contract.methods. GetTotalApprovedComplaint().call();
            console.log("Total Approved Complaint is = ", approve);
            res.json(approve);
        }
        catch (err) {
            console.log(err);
        }

    },
    getTotalResolvedComplaint: async (req, res) => {
        try {
            const resolve = await contract.methods.GetTotalResolvedComplaint().call();
            console.log("Total Resolved Complaint is = ",resolve);
            res.json(resolve);
        }
        catch (err) {
            console.log(err);
        }

    },
    getTotalRejectedComplaint: async (req, res) => {
        try {
            const reject = await contract.methods.GetTotalRejectedComplaint().call();
            console.log("Total Rejected Complaint is = ", reject);
            res.json(reject);
        }
        catch (err) {
            console.log(err);
        }

    }
}    