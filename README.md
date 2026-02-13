TrustBridge User Guide 🤝

TrustBridge is a decentralized escrow application designed to build trust between clients and freelancers. It holds funds safely until work is completed and approved, with a built-in arbitration mechanism for disputes.

🎭 Roles
Client: The person hiring and paying for work.
Freelancer: The person doing the work and receiving payment.
Arbiter: A neutral third party (currently a deployed contract/system role) who resolves disputes.

🚀 How to Use (The Workflow)

1. Connect Your Wallet
Click the "Connect Wallet" button in the top right corner.
Connect your MetaMask or other Web3 wallet (ensure you are on Sepolia Testnet).

3. Create a Contract (Client)
Navigate to 
Create Contract
.
Freelancer Address: Paste the wallet address of the person you are hiring.
Amount: Enter the amount of ETH you want to pay.
Deadline: Set the number of days the freelancer has to complete the work.
Click "Create & Deposit Escrow".
Confirm the transaction in your wallet.

✅ Result: A new Escrow Contract is deployed on the blockchain, and the funds are sent to it. You will be redirected to the Dashboard.

5. View Contracts (Client & Freelancer)
Navigate to 
Dashboard
.
You will see a card for every contract you are involved in.
The card shows the current status: Pending, Active, Completed, Disputed, etc.
Note: If you don't see your new contract immediately, click the "Refresh 🔄" button, as blockchain indexing can take a few seconds.


7. The "Happy Path" (No Disputes) 🙂
Freelancer:
Go to the Dashboard.
Find the Active contract.
Click "Submit Work".
Enter a link to the work (e.g., a Google Drive link, GitHub repo, or IPFS hash).
Confirm transaction.
Client:
Go to the Dashboard.
See that work has been submitted.
Click "Approve & Release".
Confirm transaction.
Result: The funds are effectively transferred to the Freelancer. The contract status becomes Completed.
8. The "Sad Path" (Dispute) ⚖️
If the Client is unhappy with the work, or the Freelancer feels treated unfairly:

Initiate Dispute: Either party can click the "Dispute" button on the contract card in the Dashboard.
Note: This locks the funds so no one can withdraw them.
Arbitration:
Navigate to 
Arbitration
.
(In a real app, this would be a separate dashboard for professional arbiters).
Enter the Contract Address of the disputed escrow.
Vote: The Arbiter votes for either the Freelancer or the Client.
Result:
If Arbiter votes Freelancer -> Funds go to Freelancer.
If Arbiter votes Client -> Funds are refunded to Client.
