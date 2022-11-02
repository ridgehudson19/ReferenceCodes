const htmlPdf = require("html-pdf");
const fs = require('fs');

function GeneratePdf(typeOfFile, filePath, fileName, toBeGenFileName)
{
	try {
		
		let HTMLFilePath = `.${filePath}${fileName}`;
		
		//check if file exists
		if (!fs.existsSync(HTMLFilePath)){
			console.log("file don't exist");
		}
		
		typeOfFile === "PNG" ?
			toBeGenFileName += ".png" : toBeGenFileName += ".pdf"
		
		const htmlContent = fs.readFileSync(HTMLFilePath, 'utf8');
		const htmlToPdfOptions = {
			"type": typeOfFile, //allowed: png, jpeg, pdf
			"height": "650px", //allowed: mm, cm, in, px
			"width": "850px",
			"renderDelay":2000,
		};
		
		htmlPdf.create(htmlContent, htmlToPdfOptions)
		.toFile(toBeGenFileName, function(err,result){
			if (err) return console.log(err);
			console.log(result);
		});
	} catch (error) {
		console.log("error converting", error);
	}
	
}

GeneratePdf("PDF", "/", "certificate.html", "cert_sample");