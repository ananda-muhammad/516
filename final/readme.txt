---------------------
CONTENTS OF THIS FILE
---------------------
   
 * Introduction
 * Requirements
 * Understanding Header Information
 * Limitations
 * Acknowledgments
 
---------------------
INTRODUCTION
---------------------

This program was created to help with automating the cleaning of pragmatics data, specifically email data, for corpus use. Email data was collected for a series of studies on teaching the pragmatics of email communication using a corpus approach. In order to ready the email data for corpus analysis, they must be cleaned. In other words, the data needs to be organized in a way that conforms to corpus data organization. To do this manually will introduce errors and subsequently result in unsatisfactory corpus analysis output. The program (cleantextprogram.js) was designed to help automate this process. This program uses Node.js

You can find the code along with an explanation of how the program works within the cleantextprogram.js file. Note that the emails included in the emaildata_am.txt file are all fictitious and were written for the purposes of this program only.
  
---------------------
REQUIREMENTS
---------------------

To run this program, you will need to install Node.js (https://nodejs.org/en/download/) and download the program as well as the data file (emaildata_am.txt).

--------------------------------
UNDERSTANDING HEADER INFORMATION
--------------------------------

Corpus files often includes header information that contextualizes the text. The header information is populated by the program using metapragmatics data included in the data file. The following are the codes used in the header portion of each corpus file and example information.

<Purpose: REQ> --> The purpose of the email. REQ indicates it was sent to request something.
<Sender: Graduate Student> --> Academic status of the sender of the email. 
<Recipient: Professor> --> Role of the recipient of the email (e.g., Classmate, Staff).
<Power Relationship: Less power> --> Relative power relationship between sender and recipient.
<Social Distance: High> --> Relative social distance between sender and recipient.
<Degree of Imposition: Low> --> Relative degree of imposition of, for example, the request.
<Year Sent: 2017> --> Year the email was sent.

The program can be edited to include additional header information codes (e.g., initial email, reply email, number of recipient) or different ones.

---------------------
LIMITATIONS
---------------------

This is the first draft of the program. Several limitations of the program that need to be considered:

1) The program does not include an important step required by the Institutional Review Board at Iowa State University, namely replacing identifiable information (e.g., university names, individual names) with pre-determined codes (e.g., [University], [First Name]). This is currently being conducted manually.

2) When (metapragmatic, email subject line) data is missing, the program leaves the content blank. It should be replaced with N/A or No Response.

3) The program outputs files titled emailtext_[count]. Instead of this, file naming should follow a convention. Specifically, files should be named with a review of the contents of the file for easy grouping and identification when conducting corpus analysis. For example:

001_REQ_G_STF_2017

001 = Corpus file number
REQ = Email purpose
G = Graduate student
STF = Staff, email recipient
2017 = Year email was sent

---------------------
ACKNOWLEDGMENTS
---------------------

My thanks go to Dr. Evgeny Chukharev-Hudilainen, Reza Neiriznaghadehi, Erin Todey, and Bremen Vance without whom I will not be able to create this program!