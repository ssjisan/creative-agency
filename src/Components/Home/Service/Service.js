import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Service.css'
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    root: {
        width: 275,
        height: 275
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
  }));
const Service = (props) => {
    const classes = useStyles();
    const {title, details, pic,id} = props.list;
    return (
        <main className="d-flex justify-content-center col-md-4 col-sm-3">
            <Link to={"/order/"+id} style={{textDecoration: 'none'}}><Card className={classes.root} id="card">
                <CardContent>
                    <Avatar alt="Remy Sharp" src={pic} className={classes.large} style={{margin: "auto"}} /> 
                    <h3 style={{textAlign:"center"}}>{title}</h3>
                    <Typography variant="body2" component="p" style={{textAlign:"center"}}>{details}</Typography>
                </CardContent>
            </Card></Link>
        </main>
    );
};

export default Service;