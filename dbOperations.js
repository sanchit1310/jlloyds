module.exports = {
  checkandAddCompany: function(req, res) {
        var pg = require('pg');
        var conString = process.env.DATABASE_URL || "postgres://postgres:l1llyhcp@localhost:5432/postgres";
        var client = new pg.Client(conString);
        client.connect();
        console.log(req.query.firstName);
        console.log(req.query.lastName);
        var firstName = req.query.firstName;
        var lastName = req.query.lastName;
        var email = req.query.email;
        var company = req.query.company;
        var licensestart = req.query.licensestart;
        var licenseend = req.query.licenseend;
        var checkCompanyQuery = client.query("select * from company where companyname =" + `${company}`);
        checkCompanyQuery.on("row", function (row, result) {
          if(row.length() !== 0) {
            var query = client.query("insert into company (firstname, lastname , email , companyname, licensestart,licenseend) "+
                                    "values ('"+firstName+"','"+lastName+"','"+
                                        email+"','"+company+"','"+licensestart+"','"+licenseend+"')");

            query.on("end", function (result) {
                client.end();
                res.send("Company Added Successfully");
            });
          }
          res.send("Company Already Exists");
        });

  }    
};
