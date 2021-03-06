import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function Section1() {

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={12}>
            <center>
              <h5 className={classes.header}>CONTACT US</h5>
              <h1 className={classes.content}>We're Here to Help You</h1>
              <h3 className={classes.description}>Got a project in mind? We'd love to hear about it. Drop us a message so that we can get to know you and understand your project.</h3>
            </center>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Card>
              <Grid container >
                <Grid item xs={12} sm={6} md={7}>
                  <form className={classes.form}>
                    <p className={classes.divider}>Drop a Message</p>
                    <CardBody>

                      <Grid container justify="center" spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                          <CustomInput
                            labelText="Your Name"
                            id="name"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <CustomInput
                            labelText="Your Email"
                            id="email"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                          <CustomInput
                            labelText="Subject"
                            id="subject"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Message"
                            textarea={true}
                            id="message"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </Grid>
                      </Grid>
                    </CardBody>
                   </form>
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <div className={classes.info}>
                    <h4 className={classes.title}>Contact Info</h4>
                    <p className={classes.note}><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp; info@kingofdevs.com.ph</p>
                    <p className={classes.note}><i className="fa fa-phone-square"></i>&nbsp;&nbsp;&nbsp;+21 3 9759 6266</p>
                    <p className={classes.note}><i className="fas fa-fax"></i>&nbsp;&nbsp;&nbsp;+61 3 9753 2995</p>
                    <div className={classes.iconView}>
                      <div>
                        <a href="https://twitter.com/Spider_Man">
                          <span className={classes.icon}><i className="fab fa-twitter-square"></i></span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.linkedin.com/company/Spider-Man-management-systems">
                          <span className={classes.icon}><i className="fab fa-linkedin"></i></span>
                        </a>
                      </div>
                      <div>
                        <a href="https://www.facebook.com/Spider-Man-180734486011135">
                          <span className={classes.icon}><i className="fab fa-facebook-square"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

